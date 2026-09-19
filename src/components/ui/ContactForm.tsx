import { useId, useState, type FormEvent } from 'react'
import { useI18n } from '@/i18n'
import { Button } from '@/components/ui/Button'
import { Field, FieldError, SelectField, fieldClasses } from '@/components/ui/FormFields'
import { Icon } from '@/components/ui/Icon'
import { NoteBox } from '@/components/ui/NoteBox'
import {
  EMAIL_PATTERN,
  MIN_MESSAGE_LENGTH,
  currentOrigin,
  sendContactMessage,
  type ContactFormValues,
} from '@/lib/form'
import { routes } from '@/lib/site'
import { cn } from '@/lib/utils'

const emptyValues: ContactFormValues = {
  name: '',
  company: '',
  role: '',
  email: '',
  phone: '',
  teamSize: '',
  challenge: '',
  message: '',
}

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>
type Status = 'idle' | 'sending' | 'success' | 'error'

type ContactFormProps = {
  /** Rotulo da pagina, usado na indicacao de origem do e-mail recebido. */
  pageLabel: string
}

export function ContactForm({ pageLabel }: ContactFormProps) {
  const { dict } = useI18n()
  const form = dict.contact.form
  const fieldId = useId()

  const [values, setValues] = useState<ContactFormValues>(emptyValues)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const isSending = status === 'sending'

  function update(field: keyof ContactFormValues, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }))

    if (errors[field]) {
      setErrors((previous) => ({ ...previous, [field]: undefined }))
    }
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {}

    if (values.name.trim().length < 2) next.name = form.errorName
    if (!EMAIL_PATTERN.test(values.email.trim())) next.email = form.errorEmail
    if (values.message.trim().length < MIN_MESSAGE_LENGTH) next.message = form.errorMessage

    return next
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isSending) return

    const validation = validate()
    setErrors(validation)

    if (Object.keys(validation).length > 0) {
      setStatus('idle')
      // Foco no primeiro campo invalido: importante para uso por teclado.
      const firstInvalid = Object.keys(validation)[0]
      document.getElementById(`${fieldId}-${firstInvalid}`)?.focus()
      return
    }

    setStatus('sending')

    const outcome = await sendContactMessage(
      values,
      currentOrigin(pageLabel, dict.label, routes.contact),
    )

    if (outcome.ok) {
      setValues(emptyValues)
      setStatus('success')
      return
    }

    setStatus('error')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot anti-spam: invisivel na tela e ignorado por leitores de tela. */}
      <div className="hidden" aria-hidden="true">
        <input name="_honey" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${fieldId}-name`}
          label={form.name}
          required
          error={errors.name}
          value={values.name}
          onChange={(value) => update('name', value)}
          placeholder={form.namePlaceholder}
          autoComplete="name"
        />

        <Field
          id={`${fieldId}-email`}
          label={form.email}
          required
          type="email"
          error={errors.email}
          value={values.email}
          onChange={(value) => update('email', value)}
          placeholder={form.emailPlaceholder}
          autoComplete="email"
        />

        <Field
          id={`${fieldId}-company`}
          label={form.company}
          value={values.company}
          onChange={(value) => update('company', value)}
          placeholder={form.companyPlaceholder}
          autoComplete="organization"
        />

        <Field
          id={`${fieldId}-role`}
          label={form.role}
          value={values.role}
          onChange={(value) => update('role', value)}
          placeholder={form.rolePlaceholder}
          autoComplete="organization-title"
        />

        <Field
          id={`${fieldId}-phone`}
          label={`${form.phone} (${form.optional})`}
          value={values.phone}
          onChange={(value) => update('phone', value)}
          placeholder={form.phonePlaceholder}
          autoComplete="tel"
        />

        <SelectField
          id={`${fieldId}-teamSize`}
          label={form.teamSize}
          placeholder={form.selectPlaceholder}
          value={values.teamSize}
          onChange={(value) => update('teamSize', value)}
          options={form.teamSizeOptions}
        />

        <SelectField
          id={`${fieldId}-challenge`}
          label={form.challenge}
          placeholder={form.selectPlaceholder}
          value={values.challenge}
          onChange={(value) => update('challenge', value)}
          options={form.challengeOptions}
          className="sm:col-span-2"
        />
      </div>

      <div>
        <label
          htmlFor={`${fieldId}-message`}
          className="mb-2 block text-sm font-medium text-graphite-200"
        >
          {form.message} <span className="text-accent-300">*</span>
        </label>
        <textarea
          id={`${fieldId}-message`}
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
          placeholder={form.messagePlaceholder}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${fieldId}-message-error` : undefined}
          className={cn(fieldClasses, 'resize-y', errors.message && 'border-red-400/60')}
        />
        <FieldError id={`${fieldId}-message-error`} message={errors.message} />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="primary" size="lg" disabled={isSending} iconRight="arrowRight">
          {isSending ? form.sending : form.submit}
        </Button>
        <p className="text-xs leading-relaxed text-graphite-400">{form.privacy}</p>
      </div>

      <div aria-live="polite" role="status">
        {status === 'success' ? (
          <p className="flex items-start gap-2.5 rounded-xl border border-accent-300/30 bg-accent-400/10 px-4 py-3 text-sm text-accent-200">
            <Icon name="check" className="mt-0.5 size-4 shrink-0" />
            {form.success}
          </p>
        ) : null}

        {status === 'error' ? (
          <p className="flex items-start gap-2.5 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
            <Icon name="alert" className="mt-0.5 size-4 shrink-0" />
            {form.error}
          </p>
        ) : null}
      </div>

      <NoteBox tone="dark" icon="mail" className="mt-2">
        {dict.ui.formOriginNote}
      </NoteBox>
    </form>
  )
}
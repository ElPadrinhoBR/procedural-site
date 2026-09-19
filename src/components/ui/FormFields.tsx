import { Icon } from './Icon'
import { cn } from '@/lib/utils'

/** Estilo base dos campos escuros do formulario. */
export const fieldClasses =
  'w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-graphite-400 transition-colors duration-200 focus:border-accent-300/60 focus:bg-white/[0.06] focus:outline-none'

type FieldProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: 'text' | 'email' | 'tel'
  required?: boolean
  error?: string
  autoComplete?: string
  className?: string
}

export function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
  error,
  autoComplete,
  className,
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-graphite-200">
        {label} {required ? <span className="text-accent-300">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClasses, error && 'border-red-400/60')}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  )
}

type SelectFieldProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  options: readonly string[]
  placeholder: string
  className?: string
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  className,
}: SelectFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-graphite-200">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={cn(fieldClasses, 'appearance-none pr-10', !value && 'text-graphite-400')}
        >
          <option value="" className="bg-navy-900 text-graphite-300">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-navy-900 text-white">
              {option}
            </option>
          ))}
        </select>
        <Icon
          name="chevronDown"
          className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-graphite-400"
        />
      </div>
    </div>
  )
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null

  return (
    <p id={id} role="alert" className="mt-2 text-xs text-red-300">
      {message}
    </p>
  )
}
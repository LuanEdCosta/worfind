type TextFieldProps = {
  className?: string
  label: string
  hint?: string
  children: React.ReactNode
}

export function TextField({
  className = '',
  label,
  hint,
  children,
}: TextFieldProps) {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <div>{label}</div>
      {children}
      {hint && <div>{hint}</div>}
    </div>
  )
}

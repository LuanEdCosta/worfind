type TextFieldProps = {
  label: string
  hint?: string
  children: React.ReactNode
}

export function TextField({ label, hint, children }: TextFieldProps) {
  return (
    <div>
      <div>{label}</div>
      {children}
      {hint && <div>{hint}</div>}
    </div>
  )
}

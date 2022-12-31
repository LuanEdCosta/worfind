type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>
}

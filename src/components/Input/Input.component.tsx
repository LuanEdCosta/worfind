type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode
}

export function Input({ children, ...props }: InputProps) {
  return (
    <input
      className="h-14 px-4 rounded-lg border border-gray-200 bg-gray-50 outline-none transition-colors hover:border-gray-300 focus:bg-gray-100 w-full"
      {...props}
    >
      {children}
    </input>
  )
}

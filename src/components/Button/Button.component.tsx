type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`bg-accent-500 text-white rounded-lg h-14 px-6 flex justify-center items-center text-center space-x-4 text-xl font-bold transition-colors hover:bg-accent-600 focus-visible:bg-accent-600 active:bg-accent-600 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

type EmptyProps = {
  message: string
  icon: React.ReactNode
}

export function Empty({ icon, message }: EmptyProps) {
  return (
    <div>
      {icon}
      {message}
    </div>
  )
}

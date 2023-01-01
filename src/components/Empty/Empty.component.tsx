type EmptyProps = {
  message: string
  icon: React.ReactNode
}

export function Empty({ icon, message }: EmptyProps) {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="text-center text-gray-400 text-9xl">{icon}</div>
      <p className="text-center text-gray-400 text-xl sm:text-2xl">{message}</p>
    </div>
  )
}

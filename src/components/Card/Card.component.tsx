type CardProps = {
  label: string
  value: string | number | undefined
  icon?: React.ReactNode
}

export function Card({ label, value, icon }: CardProps) {
  return (
    <div className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex flex-col flex-1 space-y-2">
        <div className="text-gray-700">{label}</div>
        <div className="text-2xl font-bold text-accent-500">{value}</div>
      </div>

      {icon && (
        <div className="text-gray-400 text-3xl sm:text-4xl md:text-5xl">
          {icon}
        </div>
      )}
    </div>
  )
}

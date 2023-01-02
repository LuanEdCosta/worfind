type MiniCardProps = {
  label: string
  icon?: React.ReactNode
}

export function MiniCard({ label, icon }: MiniCardProps) {
  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-lg p-4 space-x-2">
      {icon && <div className="text-xl">{icon}</div>}
      <div>{label}</div>
    </div>
  )
}

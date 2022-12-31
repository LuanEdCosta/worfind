type MiniCardProps = {
  label: string
  icon?: React.ReactNode
}

export function MiniCard({ label, icon }: MiniCardProps) {
  return (
    <div>
      {icon}
      {label}
    </div>
  )
}

type CardProps = {
  label: string
  value: string | number
  icon?: React.ReactNode
}

export function Card({ label, value, icon }: CardProps) {
  return (
    <div>
      <div>
        <div>{label}</div>
        <div>{value}</div>
      </div>

      {icon}
    </div>
  )
}

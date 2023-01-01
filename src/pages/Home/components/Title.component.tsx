type TitleProps = {
  title: string
}

export function Title({ title }: TitleProps) {
  return <h1 className="text-4xl font-bold text-center">{title}</h1>
}

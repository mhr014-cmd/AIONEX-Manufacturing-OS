type Props = {
  title: string
  value: string
  color?: string
}

const KPICard = ({
  title,
  value,
  color,
}: Props) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2
        className="text-4xl font-black mt-4"
        style={{ color: color || 'white' }}
      >
        {value}
      </h2>

    </div>
  )
}

export default KPICard
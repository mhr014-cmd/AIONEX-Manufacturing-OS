const Navbar = () => {
  return (
    <div className="h-[80px] border-b border-slate-800 flex items-center justify-between px-8 bg-slate-950">

      <div>
        <h1 className="text-2xl font-bold">
          Manufacturing Dashboard
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Smart AI Driven Garments ERP
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3">
          Super Admin
        </div>

      </div>

    </div>
  )
}

export default Navbar
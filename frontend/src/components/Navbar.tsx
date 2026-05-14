const Navbar = () => {
  return (
    <div className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">

      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-slate-400 text-sm">
          Welcome to AIONEX Manufacturing OS
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 transition-all px-5 py-2 rounded-xl text-white font-medium">
          Notifications
        </button>

        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
          A
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex bg-[#020617] min-h-screen text-white">
      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
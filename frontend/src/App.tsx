import Sidebar from "./components/Sidebar"
import DashboardPage from "./pages/DashboardPage"

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <DashboardPage />
    </div>
  )
}

export default App
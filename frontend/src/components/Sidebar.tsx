import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "220px",
        background: "#020617",
        minHeight: "100vh",
        padding: "20px 10px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1
          style={{
            color: "#3b82f6",
            marginBottom: "10px",
          }}
        >
          AIONEX
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "30px",
            fontSize: "14px",
          }}
        >
          Manufacturing OS
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Link to="/">Dashboard</Link>

          <Link to="/production">Production</Link>

          <Link to="/production-lines">Production Lines</Link>

          <Link to="/shipment">Shipment</Link>

          <Link to="/inventory">Inventory</Link>

          <Link to="/ai-copilot">AI Copilot</Link>
        </div>
      </div>

      <button
        onClick={logout}
        style={{
          background: "#dc2626",
          color: "white",
          border: "none",
          padding: "14px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>
    </div>
  );
}
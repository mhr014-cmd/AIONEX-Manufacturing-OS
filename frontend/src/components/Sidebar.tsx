const Sidebar = () => {
  return (
    <div
      style={{
        width: 260,
        height: "100vh",
        background: "#020617",
        borderRight: "1px solid #1e293b",
        padding: 20,
      }}
    >
      <h1 style={{ color: "#3b82f6" }}>
        AIONEX
      </h1>

      <div style={{ marginTop: 40 }}>
        <button
          style={{
            width: "100%",
            padding: 15,
            marginBottom: 10,
          }}
        >
          Dashboard
        </button>

        <button
          style={{
            width: "100%",
            padding: 15,
            marginBottom: 10,
          }}
        >
          Production
        </button>

        <button
          style={{
            width: "100%",
            padding: 15,
            marginBottom: 10,
          }}
        >
          Shipment
        </button>
      </div>
    </div>
  )
}

export default Sidebar
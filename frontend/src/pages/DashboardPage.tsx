const DashboardPage = () => {
  return (
    <div
      style={{
        flex: 1,
        padding: 30,
        background: "#020617",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: 32 }}>
        Manufacturing Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 20,
          marginTop: 30,
        }}
      >
        <div
          style={{
            background: "#0f172a",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <p>Total Output</p>
          <h2>42,850</h2>
        </div>

        <div
          style={{
            background: "#0f172a",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <p>Efficiency</p>
          <h2>85.7%</h2>
        </div>

        <div
          style={{
            background: "#0f172a",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <p>Shipment Readiness</p>
          <h2>73.2%</h2>
        </div>

        <div
          style={{
            background: "#0f172a",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <p>Delayed Orders</p>
          <h2>3</h2>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
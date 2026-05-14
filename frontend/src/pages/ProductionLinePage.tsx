import { useEffect, useState } from "react";
import Layout from "../components/Layout";

interface ProductionLine {
  id: number;
  line_name: string;
  supervisor: string;
  status: string;
  target_output: number;
  actual_output: number;
  efficiency: number;
  defects: number;
  operators: number;
}

export default function ProductionLinesPage() {
  const [lines, setLines] = useState<ProductionLine[]>([]);

  useEffect(() => {
    loadLines();
  }, []);

  const loadLines = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/production-lines/"
      );

      const data = await response.json();

      setLines(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "bold",
        }}
      >
        Production Lines
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        Factory execution monitoring
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {lines.map((line) => (
          <div
            key={line.id}
            style={{
              background: "#172554",
              padding: "24px",
              borderRadius: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                {line.line_name}
              </h2>

              <span
                style={{
                  background:
                    line.status === "Running"
                      ? "#16a34a"
                      : "#dc2626",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontSize: "14px",
                }}
              >
                {line.status}
              </span>
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p>Supervisor: {line.supervisor}</p>
              <p>Target: {line.target_output}</p>
              <p>Actual: {line.actual_output}</p>
              <p>Efficiency: {line.efficiency}%</p>
              <p>Defects: {line.defects}</p>
              <p>Operators: {line.operators}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
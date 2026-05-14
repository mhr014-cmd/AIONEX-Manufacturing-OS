import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell
} from "recharts";

export default function DashboardPage() {

  const [stats, setStats] = useState({
    orders: 0,
    shipments: 0,
    materials: 0,
    runningLines: 0,
    lowStock: 0
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const ordersRes = await fetch(
        "http://127.0.0.1:8000/orders/"
      );

      const shipmentsRes = await fetch(
        "http://127.0.0.1:8000/shipments/"
      );

      const inventoryRes = await fetch(
        "http://127.0.0.1:8000/inventory/"
      );

      const linesRes = await fetch(
        "http://127.0.0.1:8000/production-lines/"
      );

      const orders = await ordersRes.json();
      const shipments = await shipmentsRes.json();
      const inventory = await inventoryRes.json();
      const lines = await linesRes.json();

      setStats({
        orders: orders.length,
        shipments: shipments.length,
        materials: inventory.length,
        runningLines: lines.filter(
          (line: any) => line.status === "Running"
        ).length,
        lowStock: inventory.filter(
          (item: any) => item.available < 100
        ).length
      });

    } catch (error) {
      console.error(error);
    }
  };

  const overviewData = [
    {
      name: "Orders",
      value: stats.orders
    },
    {
      name: "Shipments",
      value: stats.shipments
    },
    {
      name: "Materials",
      value: stats.materials
    },
    {
      name: "Lines",
      value: stats.runningLines
    }
  ];

  const stockData = [
    {
      name: "Low Stock",
      value: stats.lowStock
    },
    {
      name: "Available",
      value: stats.materials - stats.lowStock
    }
  ];

  const COLORS = [
    "#ef4444",
    "#22c55e"
  ];

  return (

    <Layout>

      <h1 className="text-6xl font-bold mb-10">
        Dashboard
      </h1>

      {/* STATS */}

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-[#172554] p-8 rounded-3xl">
          <p className="text-gray-300">
            Total Orders
          </p>

          <h2 className="text-6xl font-bold mt-4">
            {stats.orders}
          </h2>
        </div>

        <div className="bg-[#172554] p-8 rounded-3xl">
          <p className="text-gray-300">
            Total Shipments
          </p>

          <h2 className="text-6xl font-bold mt-4">
            {stats.shipments}
          </h2>
        </div>

        <div className="bg-[#172554] p-8 rounded-3xl">
          <p className="text-gray-300">
            Total Materials
          </p>

          <h2 className="text-6xl font-bold mt-4">
            {stats.materials}
          </h2>
        </div>

        <div className="bg-[#172554] p-8 rounded-3xl">
          <p className="text-gray-300">
            Running Lines
          </p>

          <h2 className="text-6xl font-bold mt-4">
            {stats.runningLines}
          </h2>
        </div>

      </div>

      {/* SECOND ROW */}

      <div className="grid grid-cols-2 gap-6 mt-10">

        {/* BAR CHART */}

        <div className="bg-[#172554] p-6 rounded-3xl">

          <h2 className="text-2xl font-bold mb-6">
            Factory Overview
          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <BarChart data={overviewData}>

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="value"
                fill="#3b82f6"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* PIE CHART */}

        <div className="bg-[#172554] p-6 rounded-3xl">

          <h2 className="text-2xl font-bold mb-6">
            Inventory Status
          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <PieChart>

              <Pie
                data={stockData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                label
              >

                {stockData.map((_, index) => (

                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />

                ))}

              </Pie>

              <Tooltip />
              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </Layout>
  );
}
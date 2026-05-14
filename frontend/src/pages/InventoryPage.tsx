import { useEffect, useState } from "react";
import Layout from "../components/Layout";

interface InventoryItem {
  id: number;
  material_code: string;
  material_name: string;
  category: string;
  unit: string;
  stock_qty: number;
  reserved_qty: number;
  available_qty: number;
  status: string;
}

export default function InventoryPage() {

  const [materials, setMaterials] = useState<InventoryItem[]>([]);

  const [form, setForm] = useState({
    material_code: "",
    material_name: "",
    category: "",
    unit: "",
    stock_qty: 0,
    reserved_qty: 0,
    available_qty: 0,
    status: "Available"
  });

  const loadInventory = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/inventory/"
      );

      const data = await response.json();

      setMaterials(data);

    } catch (error) {

      console.error("Inventory load failed:", error);

    }
  };

  useEffect(() => {

    loadInventory();

  }, []);

  const createMaterial = async () => {

    try {

      await fetch(
        "http://127.0.0.1:8000/inventory/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      setForm({
        material_code: "",
        material_name: "",
        category: "",
        unit: "",
        stock_qty: 0,
        reserved_qty: 0,
        available_qty: 0,
        status: "Available"
      });

      await loadInventory();

    } catch (error) {

      console.error("Create material failed:", error);

    }
  };

  return (

    <Layout>

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-6xl font-bold">
            Inventory Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage factory raw materials
          </p>

        </div>

      </div>

      <div className="bg-[#172554] p-8 rounded-3xl mt-10">

        <h2 className="text-4xl font-bold mb-8">
          Add Material
        </h2>

        <div className="grid grid-cols-4 gap-4">

          <input
            placeholder="Code"
            value={form.material_code}
            onChange={(e) =>
              setForm({
                ...form,
                material_code: e.target.value
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl outline-none"
          />

          <input
            placeholder="Material Name"
            value={form.material_name}
            onChange={(e) =>
              setForm({
                ...form,
                material_name: e.target.value
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl outline-none"
          />

          <input
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl outline-none"
          />

          <input
            placeholder="Unit"
            value={form.unit}
            onChange={(e) =>
              setForm({
                ...form,
                unit: e.target.value
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl outline-none"
          />

          <input
            type="number"
            placeholder="Stock Qty"
            value={form.stock_qty}
            onChange={(e) =>
              setForm({
                ...form,
                stock_qty: Number(e.target.value)
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl outline-none"
          />

          <input
            type="number"
            placeholder="Reserved Qty"
            value={form.reserved_qty}
            onChange={(e) =>
              setForm({
                ...form,
                reserved_qty: Number(e.target.value)
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl outline-none"
          />

          <input
            type="number"
            placeholder="Available Qty"
            value={form.available_qty}
            onChange={(e) =>
              setForm({
                ...form,
                available_qty: Number(e.target.value)
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl outline-none"
          />

          <select
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl outline-none"
          >
            <option value="Available">
              Available
            </option>

            <option value="Low Stock">
              Low Stock
            </option>

            <option value="Out of Stock">
              Out of Stock
            </option>

          </select>

        </div>

        <button
          onClick={createMaterial}
          className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-2xl mt-6 font-bold"
        >
          Add Material
        </button>

      </div>

      <div className="bg-[#172554] p-8 rounded-3xl mt-10 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-gray-700 text-left">

              <th className="p-4">Code</th>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Unit</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Reserved</th>
              <th className="p-4">Available</th>
              <th className="p-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {materials.length > 0 ? (

              materials.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-gray-800"
                >

                  <td className="p-4">
                    {item.material_code}
                  </td>

                  <td className="p-4">
                    {item.material_name}
                  </td>

                  <td className="p-4">
                    {item.category}
                  </td>

                  <td className="p-4">
                    {item.unit}
                  </td>

                  <td className="p-4">
                    {item.stock_qty}
                  </td>

                  <td className="p-4">
                    {item.reserved_qty}
                  </td>

                  <td className="p-4">
                    {item.available_qty}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-4 py-2 rounded-xl text-sm font-bold
                      ${
                        item.status === "Available"
                          ? "bg-green-500"
                          : item.status === "Low Stock"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan={8}
                  className="text-center p-10 text-gray-400"
                >
                  No inventory data found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </Layout>

  );
}
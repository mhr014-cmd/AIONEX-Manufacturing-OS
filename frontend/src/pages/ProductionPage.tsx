import { useEffect, useState } from "react";
import Layout from "../components/Layout";

interface Order {
  id: number;
  order_no: string;
  buyer: string;
  style: string;
  quantity: number;
  status: string;
}

export default function ProductionPage() {

  const [orders, setOrders] = useState<Order[]>([]);

  const [form, setForm] = useState({
    order_no: "",
    buyer: "",
    style: "",
    quantity: ""
  });

  const loadOrders = async () => {

    const response = await fetch(
      "http://127.0.0.1:8000/orders/"
    );

    const data = await response.json();

    setOrders(data);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const createOrder = async () => {

    await fetch(
      "http://127.0.0.1:8000/orders/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          order_no: form.order_no,
          buyer: form.buyer,
          style: form.style,
          quantity: Number(form.quantity),
          status: "Pending"
        })
      }
    );

    setForm({
      order_no: "",
      buyer: "",
      style: "",
      quantity: ""
    });

    loadOrders();
  };

  const updateStatus = async (
    id: number,
    status: string
  ) => {

    await fetch(
      `http://127.0.0.1:8000/orders/${id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
      }
    );

    loadOrders();
  };

  return (
    <Layout>

      <h1 className="text-6xl font-bold">
        Production Management
      </h1>

      <p className="text-gray-400 mt-2">
        Manage factory production orders
      </p>

      <div className="bg-[#172554] p-8 rounded-3xl mt-10">

        <h2 className="text-4xl font-bold mb-8">
          Create Production Order
        </h2>

        <div className="grid grid-cols-4 gap-4">

          <input
            placeholder="Order No"
            value={form.order_no}
            onChange={(e) =>
              setForm({
                ...form,
                order_no: e.target.value
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl"
          />

          <input
            placeholder="Buyer"
            value={form.buyer}
            onChange={(e) =>
              setForm({
                ...form,
                buyer: e.target.value
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl"
          />

          <input
            placeholder="Style"
            value={form.style}
            onChange={(e) =>
              setForm({
                ...form,
                style: e.target.value
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl"
          />

          <input
            placeholder="Quantity"
            value={form.quantity}
            onChange={(e) =>
              setForm({
                ...form,
                quantity: e.target.value
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl"
          />

        </div>

        <button
          onClick={createOrder}
          className="bg-blue-600 px-8 py-4 rounded-2xl mt-6 font-bold"
        >
          Create Order
        </button>

      </div>

      <div className="bg-[#172554] p-6 rounded-3xl mt-10 overflow-auto">

        <table className="w-full">

          <thead>

            <tr className="text-left border-b border-gray-700">

              <th className="p-4">Order No</th>
              <th className="p-4">Buyer</th>
              <th className="p-4">Style</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order.id}
                className="border-b border-gray-800"
              >

                <td className="p-4">
                  {order.order_no}
                </td>

                <td className="p-4">
                  {order.buyer}
                </td>

                <td className="p-4">
                  {order.style}
                </td>

                <td className="p-4">
                  {order.quantity}
                </td>

                <td className="p-4">

                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(
                        order.id,
                        e.target.value
                      )
                    }
                    className="bg-orange-500 px-4 py-2 rounded-xl"
                  >

                    <option>Pending</option>
                    <option>Cutting</option>
                    <option>Sewing</option>
                    <option>Packing</option>
                    <option>Completed</option>

                  </select>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </Layout>
  );
}
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

interface Shipment {
  id: number;
  shipment_no: string;
  buyer: string;
  destination: string;
  status: string;
}

export default function ShipmentPage() {

  const [shipments, setShipments] = useState<Shipment[]>([]);

  const [form, setForm] = useState({
    shipment_no: "",
    buyer: "",
    destination: ""
  });

  const loadShipments = async () => {

    const response = await fetch(
      "http://127.0.0.1:8000/shipments/"
    );

    const data = await response.json();

    setShipments(data);
  };

  useEffect(() => {
    loadShipments();
  }, []);

  const createShipment = async () => {

    await fetch(
      "http://127.0.0.1:8000/shipments/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          shipment_no: form.shipment_no,
          buyer: form.buyer,
          destination: form.destination,
          status: "Pending"
        })
      }
    );

    setForm({
      shipment_no: "",
      buyer: "",
      destination: ""
    });

    loadShipments();
  };

  const updateStatus = async (
    id: number,
    status: string
  ) => {

    await fetch(
      `http://127.0.0.1:8000/shipments/${id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
      }
    );

    loadShipments();
  };

  return (

    <Layout>

      <h1 className="text-6xl font-bold">
        Shipment Management
      </h1>

      <p className="text-gray-400 mt-2">
        Manage factory shipments
      </p>

      <div className="bg-[#172554] p-8 rounded-3xl mt-10">

        <h2 className="text-4xl font-bold mb-8">
          Create Shipment
        </h2>

        <div className="grid grid-cols-3 gap-4">

          <input
            placeholder="Shipment No"
            value={form.shipment_no}
            onChange={(e) =>
              setForm({
                ...form,
                shipment_no: e.target.value
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
            placeholder="Destination"
            value={form.destination}
            onChange={(e) =>
              setForm({
                ...form,
                destination: e.target.value
              })
            }
            className="bg-[#1e2b4f] p-4 rounded-2xl"
          />

        </div>

        <button
          onClick={createShipment}
          className="bg-blue-600 px-8 py-4 rounded-2xl mt-6 font-bold"
        >
          Create Shipment
        </button>

      </div>

      <div className="bg-[#172554] p-6 rounded-3xl mt-10 overflow-auto">

        <table className="w-full">

          <thead>

            <tr className="text-left border-b border-gray-700">

              <th className="p-4">Shipment No</th>
              <th className="p-4">Buyer</th>
              <th className="p-4">Destination</th>
              <th className="p-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {shipments.map((shipment) => (

              <tr
                key={shipment.id}
                className="border-b border-gray-800"
              >

                <td className="p-4">
                  {shipment.shipment_no}
                </td>

                <td className="p-4">
                  {shipment.buyer}
                </td>

                <td className="p-4">
                  {shipment.destination}
                </td>

                <td className="p-4">

                  <select
                    value={shipment.status}
                    onChange={(e) =>
                      updateStatus(
                        shipment.id,
                        e.target.value
                      )
                    }
                    className="bg-cyan-500 px-4 py-2 rounded-xl"
                  >

                    <option>Pending</option>
                    <option>In Transit</option>
                    <option>Delivered</option>

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
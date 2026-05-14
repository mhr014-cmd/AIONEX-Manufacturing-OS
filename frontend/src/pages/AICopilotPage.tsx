import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export default function AICopilotPage() {

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // LOAD CHAT
  useEffect(() => {

    const savedChats = localStorage.getItem(
      "aionex_chat_history"
    );

    if (savedChats) {

      try {

        const parsed = JSON.parse(savedChats);

        if (Array.isArray(parsed)) {
          setMessages(parsed);
        }

      } catch (error) {
        console.log(error);
      }
    }

  }, []);

  // SAVE CHAT
  useEffect(() => {

    localStorage.setItem(
      "aionex_chat_history",
      JSON.stringify(messages)
    );

    // AUTO SCROLL
    setTimeout(() => {

      chatEndRef.current?.scrollIntoView({
        behavior: "smooth"
      });

    }, 100);

  }, [messages]);

  // NEW CHAT
  const newChat = () => {

    setMessages([]);

    localStorage.removeItem(
      "aionex_chat_history"
    );
  };

  // DELETE MESSAGE
  const deleteMessage = (id: number) => {

    const updated = messages.filter(
      (m) => m.id !== id
    );

    setMessages(updated);

    localStorage.setItem(
      "aionex_chat_history",
      JSON.stringify(updated)
    );
  };

  // SEND MESSAGE
  const sendMessage = async () => {

    if (!input.trim()) return;

    const userInput = input.trim();

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: userInput,
      timestamp: new Date().toLocaleTimeString()
    };

    const updatedMessages = [
      ...messages,
      userMessage
    ];

    setMessages(updatedMessages);

    setInput("");

    try {

      // GET REAL DATA
      const [
        ordersRes,
        shipmentsRes,
        inventoryRes,
        productionRes
      ] = await Promise.all([
        fetch("http://127.0.0.1:8000/orders/"),
        fetch("http://127.0.0.1:8000/shipments/"),
        fetch("http://127.0.0.1:8000/inventory/"),
        fetch("http://127.0.0.1:8000/production-lines/")
      ]);

      const orders = await ordersRes.json();
      const shipments = await shipmentsRes.json();
      const inventory = await inventoryRes.json();
      const production = await productionRes.json();

      const text = userInput.toLowerCase();

      let reply = "";

      // HELLO
      if (
        text === "hi" ||
        text === "hello" ||
        text === "hey"
      ) {

        reply =
          "Hello 👋\nWelcome to AIONEX Manufacturing Copilot.";

      }

      // SHIPMENT
      else if (
        text.includes("shipment")
      ) {

        const delivered = shipments.filter(
          (s: any) =>
            s.status === "Delivered"
        ).length;

        const pending = shipments.filter(
          (s: any) =>
            s.status === "Pending"
        ).length;

        const transit = shipments.filter(
          (s: any) =>
            s.status === "In Transit"
        ).length;

        reply =
          `📦 Shipment Summary\n\n` +
          `Total Shipments: ${shipments.length}\n` +
          `Delivered: ${delivered}\n` +
          `Pending: ${pending}\n` +
          `In Transit: ${transit}`;

      }

      // INVENTORY
      else if (
        text.includes("inventory")
      ) {

        const lowStock = inventory.filter(
          (i: any) =>
            Number(i.available) < 10
        ).length;

        reply =
          `📦 Inventory Summary\n\n` +
          `Total Materials: ${inventory.length}\n` +
          `Low Stock Items: ${lowStock}`;

      }

      // PRODUCTION
      else if (
        text.includes("production")
      ) {

        const running = production.filter(
          (p: any) =>
            p.status === "Running"
        ).length;

        reply =
          `🏭 Production Summary\n\n` +
          `Total Lines: ${production.length}\n` +
          `Running Lines: ${running}`;

      }

      // DASHBOARD
      else if (
        text.includes("dashboard") ||
        text.includes("summary")
      ) {

        const pendingOrders = orders.filter(
          (o: any) =>
            o.status === "Pending"
        ).length;

        const lowStock = inventory.filter(
          (i: any) =>
            Number(i.available) < 10
        ).length;

        reply =
          `📊 Factory Dashboard\n\n` +
          `Orders: ${orders.length}\n` +
          `Pending Orders: ${pendingOrders}\n\n` +
          `Shipments: ${shipments.length}\n\n` +
          `Inventory Materials: ${inventory.length}\n` +
          `Low Stock: ${lowStock}\n\n` +
          `Production Lines: ${production.length}`;

      }

      // DEFAULT
      else {

        reply =
          "I can help with:\n\n" +
          "• Shipment summary\n" +
          "• Inventory summary\n" +
          "• Production summary\n" +
          "• Dashboard summary";

      }

      const aiMessage: Message = {
        id: Date.now() + 100,
        role: "assistant",
        content: reply,
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages([
        ...updatedMessages,
        aiMessage
      ]);

    } catch (error) {

      const aiMessage: Message = {
        id: Date.now() + 200,
        role: "assistant",
        content:
          "❌ Backend connection failed.",
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages([
        ...updatedMessages,
        aiMessage
      ]);
    }
  };

  return (

    <Layout>

      <div className="flex gap-6 h-[90vh]">

        {/* SIDEBAR */}

        <div className="w-[260px] bg-[#09122c] rounded-3xl p-4 flex flex-col">

          <button
            onClick={newChat}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded-2xl font-bold mb-6"
          >
            + New Chat
          </button>

          <div className="flex-1 overflow-auto space-y-3">

            {messages.map((msg) => (

              <div
                key={msg.id}
                className="bg-[#172554] rounded-2xl p-3 relative"
              >

                <button
                  onClick={() =>
                    deleteMessage(msg.id)
                  }
                  className="absolute top-2 right-2 text-red-400"
                >
                  ×
                </button>

                <div className="text-xs text-gray-400 mb-1">
                  {msg.timestamp}
                </div>

                <div className="text-sm truncate pr-4">
                  {msg.content}
                </div>

              </div>

            ))}

          </div>

        </div>

        {/* CHAT AREA */}

        <div className="flex-1 bg-[#172554] rounded-3xl p-6 flex flex-col">

          <h1 className="text-6xl font-bold">
            AI Manufacturing Copilot
          </h1>

          <p className="text-gray-400 mt-2">
            AI-powered garments manufacturing intelligence
          </p>

          <div className="flex-1 overflow-auto mt-8 space-y-6 pr-2">

            {messages.map((msg) => (

              <div
                key={msg.id}
                className={`max-w-[80%] p-4 rounded-2xl whitespace-pre-line ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-600"
                    : "bg-[#22315d]"
                }`}
              >

                <div>
                  {msg.content}
                </div>

                <div className="text-xs text-gray-300 mt-3">
                  {msg.timestamp}
                </div>

              </div>

            ))}

            <div ref={chatEndRef} />

          </div>

          {/* INPUT */}

          <div className="flex gap-4 mt-6">

            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {
                  sendMessage();
                }

              }}
              placeholder="Ask AI about garments manufacturing..."
              className="flex-1 bg-[#1e2b4f] rounded-2xl px-4 outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl font-bold"
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </Layout>
  );
}
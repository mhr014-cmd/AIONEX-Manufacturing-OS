import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("token", "aionex_token");

      navigate("/");
    }
  };

  return (
    <div
      style={{
        background: "#020617",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "#172554",
          padding: "40px",
          borderRadius: "20px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          AIONEX Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            color: "#000",
            background: "#fff",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            color: "#000",
            background: "#fff",
          }}
        />

        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
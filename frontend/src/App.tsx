import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import ProductionPage from "./pages/ProductionPage";
import ShipmentPage from "./pages/ShipmentPage";
import InventoryPage from "./pages/InventoryPage";
import AICopilotPage from "./pages/AICopilotPage";
import LoginPage from "./pages/LoginPage";

/* IMPORTANT */
import ProductionLinePage from "./pages/ProductionLinePage";

function ProtectedRoute({ children }: any) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/login" element={<LoginPage />} />

        {/* DASHBOARD */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* PRODUCTION */}
        <Route
          path="/production"
          element={
            <ProtectedRoute>
              <ProductionPage />
            </ProtectedRoute>
          }
        />

        {/* PRODUCTION LINES */}
        <Route
          path="/production-lines"
          element={
            <ProtectedRoute>
              <ProductionLinePage />
            </ProtectedRoute>
          }
        />

        {/* SHIPMENT */}
        <Route
          path="/shipment"
          element={
            <ProtectedRoute>
              <ShipmentPage />
            </ProtectedRoute>
          }
        />

        {/* INVENTORY */}
        <Route
          path="/inventory"
          element={
            <ProtectedRoute>
              <InventoryPage />
            </ProtectedRoute>
          }
        />

        {/* AI COPILOT */}
        <Route
          path="/ai-copilot"
          element={
            <ProtectedRoute>
              <AICopilotPage />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
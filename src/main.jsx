import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GamePlatform from "./components/GamePlatform";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen bg-gray-900">
      <GamePlatform />
    </div>
  </StrictMode>
);

// src/App.tsx
import Slideshow from "./Slideshow";

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(120deg,#0b0f1a,#0e1425 40%,#0b0f1a)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Brand bar */}
      <div
        style={{
          position: "fixed",
          left: 20,
          top: 16,
          display: "flex",
          alignItems: "center",
          gap: 8,
          zIndex: 100,
        }}
      >
        <img
          src="/assets/GFS.svg"
          alt="GFS Marketing Logo"
          style={{
            width: 80,
            height: 80,
            filter: "drop-shadow(0 4px 10px rgba(0,0,0,.4))",
          }}
        />
        <div style={{ fontWeight: 800, fontSize: 14 }}>GFS Marketing (Pty) Ltd</div>
      </div>

      {/* Hint text */}
      <div
        style={{
          position: "fixed",
          right: 20,
          top: 16,
          fontSize: 12,
          opacity: 0.8,
          zIndex: 100,
        }}
      >
        Tip: ←/→ • Space to pause
      </div>

      {/* Fullscreen slideshow */}
      <Slideshow />
    </div>
  );
}
	
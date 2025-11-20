// src/Slideshow.tsx
import { useEffect, useState } from "react";
import Slide from "./Slide";
import slidesData from "./slidesData";

const AUTOPLAY_MS = 6500;

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  // Simple autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidesData.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const go = (n: number) => {
    if (n < 0) n = slidesData.length - 1;
    if (n >= slidesData.length) n = 0;
    setIndex(n);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* current slide only */}
      <Slide slide={slidesData[index]!} />

      {/* nav buttons */}
      <div
        style={{
          position: "fixed",
          right: 18,
          bottom: 18,
          display: "flex",
          gap: 10,
          zIndex: 200,
        }}
      >
        <button
          onClick={() => go(index - 1)}
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,.2)",
            background: "rgba(20,26,46,.7)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ←
        </button>
        <button
          onClick={() => go(index + 1)}
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,.2)",
            background: "rgba(20,26,46,.7)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          →
        </button>
      </div>

      {/* dots */}
      <div
        style={{
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 22,
          display: "flex",
          gap: 10,
          padding: "6px 10px",
          borderRadius: 999,
          background: "rgba(16,20,34,.7)",
          border: "1px solid rgba(255,255,255,.15)",
          zIndex: 200,
        }}
      >
        {slidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              background:
                i === index
                  ? "#9aa8ff"
                  : "rgba(154,168,255,0.35)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

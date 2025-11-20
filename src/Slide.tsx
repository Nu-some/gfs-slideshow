// src/Slide.tsx
export type SlideData = {
  title: string;
  kicker: string;
  heading: string;
  description: string;
  bullets?: string[] | null;
  bg: string;
};

type SlideProps = {
  slide: SlideData;
};

export default function Slide({ slide }: SlideProps) {
  const { title, kicker, heading, description, bullets, bg } = slide;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      {/* background image */}
      <img
        src={bg}
        alt={title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",     // 🔴 key change – fills the whole screen
    transform: "scale(1.02)", // optional: slight zoom so edges don’t show
    filter: "saturate(1.05) contrast(1.03) brightness(.95)",
        }}
      />

      {/* dark veil */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7))",
        }}
      />

      {/* text panel */}
      <div
        style={{
          position: "relative",
          maxWidth: 900,
          width: "90%",
          background: "rgba(15,23,42,0.9)",
          borderRadius: 18,
          padding: "18px 24px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 20px 45px rgba(0,0,0,0.7)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#d4f8e1",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#2f63f6,#d120aa)",
              boxShadow: "0 0 12px rgba(129,140,248,0.9)",
            }}
          />
          {kicker}
        </div>

        <h2
          style={{
            margin: "6px 0 0",
            fontSize: 28,
            lineHeight: 1.1,
            fontWeight: 800,
          }}
        >
          {heading}
        </h2>

        {bullets && bullets.length > 0 ? (
          <>
            <p
              style={{
                marginTop: 10,
                fontSize: 15,
                color: "#e5e7eb",
              }}
            >
              {description}
            </p>
            <ul
              style={{
                marginTop: 6,
                paddingLeft: 18,
                fontSize: 14,
                color: "#d1d5db",
              }}
            >
              {bullets.map((b, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{ __html: b }}
                  style={{ marginBottom: 4 }}
                />
              ))}
            </ul>
          </>
        ) : (
          <div
            style={{
              marginTop: 10,
              fontSize: 14,
              color: "#d1d5db",
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </div>
  );
}

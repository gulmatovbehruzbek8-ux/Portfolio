import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Behruzbek Gulmatov — Robotics & AI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B0B0F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow Effects */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(79, 140, 255, 0.22)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "20%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(34, 211, 238, 0.12)",
            filter: "blur(110px)",
          }}
        />

        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "#4F8CFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "22px",
                letterSpacing: "1px",
              }}
            >
              BG
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#F5F7FA", fontSize: "24px", fontWeight: "bold" }}>
                Behruzbek Gulmatov
              </span>
              <span
                style={{
                  color: "#9CA3AF",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Presidential School in Khiva
              </span>
            </div>
          </div>

          <div
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              background: "rgba(79, 140, 255, 0.12)",
              border: "1px solid rgba(79, 140, 255, 0.3)",
              color: "#4F8CFF",
              fontSize: "15px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            NODE: KHIVA-01 • 10TH GRADE
          </div>
        </div>

        {/* Main Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            zIndex: 10,
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              fontSize: "58px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.12,
              letterSpacing: "-0.5px",
            }}
          >
            Robotics Engineer &amp; AI Builder
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#9CA3AF",
              lineHeight: 1.4,
            }}
          >
            Building autonomous navigation hardware, competitive AI toolkits, and high-impact student initiatives in Khiva, Uzbekistan.
          </div>
        </div>

        {/* Credential Distinctions Row */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              padding: "12px 22px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "#F5F7FA",
              fontSize: "17px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            🥇 3× Regional Gold
          </div>

          <div
            style={{
              padding: "12px 22px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "#F5F7FA",
              fontSize: "17px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            📜 IELTS Band 8.0 (R: 9.0 · L: 8.5)
          </div>

          <div
            style={{
              padding: "12px 22px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "#F5F7FA",
              fontSize: "17px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            🎓 Edexcel IGCSE Triple 9
          </div>

          <div
            style={{
              padding: "12px 22px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "#F5F7FA",
              fontSize: "17px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            🏆 1M UZS Winner
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

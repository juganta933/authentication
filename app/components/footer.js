export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "24px 40px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        background: "#0a0a0a",
        color: "white",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <p style={{ margin: 0, color: "#bbb", fontSize: "15px" }}>
        Built by{" "}
        <a
          href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#FF9FFC",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Juganta
        </a>
      </p>

      <p
        style={{
          marginTop: "8px",
          color: "#777",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} HealthGrid AI. All rights reserved.
      </p>
    </footer>
  );
}
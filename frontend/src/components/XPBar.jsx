export default function XPBar({ xp, max }) {
  const percent = (xp / max) * 100;

  return (
    <div style={{
      padding: "20px",
      background: "white",
      borderRadius: "10px",
      marginBottom: "20px",
      border: "1px solid #ccc"
    }}>
      <h3>XP: {xp}/{max}</h3>

      <div style={{
        background: "#ddd",
        height: "14px",
        borderRadius: "10px",
        marginTop: "10px"
      }}>
        <div style={{
          width: percent + "%",
          height: "100%",
          background: "#32CD32",
          borderRadius: "10px",
          transition: "0.4s"
        }}></div>
      </div>

      <p style={{ marginTop: "8px", fontSize: "14px", opacity: 0.7 }}>
        Faltam {max - xp} XP para o próximo nível!
      </p>
    </div>
  );
}

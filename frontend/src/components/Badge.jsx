export default function Badge({ label }) {
  return (
    <span style={{
      padding: "6px 12px",
      background: "#228B22",
      color: "white",
      borderRadius: "20px",
      fontSize: "12px",
      marginRight: "6px"
    }}>
      {label}
    </span>
  );
}

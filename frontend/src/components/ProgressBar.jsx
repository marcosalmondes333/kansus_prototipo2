export default function ProgressBar({ progress }) {
  return (
    <div style={{
      background: "#ddd",
      borderRadius: "10px",
      height: "12px",
      width: "100%",
      marginTop: "10px"
    }}>
      <div style={{
        width: `${progress}%`,
        height: "100%",
        background: "#228B22",
        borderRadius: "10px",
        transition: "0.4s"
      }}></div>
    </div>
  );
}

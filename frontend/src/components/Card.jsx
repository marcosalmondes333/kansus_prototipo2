export default function Card({ title, children }) {
  return (
    <div className="card">
      <h2 style={{ color: "#228B22", marginBottom: "10px" }}>{title}</h2>
      {children}
    </div>
  );
}

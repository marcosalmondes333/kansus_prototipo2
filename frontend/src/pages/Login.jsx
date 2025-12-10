export default function Login() {
  return (
    <div style={{ width: "300px", margin: "80px auto" }}>
      <h2>Entrar</h2>

      <input type="email" placeholder="Email" style={inputStyle} />
      <input type="password" placeholder="Senha" style={inputStyle} />

      <button style={btnStyle}>Login</button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid gray",
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  background: "#228B22",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

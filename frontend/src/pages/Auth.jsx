import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? <Login /> : <Register />}

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Criar conta" : "Já tenho conta"}
      </button>
    </div>
  );
}

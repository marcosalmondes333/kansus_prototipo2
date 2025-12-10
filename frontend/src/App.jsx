import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Gamification from "./pages/Gamification";
import Goals from "./pages/Goals";

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <BrowserRouter>
      <nav>
        <h2 style={{ color: "white" }}>KANSUS</h2>

        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/gamification">Gamificação</Link>
          <Link to="/goals">Metas</Link>
        </div>

        <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {openMenu && (
        <div className="mobile-menu">
          <Link onClick={() => setOpenMenu(false)} to="/">Home</Link>
          <Link onClick={() => setOpenMenu(false)} to="/login">Login</Link>
          <Link onClick={() => setOpenMenu(false)} to="/dashboard">Dashboard</Link>
          <Link onClick={() => setOpenMenu(false)} to="/gamification">Gamificação</Link>
          <Link onClick={() => setOpenMenu(false)} to="/goals">Metas</Link>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gamification" element={<Gamification />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </BrowserRouter>
  );
}

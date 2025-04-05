import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const dummyUsers = [
  { username: "admin", password: "123", role: "tamu" },
  { username: "sivitas", password: "456", role: "sivitas" },
];

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = dummyUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      alert("Login berhasil!");
      navigate("/home");
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

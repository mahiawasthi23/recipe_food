// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       alert("Please enter email and password");
//       return;
//     }

//     setLoading(true);

//     // Simulate login success (no backend call)
//     setTimeout(() => {
//       setLoading(false);
//       alert("Logged in (simulation). You will see dashboard.");
//       navigate("/dashboard");
//     }, 1000);
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "40px auto" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           style={{ padding: 8, fontSize: 16 }}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           style={{ padding: 8, fontSize: 16 }}
//         />
//         <button disabled={loading} style={{ padding: 10, fontSize: 16 }}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//       <p style={{ marginTop: 12 }}>
//         Don't have an account? <Link to="/signup">Sign up here</Link>
//       </p>
//     </div>
//   );
// }

// recipe_food/src/pages/Login.jsx
// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://recipe-app-backend-3-zktr.onrender.com/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();
      console.log("Login response:", data);

      if (res.status === 200 && data.user) {
        alert(`Welcome ${data.user.name}!`);
        navigate("/dashboard", { state: { user: data.user } });
      } else {
        alert(data.error || "Invalid credentials!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

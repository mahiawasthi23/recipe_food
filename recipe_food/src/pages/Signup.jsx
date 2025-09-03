// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ username: "", email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.username || !form.email || !form.password) {
//       alert("All fields are required");
//       return;
//     }

//     setLoading(true);

//     // Simulate signup success (no backend call)
//     setTimeout(() => {
//       setLoading(false);
//       alert("Signed up (simulation). You can login now.");
//       navigate("/login");
//     }, 1000);
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "40px auto" }}>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={form.username}
//           onChange={handleChange}
//           required
//           style={{ padding: 8, fontSize: 16 }}
//         />
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
//           {loading ? "Signing up..." : "Sign Up"}
//         </button>
//       </form>
//       <p style={{ marginTop: 12 }}>
//         Already have an account? <Link to="/login">Login here</Link>
//       </p>
//     </div>
//   );
// }



// recipe_food/src/pages/Signup.jsx
// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://recipe-app-backend-3-zktr.onrender.com/api/auth/signup",
        {
          method: "POST",
          body: JSON.stringify({ username: name, email, password }), // ✅ backend ke hisaab se username
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();
      console.log("Signup response:", data);
      console.log("Response status:", res.status);

      if (res.status === 200 || data.user) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert(data.error || "Signup failed! Email may already exist.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;


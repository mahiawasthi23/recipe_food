import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  // For now, no auth, so show Login and Signup always
  // You can add auth state later to show Logout etc.

  return (
    <nav style={{ padding: "10px 20px", background: "#333", color: "white", display: "flex", justifyContent: "space-between" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: 24 }}>
        RecipeApp
      </Link>
      <div style={{ display: "flex", gap: 15 }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
        <Link to="/recipes/new" style={{ color: "white", textDecoration: "none" }}>Add Recipe</Link>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Signup</Link>
      </div>
    </nav>
  );
}

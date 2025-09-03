import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserRaw = localStorage.getItem("user");
    let storedUser = null;

    try {
      storedUser = JSON.parse(storedUserRaw);
    } catch {
   
      if (storedUserRaw) storedUser = { email: storedUserRaw };
    }

    if (storedUser) setUser(storedUser);

  
    const handleStorageUpdate = () => {
      const updatedUserRaw = localStorage.getItem("user");
      let updatedUser = null;
      try {
        updatedUser = JSON.parse(updatedUserRaw);
      } catch {
        if (updatedUserRaw) updatedUser = { email: updatedUserRaw };
      }
      setUser(updatedUser);
    };

    window.addEventListener("storageUpdate", handleStorageUpdate);

    return () => {
      window.removeEventListener("storageUpdate", handleStorageUpdate);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h1>Recipe App</h1>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={menuOpen ? "show" : ""}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/recipeform">Add Recipe</Link></li>
        {user ? (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

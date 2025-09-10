import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState(""); 
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (onSearch) onSearch(value); 
  };

  return (
    <nav className="navbar">
      <div className="logo_food">
        <img src="girlfood.png" className="cook_logo" alt="logo" />
        <h1><span>𝓡𝓮𝓬𝓲𝓹𝓮 𝓐𝓹𝓹</span></h1>
      </div>

      
      {user && (
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={handleSearchChange}
          className="navbar-search"
        />
      )}

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={menuOpen ? "show" : ""}>
        <li><Link to="/">Home</Link></li>

        {user ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/recipeform">Add Recipe</Link></li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
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

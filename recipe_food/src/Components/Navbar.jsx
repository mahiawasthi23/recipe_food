// // import { Link, useNavigate } from "react-router-dom";
// // import { useState } from "react";

// // export default function Navbar() {
// //   const navigate = useNavigate();
// //   // For now, no auth, so show Login and Signup always
// //   // You can add auth state later to show Logout etc.

// //   return (
// //     <nav style={{ padding: "10px 20px", background: "#333", color: "white", display: "flex", justifyContent: "space-between" }}>
// //       <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: 24 }}>
// //         RecipeApp
// //       </Link>
// //       <div style={{ display: "flex", gap: 15 }}>
// //         <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
// //         <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
// //         <Link to="/recipes/new" style={{ color: "white", textDecoration: "none" }}>Add Recipe</Link>
// //         <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
// //         <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Signup</Link>
// //       </div>
// //     </nav>
// //   );
// // }

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = ({ user, setUser }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <nav style={{ padding: "10px", background: "#f4f4f4", display: "flex", justifyContent: "space-between" }}>
//       <div>
//         <Link to="/">Home</Link> |{" "}
//         {user && <Link to="/dashboard">Dashboard</Link>} |{" "}
//         {user && <Link to="/add-recipe">Add Recipe</Link>}
//       </div>
//       <div>
//         {user ? (
//           <button onClick={handleLogout}>Logout</button>
//         ) : (
//           <>
//             <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Recipe App</h1>
      <ul>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link></li>
        <li><Link to="/recipeform" style={{ color: "white", textDecoration: "none" }}>Add Recipe</Link></li>
        <li><Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link></li>
        <li><Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

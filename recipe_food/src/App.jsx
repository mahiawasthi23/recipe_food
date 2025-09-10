import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import RecipeForm from "./pages/RecipeForm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Navbar onSearch={setSearchTerm} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard searchTerm={searchTerm} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipeform" element={<RecipeForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


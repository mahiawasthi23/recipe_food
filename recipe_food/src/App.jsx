// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import RecipeForm from "./pages/RecipeForm";

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div style={{ minHeight: "80vh" }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/recipes/new" element={<RecipeForm />} />
//           <Route path="/recipes/:id/edit" element={<RecipeForm />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home"; 
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RecipeForm from "./pages/RecipeForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recipeform" element={<RecipeForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

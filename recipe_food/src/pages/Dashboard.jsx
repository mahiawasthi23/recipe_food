// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const API_BASE = "https://recipe-app-backend-3-zktr.onrender.com/api/recipes";

// export default function Dashboard() {
//   const [recipes, setRecipes] = useState([]);
//   const [totalCalories, setTotalCalories] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);



  

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       // Fetch recipes
//       const res = await fetch(API_BASE);
//       if (!res.ok) throw new Error(`Error fetching recipes: ${res.status}`);
//       const data = await res.json();
//       setRecipes(Array.isArray(data) ? data : []);

//       // Fetch total calories
//       const totalRes = await fetch(`${API_BASE}/dashboard/total-calories`);
//       if (totalRes.ok) {
//         const totalData = await totalRes.json();
//         setTotalCalories(totalData.totalCalories || 0);
//       } else if (totalRes.status === 404) {
//         setTotalCalories(0);
//       } else {
//         throw new Error(`Error fetching total calories: ${totalRes.status}`);
//       }
//     } catch (err) {
//       setError(err.message);
//       setRecipes([]);
//       setTotalCalories(0);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this recipe?")) return;
//     try {
//       const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Delete failed");
//       fetchData();
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Dashboard</h1>
//       <h3>Total Calories: {totalCalories}</h3>
//       <Link to="/recipes/new" style={{ display: "inline-block", marginBottom: 20, color: "blue" }}>
//         + Add New Recipe
//       </Link>

//       {loading && <p>Loading...</p>}

//       {error && <p style={{ color: "red" }}>Error: {error}</p>}

//       {!loading && !error && recipes.length === 0 && <p>No recipes found.</p>}

//       {!loading && !error && recipes.length > 0 && recipes.map((recipe) => (
//         <div
//           key={recipe._id}
//           style={{
//             border: "1px solid #ddd",
//             padding: 10,
//             marginBottom: 10,
//             borderRadius: 6,
//             display: "flex",
//             gap: 15,
//           }}
//         >
//           <img
//             src={recipe.image || "https://via.placeholder.com/120x80?text=No+Image"}
//             alt={recipe.title}
//             style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 6 }}
//           />
//           <div style={{ flex: 1 }}>
//             <h3>{recipe.title}</h3>
//             <p><strong>Ingredients:</strong> {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : recipe.ingredients}</p>
//             <p><strong>Instructions:</strong> {recipe.instructions}</p>
//             <p><strong>Calories:</strong> {recipe.calories}</p>
//             <Link to={`/recipes/${recipe._id}/edit`} style={{ marginRight: 10 }}>
//               Edit
//             </Link>
//             <button onClick={() => handleDelete(recipe._id)} style={{ color: "red" }}>
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = location.state?.user;

//   const [recipes, setRecipes] = useState([]);
//   const [totalCalories, setTotalCalories] = useState(0);

//   useEffect(() => {
//     if (!user) {
//       navigate("/login"); // if user not found, redirect to login
//       return;
//     }

//     fetch("https://recipe-app-backend-3-zktr.onrender.com/api/recipes")
//       .then(res => res.json())
//       .then(data => setRecipes(data));

//     fetch("https://recipe-app-backend-3-zktr.onrender.com/api/recipes/dashboard/total-calories")
//       .then(res => res.json())
//       .then(data => setTotalCalories(data.totalCalories));
//   }, [user, navigate]);

//   const handleDelete = (id) => {
//     fetch(`https://recipe-app-backend-3-zktr.onrender.com/api/recipes/${id}`, { method: "DELETE" })
//       .then(() => setRecipes(recipes.filter(r => r._id !== id)));
//   };

//   const toggleFavorite = (id) => {
//     const recipe = recipes.find(r => r._id === id);
//     fetch(`https://recipe-app-backend-3-zktr.onrender.com/api/recipes/${id}`, {
//       method: "PUT",
//       body: JSON.stringify({ ...recipe, isFavorite: !recipe.isFavorite })
//     })
//       .then(() => {
//         setRecipes(
//           recipes.map(r =>
//             r._id === id ? { ...r, isFavorite: !r.isFavorite } : r
//           )
//         );
//       });
//   };

//   if (!user) return null; // or loading spinner

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Welcome, {user.username || user.name}</h2>
//       <h3>Total Calories: {totalCalories}</h3>

//       {recipes.map(recipe => (
//         <div key={recipe._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
//           {recipe.image && <img src={recipe.image} alt={recipe.title} style={{ width: "150px", height: "100px" }} />}
//           <h4>{recipe.title}</h4>
//           <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
//           <p><strong>Instructions:</strong> {recipe.instructions}</p>
//           <p><strong>Calories:</strong> {recipe.calories}</p>
//           <p>
//             <strong>Favorite:</strong> {recipe.isFavorite ? "Yes" : "No"}{" "}
//             <button onClick={() => toggleFavorite(recipe._id)}>
//               {recipe.isFavorite ? "Remove Favorite" : "Mark Favorite"}
//             </button>
//           </p>
//           <button onClick={() => handleDelete(recipe._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;

// recipe_food/src/pages/Dashboard.jsx
// src/pages/Dashboard.jsx
// recipe_food/src/pages/Dashboard.jsx
// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  const [recipes, setRecipes] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Agar user nahi hai, login page pe redirect
      return;
    }

    const fetchData = async () => {
      try {
        // Fetch recipes
        const resRecipes = await fetch("http://localhost:5000/api/recipes");
        const recipesData = await resRecipes.json();
        setRecipes(recipesData);

        // Fetch total calories
        const resCalories = await fetch("http://localhost:5000/api/recipes/dashboard/total-calories");
        const caloriesData = await resCalories.json();
        setTotalCalories(caloriesData.totalCalories);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [user, navigate]);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/recipes/${id}`, { method: "DELETE" });
      setRecipes(recipes.filter(r => r._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      const recipe = recipes.find(r => r._id === id);
      await fetch(`http://localhost:5000/api/recipes/favorite/${id}`, { method: "POST" });
      setRecipes(
        recipes.map(r =>
          r._id === id ? { ...r, isFavorite: !r.isFavorite } : r
        )
      );
    } catch (err) {
      console.error("Favorite toggle error:", err);
    }
  };

  if (!user) return null;
  if (loading) return <h3>Loading Dashboard...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {user.username || user.name}</h2>
      <h3>Total Calories: {totalCalories}</h3>

      {recipes.map(recipe => (
        <div key={recipe._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          {recipe.image && <img src={recipe.image} alt={recipe.title} style={{ width: "150px", height: "100px" }} />}
          <h4>{recipe.title}</h4>
          <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
          <p><strong>Calories:</strong> {recipe.calories}</p>
          <p>
            <strong>Favorite:</strong> {recipe.isFavorite ? "Yes" : "No"}{" "}
            <button onClick={() => toggleFavorite(recipe._id)}>
              {recipe.isFavorite ? "Remove Favorite" : "Mark Favorite"}
            </button>
          </p>
          <button onClick={() => handleDelete(recipe._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;


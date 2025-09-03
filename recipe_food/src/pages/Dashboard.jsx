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
      navigate("/login"); 
      return;
    }

    const fetchData = async () => {
      try {
       
        const resRecipes = await fetch("http://localhost:5000/api/recipes");
        const recipesData = await resRecipes.json();
        setRecipes(recipesData);

   
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


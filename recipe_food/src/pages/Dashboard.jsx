import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import "./Dashboard.css";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const user = location.state?.user || storedUser;

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
        const resRecipes = await fetch("https://recipe-backend-011q.onrender.com/api/recipes");
        const recipesData = await resRecipes.json();

        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const updatedRecipes = recipesData.map((r) => ({
          ...r,
          isFavorite: storedFavorites.some((f) => f._id === r._id),
        }));

        setRecipes(updatedRecipes);

        const resCalories = await fetch(
          "https://recipe-backend-011q.onrender.com/api/recipes/dashboard/total-calories"
        );
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
      await fetch(`https://recipe-backend-011q.onrender.com/api/recipes/${id}`, {
        method: "DELETE",
      });

      const remainingRecipes = recipes.filter((r) => r._id !== id);
      setRecipes(remainingRecipes);

      const updatedFavorites = remainingRecipes.filter((r) => r.isFavorite);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      await fetch(`https://recipe-backend-011q.onrender.com/api/recipes/favorite/${id}`, {
        method: "POST",
      });

      const updatedRecipes = recipes.map((r) =>
        r._id === id ? { ...r, isFavorite: !r.isFavorite } : r
      );

      setRecipes(updatedRecipes);

      const favs = updatedRecipes.filter((r) => r.isFavorite);
      localStorage.setItem("favorites", JSON.stringify(favs));
    } catch (err) {
      console.error("Favorite toggle error:", err);
    }
  };

  if (!user) return null;
  if (loading) return <h3>Loading Dashboard...</h3>;

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.username || user.name}</h2>
      <h3>Total Calories: {totalCalories}</h3>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe._id}>
            {recipe.image && <img src={recipe.image} alt={recipe.title} />}
            <div className="recipe-content">
              <h4>{recipe.title}</h4>
              <p>
                <strong>Ingredients:</strong>{" "}
                {recipe.ingredients.join(", ")}
              </p>
              <p>
                <strong>Instructions:</strong> {recipe.instructions}
              </p>
              <p>
                <strong>Calories:</strong> {recipe.calories}
              </p>
              <p>
                <span
                  onClick={() => toggleFavorite(recipe._id)}
                  style={{
                    cursor: "pointer",
                    fontSize: "22px",
                    color: recipe.isFavorite ? "red" : "gray",
                  }}
                >
                  {recipe.isFavorite ? <FaHeart /> : <FaRegHeart />}
                </span>
              </p>
              <button
                className="delete-btn"
                onClick={() => handleDelete(recipe._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

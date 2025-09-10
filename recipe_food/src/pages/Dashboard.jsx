import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ({ searchTerm }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const user = location.state?.user || storedUser;

  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
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
        setFilteredRecipes(recipesData);

        const resCalories = await fetch(
          "http://localhost:5000/api/recipes/dashboard/total-calories"
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
  useEffect(() => {
    if (searchTerm) {
      const filtered = recipes.filter((r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [searchTerm, recipes]);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/recipes/${id}`, {
        method: "DELETE",
      });
      const updatedRecipes = recipes.filter((r) => r._id !== id);
      setRecipes(updatedRecipes);
      setFilteredRecipes(updatedRecipes);

      const favs = updatedRecipes.filter((r) => r.isFavorite);
      localStorage.setItem("favorites", JSON.stringify(favs));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/recipes/favorite/${id}`, {
        method: "POST",
      });

      const updatedRecipes = recipes.map((r) =>
        r._id === id ? { ...r, isFavorite: !r.isFavorite } : r
      );

      setRecipes(updatedRecipes);
      setFilteredRecipes(updatedRecipes);

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
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div className="recipe-card" key={recipe._id}>
              {recipe.image && <img src={recipe.image} alt={recipe.title} />}
              <div className="recipe-content">
                <h4>{recipe.title}</h4>
                <p>
                  <strong>Ingredients:</strong>{" "}
                  {Array.isArray(recipe.ingredients)
                    ? recipe.ingredients.join(", ")
                    : recipe.ingredients}
                </p>
                <p>
                  <strong>Instructions:</strong> {recipe.instructions}
                </p>
                <p>
                  <strong>Calories:</strong> {recipe.calories}
                </p>
                <p>
                  <strong>Favorite:</strong> {recipe.isFavorite ? "Yes" : "No"}{" "}
                  <button
                    className="favorite-btn"
                    onClick={() => toggleFavorite(recipe._id)}
                  >
                    {recipe.isFavorite ? "Remove Favorite" : "Mark Favorite"}
                  </button>
                </p>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(recipe._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

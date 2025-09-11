import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
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

  const [editingRecipe, setEditingRecipe] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const resRecipes = await fetch(
          "https://recipe-backend-011q.onrender.com/api/recipes"
        );
        let recipesData = await resRecipes.json();

        const storedFavorites =
          JSON.parse(localStorage.getItem("favorites")) || [];

        recipesData = recipesData.map((r) => ({
          ...r,
          isFavorite: storedFavorites.some((f) => f._id === r._id),
        }));

        setRecipes(recipesData);
        setFilteredRecipes(recipesData);

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
      await fetch(
        `https://recipe-backend-011q.onrender.com/api/recipes/${id}`,
        { method: "DELETE" }
      );

      const updatedRecipes = recipes.filter((r) => r._id !== id);
      setRecipes(updatedRecipes);
      setFilteredRecipes(updatedRecipes);

      const updatedFavorites = updatedRecipes.filter((r) => r.isFavorite);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      await fetch(
        `https://recipe-backend-011q.onrender.com/api/recipes/favorite/${id}`,
        { method: "POST" }
      );

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://recipe-backend-011q.onrender.com/api/recipes/${editingRecipe._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingRecipe),
        }
      );

      if (res.ok) {
        const updated = await res.json();
        const updatedRecipes = recipes.map((r) =>
          r._id === updated._id ? updated : r
        );
        setRecipes(updatedRecipes);
        setFilteredRecipes(updatedRecipes);
        setEditingRecipe(null);
        setSuccessMessage("Recipe updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  if (!user) return null;
  if (loading) return <h3>Loading Dashboard...</h3>;

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.username || user.name}</h2>
      <h3>Total Calories: {totalCalories}</h3>

      {successMessage && <p className="success-message">{successMessage}</p>}

      {editingRecipe && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Edit Recipe</h3>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={editingRecipe.title}
                onChange={(e) =>
                  setEditingRecipe({ ...editingRecipe, title: e.target.value })
                }
                placeholder="Title"
                required
              />
              <textarea
                value={editingRecipe.ingredients}
                onChange={(e) =>
                  setEditingRecipe({
                    ...editingRecipe,
                    ingredients: e.target.value,
                  })
                }
                placeholder="Ingredients"
                required
              />
              <textarea
                value={editingRecipe.instructions}
                onChange={(e) =>
                  setEditingRecipe({
                    ...editingRecipe,
                    instructions: e.target.value,
                  })
                }
                placeholder="Instructions"
                required
              />
              <input
                type="number"
                value={editingRecipe.calories}
                onChange={(e) =>
                  setEditingRecipe({
                    ...editingRecipe,
                    calories: e.target.value,
                  })
                }
                placeholder="Calories"
                required
              />
              <div className="modal-actions">
                <button type="submit" className="save-btn">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setEditingRecipe(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
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

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(recipe._id)}
                  >
                    Delete
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() => setEditingRecipe(recipe)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

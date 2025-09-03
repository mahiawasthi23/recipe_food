import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.map((r) =>
      r._id === id ? { ...r, isFavorite: !r.isFavorite } : r
    ).filter(r => r.isFavorite); // remove from favorites if unmarked

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleDelete = (id) => {
    const updatedFavorites = favorites.filter((r) => r._id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return (
      <div className="favorites-container">
        <h2>No favorites added yet!</h2>
        <button onClick={() => navigate("/dashboard")} className="back-btn">
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <h2>Your Favorite Recipes</h2>
      <div className="favorites-grid">
        {favorites.map((recipe) => (
          <div className="favorite-card" key={recipe._id}>
            {recipe.image && (
              <img src={recipe.image} alt={recipe.title} className="fav-img" />
            )}
            <div className="favorite-content">
              <h4>{recipe.title}</h4>
              <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
              <p><strong>Calories:</strong> {recipe.calories}</p>
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
        ))}
      </div>
      <button onClick={() => navigate("/dashboard")} className="back-btn">
        Back to Dashboard
      </button>
    </div>
  );
};

export default Favorites;

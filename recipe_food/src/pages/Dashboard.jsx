import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = "https://recipe-app-backend-3-zktr.onrender.com/api/recipes";

export default function Dashboard() {
  const [recipes, setRecipes] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch recipes
      const res = await fetch(API_BASE);
      if (!res.ok) throw new Error(`Error fetching recipes: ${res.status}`);
      const data = await res.json();
      setRecipes(Array.isArray(data) ? data : []);

      // Fetch total calories
      const totalRes = await fetch(`${API_BASE}/dashboard/total-calories`);
      if (totalRes.ok) {
        const totalData = await totalRes.json();
        setTotalCalories(totalData.totalCalories || 0);
      } else if (totalRes.status === 404) {
        setTotalCalories(0);
      } else {
        throw new Error(`Error fetching total calories: ${totalRes.status}`);
      }
    } catch (err) {
      setError(err.message);
      setRecipes([]);
      setTotalCalories(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this recipe?")) return;
    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      fetchData();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <h3>Total Calories: {totalCalories}</h3>
      <Link to="/recipes/new" style={{ display: "inline-block", marginBottom: 20, color: "blue" }}>
        + Add New Recipe
      </Link>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && recipes.length === 0 && <p>No recipes found.</p>}

      {!loading && !error && recipes.length > 0 && recipes.map((recipe) => (
        <div
          key={recipe._id}
          style={{
            border: "1px solid #ddd",
            padding: 10,
            marginBottom: 10,
            borderRadius: 6,
            display: "flex",
            gap: 15,
          }}
        >
          <img
            src={recipe.image || "https://via.placeholder.com/120x80?text=No+Image"}
            alt={recipe.title}
            style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 6 }}
          />
          <div style={{ flex: 1 }}>
            <h3>{recipe.title}</h3>
            <p><strong>Ingredients:</strong> {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <p><strong>Calories:</strong> {recipe.calories}</p>
            <Link to={`/recipes/${recipe._id}/edit`} style={{ marginRight: 10 }}>
              Edit
            </Link>
            <button onClick={() => handleDelete(recipe._id)} style={{ color: "red" }}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

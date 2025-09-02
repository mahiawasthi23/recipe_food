import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE = "https://recipe-app-backend-3-zktr.onrender.com/api/recipes";

export default function RecipeForm() {
  const { id } = useParams(); // id present if editing
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    calories: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  // Fetch recipe if editing
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`${API_BASE}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          name: data.name || "",
          ingredients: data.ingredients ? data.ingredients.join(", ") : "",
          instructions: data.instructions || "",
          calories: data.calories || "",
          image: data.image || "",
        });
      })
      .catch(() => alert("Failed to fetch recipe"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.ingredients || !form.instructions) {
      alert("Name, ingredients, and instructions are required");
      return;
    }

    const payload = {
      name: form.name,
      ingredients: form.ingredients.split(",").map((i) => i.trim()),
      instructions: form.instructions,
      calories: Number(form.calories) || 0,
      image: form.image,
    };

    setLoading(true);

    try {
      let res;
      if (id) {
        res = await fetch(`${API_BASE}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch(API_BASE, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) throw new Error("Save failed");

      alert("Recipe saved successfully");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h2>{id ? "Edit Recipe" : "Add New Recipe"}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          name="name"
          placeholder="Recipe Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: 8, fontSize: 16 }}
        />
        <input
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          value={form.ingredients}
          onChange={handleChange}
          required
          style={{ padding: 8, fontSize: 16 }}
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={form.instructions}
          onChange={handleChange}
          required
          rows={4}
          style={{ padding: 8, fontSize: 16 }}
        />
        <input
          name="calories"
          type="number"
          placeholder="Calories"
          value={form.calories}
          onChange={handleChange}
          style={{ padding: 8, fontSize: 16 }}
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          style={{ padding: 8, fontSize: 16 }}
        />
        <button disabled={loading} style={{ padding: 10, fontSize: 16 }}>
          {loading ? "Saving..." : id ? "Update Recipe" : "Add Recipe"}
        </button>
      </form>
    </div>
  );
}

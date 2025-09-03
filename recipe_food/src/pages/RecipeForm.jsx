import React, { useState } from "react";
import "./RecipeForm.css";

const RecipeForm = ({ user }) => {
  const [form, setForm] = useState({
    title: "",
    calories: "",
    ingredients: "",
    instructions: "",
    image: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for MongoDB
    const recipeData = {
      ...form,
      ingredients: form.ingredients.split(",").map((i) => i.trim()),
      calories: Number(form.calories),
      createdBy: user._id
    };

    fetch("http://localhost:5000/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipeData)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.recipe) {
          alert("Recipe added successfully!");
          setForm({ title: "", calories: "", ingredients: "", instructions: "", image: "" });
        } else {
          alert("Error adding recipe!");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong!");
      });
  };

  return (
    <div className="recipe-form-container">
      <h2>Add a New Recipe</h2>
      <form className="recipe-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Calories:
          <input
            type="number"
            name="calories"
            placeholder="Calories"
            value={form.calories}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Ingredients (comma separated):
          <input
            type="text"
            name="ingredients"
            placeholder="E.g. Rice, Salt, Oil"
            value={form.ingredients}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Instructions:
          <textarea
            name="instructions"
            placeholder="Step by step instructions"
            value={form.instructions}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="image"
            placeholder="https://example.com/image.jpg"
            value={form.image}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;

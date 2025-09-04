# 🍲 Recipe App

A simple MERN (MongoDB, Express, React, Node.js) based Recipe App where users can *signup, login, add recipes, and view them*.

---

## 🚀 Features
- User Signup & Login
- Add a new recipe (with title, calories, ingredients, instructions, and image URL)
- Recipes stored in *MongoDB*
- Frontend with *React.js*
- Backend with *Node.js + Express.js*

---

## 📦 Tech Stack
- *Frontend*: React.js, CSS
- *Backend*: Node.js, Express.js
- *Database*: MongoDB Atlas (or local MongoDB)

User → React (Frontend) → Express (Backend API) → MongoDB (Database)


---

## ⚙️ Installation & Setup

### 1. Clone this repo
```bash
git clone https://github.com/your-username/recipe-app.git
cd recipe-app

We used Unsplash.com for the Images
Render URL : https://recipe-app-backend-3-zktr.onrender.com/api/...



🔑 Auth APIs

Signup – POST http://localhost:5000/api/auth/signup

Login – POST http://localhost:5000/api/auth/login

🍲 Recipe APIs

Get all recipes – GET http://localhost:5000/api/recipes

Add recipe – POST http://localhost:5000/api/recipes

Update recipe – PUT http://localhost:5000/api/recipes/:id

Delete recipe – DELETE http://localhost:5000/api/recipes/:id

Toggle Favorite – POST http://localhost:5000/api/recipes/favorite/:id

Get total calories – GET http://localhost:5000/api/recipes/dashboard/total-calories

Frontend
🚀 Features

Signup & Login (basic, no JWT used)

Add new recipes (with title, ingredients, instructions, calories, image)

View all recipes

Mark / Unmark recipes as favorite

Dashboard to show total calories

Responsive design with Navbar & Footer

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to RecipeApp</h1>
      <p>Manage your recipes easily. Add, update, delete, and track calories.</p>
      <Link to="/signup" style={{ color: "blue", textDecoration: "underline" }}>Get started by signing up!</Link>
    </div>
  );
}

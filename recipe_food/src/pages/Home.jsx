import React from "react";
import "./Home.css";
import RecipeVideo from "../assets/Homepage.mp4"; 
import Heropages from "./Heropages";

export default function Home() {
    return (
        <div>
            <div className="banner">
                <video className="banner-video" autoPlay loop muted playsInline>
                    <source src={RecipeVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="banner-content">
                    <h1>Spice & Flavor</h1>
                    <p>Fresh Ingredients • Tasty Recipes • Healthy Living</p>
                    <button
                        className="banner-btn"
                        onClick={() =>
                            document.getElementById("hero-section").scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Get Started
                    </button>
                </div>
            </div>
            <Heropages />
        </div>
    );
}

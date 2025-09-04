import "./Heropages.css";

const heroData = [
    {
        title: " See Recipe Pasta",
        img: "https://media.istockphoto.com/id/482964545/photo/arrabiata-pasta.webp?a=1&b=1&s=612x612&w=0&k=20&c=WgBDLDed6qro4H1gamjxl5hWALBdXm6T0UGSU3d6TRo=",
        video: "https://www.youtube.com/watch?v=1MKvJdH4Q5c&t=97s",
        recipe: {
            ingredients: ["200g pasta", "1 red pepper", "2 tbsp olive oil", "Parmesan cheese"],
            steps: [
                "Boil pasta until al dente.",
                "Roast red pepper and blend with olive oil.",
                "Mix sauce with pasta.",
                "Top with parmesan cheese and serve hot."
            ],
            calories: "Approx. 450 kcal"
        }
    },

    {
    title: " See Recipe Rainbow Salad",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FsYWR8ZW58MHx8MHx8fDA%3D",
    video: "https://www.youtube.com/watch?v=5MIjSiVkP_Y&t=7s", 
    recipe: {
        ingredients: [
            "Tomatoes",
            "Cucumber","Radish",
            "Carrots","Cabbage",
            "Beetroot","Bell pepper",
            "Broccoli"
        ],
        steps: [
            "Wash and cut veggies.",
            "Put in bowl.",
            "Add lemon, salt, pepper.",
            "Mix and serve."
        ],
        calories: "Approx. 220 kcal"
    }
},

    {
    title: " See Recipe Veg Burger",
    img: "https://media.istockphoto.com/id/1161931223/photo/vegetarian-burger-with-chickpea-cutlet-and-vegetables-veg-concept-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=LY9zBUPc3hZfmlKraOy1RNkKHJK1O-SsP1wUEIoO6PY=",
    video: "https://www.youtube.com/watch?v=yBSBQS2c8XE",  
    recipe: {
        ingredients: ["2 burger buns", "Veg patty", "Lettuce", "Tomato", "Cheese", "Sauce"],
        steps: [
            "Cook veg patty.",
            "Toast burger buns.",
            "Add lettuce, tomato, patty, cheese, and sauce.",
            "Serve hot."
        ],
        calories: "Approx. 450 kcal"
    }
},

    {
    title: " See Recipe Vegetable Spring Rolls",
    img: "https://media.istockphoto.com/id/2153780161/photo/spring-rolls-filled-with-meat-and-vegetables-served-with-soy-sauce-on-wooden-table.jpg?s=612x612&w=0&k=20&c=5sqsmGuMsnEEqA3_krSSlOx1SI7jEKfImo6O7QLW6vw=",
    video: "https://www.youtube.com/watch?v=UZqYzB36FnI", 
    recipe: {
        ingredients: ["Spring roll wrappers", "Cabbage", "Carrot", "Capsicum", "Onion", "Soy sauce", "Salt & Pepper"],
        steps: [
            "Stir-fry cabbage, carrot, capsicum, and onion with soy sauce, salt, and pepper.",
            "Place filling in spring roll wrappers and roll tightly.",
            "Deep fry until golden brown.",
            "Serve hot with sauce."
        ],
        calories: "Approx. 280 kcal (per 2 rolls)"
    }
},


    {
    title: " See Recipe Paneer Tikka",
    img: "https://media.istockphoto.com/id/1384819153/photo/heart-shaped-veg-paneer-cutlet-tikki-with-bhujia-sev-coating-made-of-indian-cottage-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=75dVXvItBj-DWiHEpJR-NcqLKIHXd-BMNO0wm_ApEKs=",
    video: "https://www.youtube.com/watch?v=Uo_zwMXkyEY",  
    recipe: {
        ingredients: ["200g paneer cubes", "Capsicum", "Onion", "Yogurt", "Spices", "Lemon juice"],
        steps: [
            "Marinate paneer and veggies in yogurt, spices, and lemon.",
            "Skewer and grill until golden.",
            "Serve hot with mint chutney."
        ],
        calories: "Approx. 320 kcal"
    }
},
    {
    title: " See Recipe Sandwich",
    img: "https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFNhbmR3aWNofGVufDB8fDB8fHww",
    video: "https://www.youtube.com/watch?v=_EXG0AXSKr4",  
    recipe: {
        ingredients: ["Bread slices", "Paneer or cheese", "Tomato", "Cucumber", "Lettuce", "Butter/Mayonnaise"],
        steps: [
            "Spread butter or mayo on bread.",
            "Add paneer/cheese, tomato, cucumber, and lettuce.",
            "Cover with another bread slice.",
            "Toast or grill if you like, then serve."
        ],
        calories: "Approx. 350 kcal"
    }
},

    {
    title: " See Recipe Chocolate Chip Cookies",
    img: "https://plus.unsplash.com/premium_photo-1673967816735-fcbeec26553a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hvY29sYXRlJTIwQ2hpcCUyMENvb2tpZXN8ZW58MHx8MHx8fDA%3D",
    video: "https://www.youtube.com/watch?v=SWt_sAdCRGs", 
    recipe: {
        ingredients: ["1 cup flour", "1/2 cup butter", "1/2 cup sugar", "1/2 cup chocolate chips"],
        steps: [
            "Cream butter and sugar.",
            "Mix in flour to make dough.",
            "Add chocolate chips.",
            "Bake at 180°C for 12-15 mins."
        ],
        calories: "Approx. 220 kcal per cookie"
    }
},

    {
    title: " See Recipe Chana Chaat",
    img: "https://media.istockphoto.com/id/1406389610/photo/black-chickpea-chaat-or-kala-chana-chat.webp?a=1&b=1&s=612x612&w=0&k=20&c=j22bZ6v-09hvV5ObFoUu-mZ346Sz7itLZmbp00Vkbjw=",
    video: "https://www.youtube.com/watch?v=NMt1kND23OA",  
    recipe: {
        ingredients: ["1 cup boiled chickpeas", "Onion", "Tomato", "Cucumber", "Green chili", "Coriander leaves", "Lemon juice", "Chaat masala", "Salt"],
        steps: [
            "Mix chickpeas, onion, tomato, cucumber, and chili in a bowl.",
            "Add lemon juice, chaat masala, and salt.",
            "Top with coriander leaves.",
            "Serve fresh."
        ],
        calories: "Approx. 250 kcal (per serving)"
    }
},

];

export default function Heropages() {
    return (
        <div id="hero-section" className="hero-section">
            <div className="hero-heading">
                <h2>
                    SIMPLE RECIPES MADE FOR{" "}
                    <span className="italic-text">real, actual, everyday life.</span>
                </h2>
            </div>

            <div className="hero">
                {heroData.map((item, i) => (
                    <div className="hero-card" key={i}>
                        <img src={item.img} alt={item.title} />
                        <span className="tag">{item.title}</span>

                        <div className="recipe">
                            <h4>Ingredients:</h4>
                            <ul>
                                {item.recipe.ingredients.map((ing, idx) => (
                                    <li key={idx}>{ing}</li>
                                ))}
                            </ul>

                            <h4>Steps:</h4>
                            <ol>
                                {item.recipe.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                ))}
                            </ol>

                            {item.recipe.calories && (
                                <p>
                                    <span className="calories-heading">Calories:</span> {item.recipe.calories}
                                </p>
                            )}


                            {item.video ? (
                                <a href={item.video} target="_blank" rel="noopener noreferrer">
                                    <span className="tag">{item.title}</span>
                                </a>
                            ) : (
                                <span className="tag">{item.title}</span>
                            )}



                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

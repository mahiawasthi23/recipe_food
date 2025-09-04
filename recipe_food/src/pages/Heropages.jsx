// import "./Heropages.css";

// const heroData = [
//   { 
//     title: "Pasta", 
//     img: "https://pinchofyum.com/wp-content/uploads/Roasted-Red-Pepper-Pasta-420x600.jpg",
//     recipe: {
//       ingredients: ["200g pasta", "1 red pepper", "2 tbsp olive oil", "Parmesan cheese"],
//       steps: [
//         "Boil pasta until al dente.",
//         "Roast red pepper and blend with olive oil.",
//         "Mix sauce with pasta.",
//         "Top with parmesan cheese and serve hot."
//       ]
//     }
//   },
//   { 
//     title: "Salads", 
//     img: "https://pinchofyum.com/wp-content/uploads/Toss-Pasta-Salad-Bowl-420x600.jpg",
//     recipe: {
//       ingredients: ["Lettuce", "Tomatoes", "Cucumber", "Olive oil", "Salt & Pepper"],
//       steps: [
//         "Chop all vegetables.",
//         "Mix in a large bowl.",
//         "Drizzle olive oil and seasoning.",
//         "Toss well and serve fresh."
//       ]
//     }
//   },
//   { 
//     title: "Most Popular", 
//     img: "https://pinchofyum.com/wp-content/uploads/Ginger-Peanut-Chicken-1-420x600.jpg",
//     recipe: {
//       ingredients: ["500g chicken", "2 tbsp soy sauce", "1 tbsp ginger", "Peanuts"],
//       steps: [
//         "Marinate chicken with soy sauce & ginger.",
//         "Cook chicken in a hot pan.",
//         "Add peanuts and stir-fry for 2 mins.",
//         "Serve with rice."
//       ]
//     }
//   },
//   { 
//     title: "Quick and Easy", 
//     img: "https://pinchofyum.com/wp-content/uploads/Teriyaki-Burgers-9-420x600.jpg",
//     recipe: {
//       ingredients: ["2 burger buns", "Chicken patty", "Teriyaki sauce", "Lettuce"],
//       steps: [
//         "Grill the chicken patty.",
//         "Toast burger buns lightly.",
//         "Assemble burger with lettuce & teriyaki sauce.",
//         "Serve hot."
//       ]
//     }
//   },
//   { 
//     title: "Crispy Smashed Potato Salad", 
//     img: "https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-14-at-111339-am-69771752509633937.png?t=1752509661000",
//     recipe: {
//       ingredients: ["6 baby potatoes", "2 tbsp olive oil", "Salt", "Fresh herbs"],
//       steps: [
//         "Boil potatoes until soft.",
//         "Smash lightly with a fork.",
//         "Drizzle olive oil, season, and roast until crispy.",
//         "Garnish with fresh herbs and serve."
//       ]
//     }
//   },
//   { 
//     title: "Thai-Inspired Chicken Salad", 
//     img: "https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-08-at-14021-pm-17451752000053470.png?t=1752000080000",
//     recipe: {
//       ingredients: ["200g chicken breast", "Lettuce", "Carrots", "Peanuts", "Thai dressing"],
//       steps: [
//         "Grill or pan-fry chicken until cooked.",
//         "Chop vegetables finely.",
//         "Mix chicken, veggies, and peanuts.",
//         "Add Thai dressing and toss well."
//       ]
//     }
//   },
//   { 
//     title: "Chocolate Chip Cookies", 
//     img: "https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-03-at-113847-am-41071751560739101.png?t=1751560754000",
//     recipe: {
//       ingredients: ["1 cup flour", "1/2 cup butter", "1/2 cup sugar", "1/2 cup chocolate chips"],
//       steps: [
//         "Mix butter and sugar until creamy.",
//         "Add flour and mix into dough.",
//         "Fold in chocolate chips.",
//         "Bake at 180°C for 12-15 mins."
//       ]
//     }
//   },
//   { 
//     title: "Ricotta Meatballs", 
//     img: "https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-03-at-113202-am-18481751560331383.png?t=1751560438000",
//     recipe: {
//       ingredients: ["300g ground beef", "1/2 cup ricotta cheese", "1 egg", "Breadcrumbs"],
//       steps: [
//         "Mix beef, ricotta, egg, and breadcrumbs.",
//         "Shape into small meatballs.",
//         "Cook in a pan until browned.",
//         "Serve with tomato sauce or pasta."
//       ]
//     }
//   }
// ];

// export default function Heropages() {
//   return (
//     <div id="hero-section" className="hero-section">
//       <div className="hero-heading">
//         <h2>
//           SIMPLE RECIPES MADE FOR{" "}
//           <span className="italic-text">real, actual, everyday life.</span>
//         </h2>
//       </div>

//       <div className="hero">
//         {heroData.map((item, i) => (
//           <div className="hero-card" key={i}>
//             <img src={item.img} alt={item.title} />
//             <span className="tag">{item.title}</span>

//             <div className="recipe">
//               <h4>Ingredients:</h4>
//               <ul>
//                 {item.recipe.ingredients.map((ing, idx) => (
//                   <li key={idx}>{ing}</li>
//                 ))}
//               </ul>

//               <h4>Steps:</h4>
//               <ol>
//                 {item.recipe.steps.map((step, idx) => (
//                   <li key={idx}>{step}</li>
//                 ))}
//               </ol>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import "./Heropages.css";

const heroData = [
    {
        title: " See Recipe Pasta",
        img: "https://pinchofyum.com/wp-content/uploads/Roasted-Red-Pepper-Pasta-420x600.jpg",
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
        title: " See Recipe Salads",
        img: "https://pinchofyum.com/wp-content/uploads/Toss-Pasta-Salad-Bowl-420x600.jpg",
         video: "https://www.youtube.com/watch?v=5MIjSiVkP_Y&t=7s", 
        recipe: {
            ingredients: ["Lettuce", "Tomatoes", "Cucumber", "Olive oil", "Salt & Pepper"],
            steps: [
                "Chop all vegetables.",
                "Mix in a large bowl.",
                "Drizzle olive oil and seasoning.",
                "Toss well and serve fresh."
            ],
            calories: "Approx. 180 kcal"
        }
    },
    {
        title: " See Recipe Most Popular",
        img: "https://pinchofyum.com/wp-content/uploads/Ginger-Peanut-Chicken-1-420x600.jpg",
         video: "https://www.youtube.com/watch?v=_EXG0AXSKr4",  
        recipe: {
            ingredients: ["500g chicken", "2 tbsp soy sauce", "1 tbsp ginger", "Peanuts"],
            steps: [
                "Marinate chicken with soy sauce & ginger.",
                "Cook chicken in a hot pan.",
                "Add peanuts and stir-fry for 2 mins.",
                "Serve with rice."
            ],
            calories: "Approx. 520 kcal"
        }
    },
    {
        title: " See Recipe Quick and Easy",
        img: "https://pinchofyum.com/wp-content/uploads/Teriyaki-Burgers-9-420x600.jpg",
         video: "https://www.youtube.com/watch?v=yBSBQS2c8XE",  
        recipe: {
            ingredients: ["2 burger buns", "Chicken patty", "Teriyaki sauce", "Lettuce"],
            steps: [
                "Grill the chicken patty.",
                "Toast burger buns lightly.",
                "Assemble burger with lettuce & teriyaki sauce.",
                "Serve hot."
            ],
            calories: "Approx. 600 kcal"
        }
    },
    {
        title: " See Recipe Crispy Smashed Potato Salad",
        img: "https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-14-at-111339-am-69771752509633937.png?t=1752509661000",
         video: "https://www.youtube.com/watch?v=UZqYzB36FnI", 
        recipe: {
            ingredients: ["6 baby potatoes", "2 tbsp olive oil", "Salt", "Fresh herbs"],
            steps: [
                "Boil potatoes until soft.",
                "Smash lightly with a fork.",
                "Drizzle olive oil, season, and roast until crispy.",
                "Garnish with fresh herbs and serve."
            ],
            calories: "Approx. 300 kcal"
        }
    },
    {
        title: " See Recipe Thai-Inspired Chicken Salad",
        img: "https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-08-at-14021-pm-17451752000053470.png?t=1752000080000",
         video: "https://www.youtube.com/watch?v=Uo_zwMXkyEY",  
        recipe: {
            ingredients: ["200g chicken breast", "Lettuce", "Carrots", "Peanuts", "Thai dressing"],
            steps: [
                "Grill or pan-fry chicken until cooked.",
                "Chop vegetables finely.",
                "Mix chicken, veggies, and peanuts.",
                "Add Thai dressing and toss well."
            ],
            calories: "Approx. 400 kcal"
        }
    },
    {
        title: " See Recipe Chocolate Chip Cookies",
        img: "https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-03-at-113847-am-41071751560739101.png?t=1751560754000",
         video: "https://www.youtube.com/watch?v=SWt_sAdCRGs", 
        recipe: {
            ingredients: ["1 cup flour", "1/2 cup butter", "1/2 cup sugar", "1/2 cup chocolate chips"],
            steps: [
                "Mix butter and sugar until creamy.",
                "Add flour and mix into dough.",
                "Fold in chocolate chips.",
                "Bake at 180°C for 12-15 mins."
            ],
            calories: "Approx. 220 kcal per cookie"
        }
    },
    {
        title: " See Recipe Ricotta Meatballs",
        img: "https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-03-at-113202-am-18481751560331383.png?t=1751560438000",
         video: "https://www.youtube.com/watch?v=NMt1kND23OA",  
        recipe: {
            ingredients: ["300g ground beef", "1/2 cup ricotta cheese", "1 egg", "Breadcrumbs"],
            steps: [
                "Mix beef, ricotta, egg, and breadcrumbs.",
                "Shape into small meatballs.",
                "Cook in a pan until browned.",
                "Serve with tomato sauce or pasta."
            ],
            calories: "Approx. 480 kcal (per serving)"
        }
    }
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

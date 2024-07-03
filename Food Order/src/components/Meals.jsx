import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals(props) {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch("http://localhost:3000/meals");

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            
            const data = await response.json();
    
            setMeals(data);
            setIsLoading(false);
        }
        
        fetchMeals();
    }, []);

    if (isLoading) {
        return (
        <section>
            <p>Loading...</p>
        </section>
        );
    }

    return (
        <div className="meal-item">
            <div id="meals">
                {meals.map(meal => (
                    <MealItem
                        key={meal.id}
                        name={meal.name}
                        price={meal.price}
                        description={meal.description}
                        image={meal.image}
                    />
                ))}
            </div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}
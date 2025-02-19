import FoodCard from "./FoodCard";

import { useEffect, useState } from "react"

export default function Meals() {
    const [meals, setMeals] = useState([]);

    async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals');
        const data = await response.json();
        setMeals(data);
    }

    useEffect(() => {
        fetchMeals();
    }, []);

    return (
        <div id="meals">{meals.map((meal) => {
            return (
                <FoodCard key={meal.id} meal={meal} />
            )
        })}</div>
    )
}
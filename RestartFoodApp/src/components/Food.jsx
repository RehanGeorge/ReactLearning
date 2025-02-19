import { useEffect, useState } from "react"

export default function Food() {
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
        <div>{meals.map((meal) => {
            return (
                <div key={meal.id}>
                    <h2>{meal.name}</h2>
                    <p>{meal.description}</p>
                    <p>{meal.price}</p>
                </div>
            )
        })}</div>
    )
}
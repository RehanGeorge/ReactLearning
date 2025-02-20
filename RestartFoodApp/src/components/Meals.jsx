import FoodCard from "./FoodCard";

import { useEffect, useState } from "react"

export default function Meals() {
    const [meals, setMeals] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    async function fetchMeals() {
        try {
            setIsFetching(true);
            const response = await fetch('http://localhost:3000/meals');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMeals(data);
        } catch (error) {
            setError(error.message || 'Failed to fetch data.');
            console.log(error);
        }
        setIsFetching(false);
    }

    useEffect(() => {
        fetchMeals();
    }, []);

    return (
        <>
        {isFetching && <p>Fetching</p>}
        {error && <p>{error}</p>}
        {!isFetching && <div id="meals">{meals.map((meal) => {
            return (
                <FoodCard key={meal.id} meal={meal} />
            )
        })}</div>}
        </>
    )
}
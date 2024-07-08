import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals(props) {
    const { data: meals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (isLoading) {
        return <p className="center">Fetching meals...</p>
    }

    if (error) {
        return <Error title="Failed to fetch meals" message={error} />
    }

    return (
        <div className="meal-item">
            <div id="meals">
                {meals.map(meal => (
                    <MealItem
                        key={meal.id}
                        id = {meal.id}
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
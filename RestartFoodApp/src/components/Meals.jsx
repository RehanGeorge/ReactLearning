import FoodCard from "./FoodCard";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
    const {data: meals, isLoading: isFetching, error} = useHttp("http://localhost:3000/mealss", requestConfig, []);

    if (isFetching) {
        return <p className="center">Fetching meals...</p>;
    }

    if (error) {
        return <Error title="An error occurred!" message={error} />;
    }
   
    return (
        <ul id="meals">
            {!isFetching && <div id="meals">{meals.map((meal) => {
                return (
                    <FoodCard key={meal.id} meal={meal} />
                )
            })}</div>}
        </ul>
    )
}
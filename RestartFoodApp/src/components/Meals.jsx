import FoodCard from "./FoodCard";
import useHttp from "../hooks/useHttp";

const requestConfig = {};

export default function Meals() {
    const {data: meals, isLoading: isFetching, error} = useHttp("http://localhost:3000/meals", requestConfig, []);
   
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
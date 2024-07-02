import MealItem from "./components/MealItem";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeals = async () => {
    const response = await fetch("http://localhost:3000/meals");
    const data = await response.json();

    setMeals(data);
    setIsLoading(false);
  }

  useEffect(() => {
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
    <>
    <Header />
      <div id="meals">
        {meals.map(meal => (
          <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} image={meal.image}/>
        ))}
      </div>
    </>
  );
}

export default App;

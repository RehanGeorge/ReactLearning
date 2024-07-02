import Product from "./components/MealItem";
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
      <h1>You got this 💪</h1>
      <p>Stuck? Not sure how to proceed?</p>
      <p>Don't worry - we've all been there. Let's build it together!</p>
      <Product />
    </>
  );
}

export default App;

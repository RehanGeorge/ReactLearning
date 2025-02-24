import Meals from "./components/Meals";
import Header from "./components/Header";
import CartContextProvider from "./store/shopping-cart-context";


function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Meals />
      </CartContextProvider>
    </>
  );
}

export default App;

import Meals from "./components/Meals";
import Header from "./components/Header";
import CartContextProvider from "./store/shopping-cart-context";
import UserProgressContext from "./store/UserProgressContext";


function App() {
  return (
    <>
      <UserProgressContext>
        <CartContextProvider>
          <Header />
          <Meals />
        </CartContextProvider>
      </UserProgressContext>
    </>
  );
}

export default App;

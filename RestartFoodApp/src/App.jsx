import Meals from "./components/Meals";
import Header from "./components/Header";
import CartContextProvider from "./store/shopping-cart-context";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import CartModal from "./components/CartModal";
import CheckoutModal from "./components/CheckoutModal";


function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <CartModal />
          <CheckoutModal />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;

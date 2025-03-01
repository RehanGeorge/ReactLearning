import Button from "./UI/Button";
import logoImg from "../assets/logo.jpg";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartQuantity = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    };

    return (
        <>
            <header id="main-header">
                <h1 id="title"><img src={logoImg} alt="Burger" />ReactFood</h1>
                <Button textOnly onClick={handleShowCart}>Cart ({cartQuantity})</Button>
            </header>
        </>
    );
}
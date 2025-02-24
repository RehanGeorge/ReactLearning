import logoImg from "../assets/logo.jpg";
import CartModal from "./CartModal";
import { useRef, useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function Header() {
    const cartCtx = useContext(CartContext);
    const cartQuantity = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

    const modal = useRef();

    function handleCartClick() {
        modal.current.open();
    }

    return (
        <>
            <header id="main-header">
                <h1 id="title"><img src={logoImg} alt="Burger" />ReactFood</h1>
                <button className="button" onClick={handleCartClick}>Cart ({cartQuantity})</button>
            </header>
            <CartModal ref={modal} />
        </>
    )
}
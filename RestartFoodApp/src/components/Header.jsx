import logoImg from "../assets/logo.jpg";
import CartModal from "./CartModal";
import { useRef } from "react";

export default function Header() {
    const modal = useRef();

    function handleCartClick() {
        modal.current.open();
    }

    return (
        <>
            <header id="main-header">
                <h1 id="title"><img src={logoImg} alt="Burger" />ReactFood</h1>
                <button className="button" onClick={handleCartClick}>Cart</button>
            </header>
            <CartModal ref={modal} />
        </>
    )
}
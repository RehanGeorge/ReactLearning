import Button from './UI/Button';
import logoImg from '../assets/logo.jpg';
import { useContext } from 'react';
import CartContext from '../store/CartContext';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0)

    return (
        <header id="main-header">
            <h1 id="title"><img src={logoImg} alt="ReactFood logo" />
            REACTFOOD
            </h1>
            <Button textOnly>Cart ({totalCartItems})</Button>
        </header>
    )
}
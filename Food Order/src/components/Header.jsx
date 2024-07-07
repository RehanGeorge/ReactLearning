import Button from './UI/Button';
import logoImg from '../assets/logo.jpg';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <header id="main-header">
            <h1 id="title"><img src={logoImg} alt="ReactFood logo" />
            REACTFOOD
            </h1>
            <nav>
                <Button textOnly onClick={handleShowCart}>
                    Cart ({totalCartItems})
                </Button>
            </nav>
        </header>
    )
}
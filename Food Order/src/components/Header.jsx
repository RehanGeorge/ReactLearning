import Button from './UI/Button';
import logoImg from '../assets/logo.jpg';

export default function Header() {
    return (
        <header id="main-header">
            <h1 id="title"><img src={logoImg} alt="ReactFood logo" />
            REACTFOOD
            </h1>
            <Button textOnly>Cart</Button>
        </header>
    )
}
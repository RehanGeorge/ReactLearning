import logoImg from "../assets/logo.jpg";

export default function Header() {
    return (
        <header id="main-header">
        <h1 id="title"><img src={logoImg} alt="Burger" />ReactFood</h1>
        </header>
    )
}
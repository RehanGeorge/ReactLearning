import Meals from "./components/Meals";
import logoImg from "./assets/logo.jpg";

function App() {
  return (
    <>
      <header id="main-header">
        <h1 id="title"><img src={logoImg} alt="Burger" />ReactFood</h1>
      </header>
      <Meals />
    </>
  );
}

export default App;

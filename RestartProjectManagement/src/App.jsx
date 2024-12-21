import MainBody from "./components/MainBody";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen my-8">
        <Sidebar />
        <MainBody />
      </div>
    </>
  );
}

export default App;

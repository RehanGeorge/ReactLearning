import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen my-8 flex gap-8">
        <Sidebar />
        <NewProject />
      </div>
    </>
  );
}

export default App;

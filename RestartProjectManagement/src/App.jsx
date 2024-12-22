import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen my-8 flex gap-8">
        <Sidebar />
        <NewProject />
      </div>
      <NoProjectSelected />
    </>
  );
}

export default App;

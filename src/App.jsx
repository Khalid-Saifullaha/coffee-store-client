import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className=" flex justify-center items-center gap-4 mt-5">
        <Link to={"/addCoffee"}>
          <button className=" btn  border-pink-600">Add Coffee</button>
        </Link>
        <Link to={"/updateCoffee"}>
          <button className=" btn  border-pink-600">Update Coffee</button>
        </Link>
      </div>
      <h1 className="text-6xl text-purple-600">Vite + React</h1>
    </>
  );
}

export default App;

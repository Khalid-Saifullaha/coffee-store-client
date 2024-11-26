import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <div className="m-20">
      <div className=" flex justify-center items-center gap-4 mt-5">
        <Link to={"/addCoffee"}>
          <button className=" btn  border-pink-600">Add Coffee</button>
        </Link>
        <Link to={"/updateCoffee"}>
          <button className=" btn  border-pink-600">Update Coffee</button>
        </Link>
      </div>
      <h1 className="text-6xl text-purple-600 text-center my-4">
        Hot Hot Cold Coffee: {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-5 border-t">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;

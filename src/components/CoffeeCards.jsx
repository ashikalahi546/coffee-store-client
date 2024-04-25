import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const CoffeeCards = () => {
  const coffees = useLoaderData();

  return (
    <div className="grid grid-cols-4 gap-10">
      {coffees.map((coffee, i) => (
        <CoffeeCard coffee={coffee} key={i}></CoffeeCard>
      ))}
    </div>
  );
};

export default CoffeeCards;

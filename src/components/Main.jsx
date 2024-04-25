import { Outlet } from "react-router-dom";
import Navber from "./Home/Navber";
import Home from "./Home/Home";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Home></Home>
    </div>
  );
};

export default Main;

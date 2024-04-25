import { Link } from "react-router-dom";


const Navber = () => {
    return (
        <ul className="flex justify-center gap-6 my-2 text-xl font-medium">
            <Link to='/'>Home</Link>
            <Link to='/addcoffee'>Add Coffee</Link>
            {/* <Link to='/updatecoffee'>update Coffee</Link> */}
          
        </ul>
    );
};

export default Navber;
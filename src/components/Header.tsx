import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between w-auto h-28 bg-slate-600  items-center shadow-lg sticky inset-x-0 top-0 left-0 ">
      <div className=" text-left px-12 font-bold text-white text-5xl ">
        <Link to="/">Codiesys</Link>
      </div>
      <div className="flex">
        <ul className="flex m-5 px-4 font-bold text-2xl text-slate-200">
          <li className="px-16">
            <Link to="/">Home</Link>
          </li>
          <li className="px-16">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-16">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

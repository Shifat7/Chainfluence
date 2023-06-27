import { ReactComponent as Logo } from '../../images/transfund.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
    <>
         <nav className="header top-0 bg-transparent flex items-center justify-between px-8 py-02">
    <h1 className="w-3/12">
        <Link to="/">
        <Logo />
        </Link>
    </h1>


    <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
            <li className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer active">
              <Link to="/" >Home</Link>
            </li>
            <li className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer">
              <a href="">Features</a>
            </li>
            <li className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer">
              <a href="">Campaign</a>
            </li>
        </ul>
    </nav>

    
    <div className="w-3/12 flex justify-end">
    <Link to="/login">
    <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
     Login
    </button>
    </Link>
    </div>
</nav>
    </>
 );
};

export default Navbar;
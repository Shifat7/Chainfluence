import { ReactComponent as Logo } from '../../images/transfund.svg';

const footer = () => {
 return (
    <>
        <hr />
    <footer className="footer top-0 bg-transparent flex items-center justify-between  mt-2 py-2">
    <h1 className="w-3/12">
        <a href="">
        <Logo />
        </a>
    </h1>


    <nav className="nav font-semibold text-slate-700 text-lg">
        <ul className="flex items-center">
            <li className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer active">
              <a href="">Home</a>
            </li>
            <li className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer">
              <a href="">Features</a>
            </li>
            <li className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer">
              <a href="">Campaign</a>
            </li>
        </ul>
    </nav>
</footer>
    </>
 );
};

export default footer;
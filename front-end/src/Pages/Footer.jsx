import { Link } from 'react-router-dom';
import logo from '../assets/Company_logo.png';
const Footer = () =>
{
    return (
        <>
            <footer className="bg-gray-800 shadow bottom-0 w-full">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-around">
                        <Link to="/" className="flex items-center mb-4 sm:mb-0">
                            <img srcSet={ logo } className="h-12 mr-3 bg-violet-200 rounded-xl hover:bg-white" alt="Makup Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap  text-violet-200 ">The Make-Up Artisit</span>
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/about" className="mr-4 hover:underline md:mr-6  text-violet-200 ">About</Link>
                            </li>
                            <li>
                                <Link to="/privacyPolicy" className="mr-4 hover:underline md:mr-6  text-violet-200 ">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/Licensing" className="mr-4 hover:underline md:mr-6  text-violet-200  ">Licensing</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:underline  text-violet-200 ">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to='/' className="hover:underline text-violet-200">The Make-Up Artist™</Link>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
};
export default Footer;
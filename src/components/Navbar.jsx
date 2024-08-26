import { Link } from 'react-router-dom';
import Logo from '../assets/Pantnagar_logo.jpg';

const Navbar = () => (
  <nav className="bg-dark-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className='flex justify-between item center gap-4'> <img className="h-10 w-10" src={Logo} ></img><div className='py-2'>GBPUAT Notes</div> </ div>
      <ul className="flex space-x-4">
        <li><Link to="/" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-green-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-green-100 dark:focus:ring-green-700 dark:bg-gray-800 dark:text-green-400 dark:border-green-600 dark:hover:text-white dark:hover:bg-gray-700">Home</Link></li>
        <li><Link to="/send-notes" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-green-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-green-100 dark:focus:ring-green-700 dark:bg-gray-800 dark:text-green-400 dark:border-green-600 dark:hover:text-white dark:hover:bg-gray-700">Send Notes</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
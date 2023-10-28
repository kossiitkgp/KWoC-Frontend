import kwoc_logo from '../assets/kwoc_logo.png';
import login from '../assets/login.svg';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isLinkActive = (path: string) => location.pathname === path;

  const Links = [
    { name: "HOME", link: "/" },
    { name: "PROJECTS", link: "/Projects" },
    { name: "TESTIMONIALS", link: "/Testimonials" },
    { name: "FAQs", link: "/FAQ" },
  ];

  return (
    <div className='fixed inset-x-0 top-4 z-50 w-full'>
      <div className='flex shadow-md items-center justify-between max-w-7xl gap-4 mx-auto border border-[#FFFFFF]/[0.16] px-4 py-2 rounded-lg w-[80%] md:w-[95%] inset-x-0 backdrop-blur-md z-50'>
        <div className='font-bold flex items-center font-Poppins text-white'>
          <span className='mr-1'>
            <img className='object-contain h-12 w-12'src={kwoc_logo} alt='kwoc-logo'></img>
          </span>
          <span className='hidden'>
            <span className='text-blue-500'>K</span>HARAGPUR <span className='text-blue-500 pl-2'> W</span>INTER <span className='text-blue-500 pl-2'>O</span>F <span className='text-blue-500 pl-2'>C</span>ODE
          </span>
        </div>
        <ul className='flex flex-row items-center text-xs md:text-md lg:text-lg'>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-4 md:mr-4'>
              <Link to={link.link} className={`px-2 py-1 ${isLinkActive(link.link) ? 'text-blue-500 hover:drop-shadow-glow duration-500' : 'text-white opacity-80 hover:drop-shadow-glow duration-500 active:text-blue-700'}`}>
                {link.name}
              </Link>
            </li>
          ))}
          <Link to='' className='mr-1'>
            <img className='object-contain h-8 w-8'src={login} alt='kwoc-logo'></img>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

import kwoc_logo from '../assets/kwoc_logo.png';
import { Link, useLocation } from 'react-router-dom';
import {CiLogin} from 'react-icons/ci';
import { IconContext } from "react-icons";
import {useState} from 'react';

function Navbar() {
  const location = useLocation();
  const isLinkActive = (path: string) => location.pathname === path;
  const [isHovered, setIsHovered] = useState(false);

  const Links = [
    { name: "HOME", link: "/" },
    { name: "MENTOR", link: "/MentorForm" },
    { name: "PROJECTS", link: "/Projects" },
    { name: "TESTIMONIALS", link: "/Testimonials" },
    { name: "FAQs", link: "/FAQ" },
  ];

  return (
    <div className='fixed inset-x-0 top-4 z-50 w-full'>
      <div className='flex shadow-md items-center justify-between max-w-7xl gap-4 mx-auto border border-[#FFFFFF]/[0.16] px-4 py-2 rounded-lg w-[95%] inset-x-0 backdrop-blur-md z-50'>
        <div className='font-bold flex items-center font-Poppins text-white'>
          <span className='mr-1'>
            <img className='object-contain h-12 w-12'src={kwoc_logo} alt='kwoc-logo'></img>
          </span>
          <span className='hidden'>
            <span className='text-blue-500'>K</span>HARAGPUR <span className='text-blue-500 pl-2'> W</span>INTER <span className='text-blue-500 pl-2'>O</span>F <span className='text-blue-500 pl-2'>C</span>ODE
          </span>
        </div>
        <ul className='flex flex-row items-center'>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-4 md:mr-4'>
              <Link to={link.link} className={`px-2 py-1 ${isLinkActive(link.link) ? 'text-blue-500 hover:drop-shadow-glow duration-500' : 'text-white opacity-80 hover:drop-shadow-glow duration-500 active:text-blue-700'}`}>
                {link.name}
              </Link>
            </li>
          ))}
          <IconContext.Provider value={{size: '3em'}}>
            <Link to='' className='mr-1'>
              <CiLogin color='#3b82f6' className={`transition-transform transform ${isHovered ? 'drop-shadow-glow scale-110' : 'scale-100'}`}
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} />
            </Link>
          </IconContext.Provider>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

import { useState, useEffect } from 'react';
import kwoc_logo from '../assets/kwoc_logo.png';
import { Link, useLocation } from 'react-router-dom';
import {CiMenuBurger} from 'react-icons/ci';
import { RxCross1 } from "react-icons/rx";
import {CiLogin} from 'react-icons/ci';
import { IconContext } from "react-icons";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isLinkActive = (path: string) => location.pathname === path;
  const [isHovered, setIsHovered] = useState(false);

  const Links = [
    { name: "HOME", link: "/" },
    // { name: "MENTOR", link: "/MentorForm" },
    { name: "PROJECTS", link: "/Projects" },
    { name: "TESTIMONIALS", link: "/Testimonials" },
    { name: "FAQs", link: "/FAQ" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed inset-x-0 top-4 z-50 w-full">
      <nav className="flex shadow-md items-center justify-between max-w-7xl gap-4 mx-auto border border-[#FFFFFF]/[0.16] px-4 py-2 rounded-lg w-[95%] inset-x-0 backdrop-blur-md z-50">
        <div className='font-bold flex items-center font-Poppins text-white'>
            <span className='mr-1'>
                <img className='object-contain h-12 w-12'src={kwoc_logo} alt='kwoc-logo'></img>
            </span>
        </div>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
            <CiMenuBurger size='2em' color='#3b82f6' />
          </button>
        </div>
        <ul className={`lg:flex lg:items-center lg:w-auto lg:space-x-6 ${menuOpen ? 'block' : 'hidden'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-4 md:mr-4'>
              <Link to={link.link} className={`px-2 py-1 ${isLinkActive(link.link) ? 'text-blue-500 hover:drop-shadow-glow duration-500' : 'text-white opacity-80 hover:drop-shadow-glow duration-500 active:text-blue-700'}`}>
                {link.name}
              </Link>
            </li>
          ))}
          <IconContext.Provider value={{size:'3em'}}>
            <Link to=''>
              <CiLogin color='#3b82f6' className={`transition-transform transform ${isHovered ? 'drop-shadow-glow scale-110' : 'scale-100'}`}
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} />
            </Link>
          </IconContext.Provider>
        </ul>
      </nav>
      <div className={`navbar-menu relative z-50 ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6border border-[#FFFFFF]/[0.16] rounded-lg inset-x-0 backdrop-blur-md overflow-y-auto">
                <div className="flex-items-center flex flex-row mb-8 mx-2">
                    <span className="mr-auto text-3xl font-bold leading-none">
                        <img className='object-contain h-12 w-12'src={kwoc_logo} alt='kwoc-logo'></img>
                    </span>
                    <button className="navbar-close">
                       <RxCross1 size='1.5em' color='#3b82f6'/>
                    </button>
                </div>
                <div>
                    <ul className='ml-4'>
                        {Links.map((link) => (
                            <li key={link.name} className='mb-1'>
                                <Link to={link.link} className={`block p-3 text-sm font-semibold ${isLinkActive(link.link) ? 'text-blue-500 hover:drop-shadow-glow duration-500' : 'text-white opacity-80 hover:drop-shadow-glow duration-500 active:text-blue-700'}`}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <IconContext.Provider value={{size:'3em'}}>
                            <Link to=''>
                                <CiLogin color='#3b82f6' className={`transition-transform transform ${isHovered ? 'drop-shadow-glow scale-110' : 'scale-100'}`}
                                    onMouseEnter={() => setIsHovered(true)} 
                                    onMouseLeave={() => setIsHovered(false)} />
                            </Link>
                        </IconContext.Provider>
                    </ul>
                </div>
            </nav>
      </div>
    </div>
  );
};

<script>
    document.addEventListener('DOMContentLoaded', function() {
        useEffect(() => {

        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
            for (let i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', () => {
                    for (let j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
            for (let i = 0; i < close.length; i++) {
                close[i].addEventListener('click', () => {
                    for (let j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
        if (backdrop.length) {
            for (let i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', () => {
                    for (let j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
        return () => {
            if (burger.length && menu.length) {
              for (let i = 0; i < burger.length; i++) {
                burger[i].removeEventListener('click', () => {
                  for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                  }
                });
              }
            }
      
            if (close.length) {
              for (let i = 0; i < close.length; i++) {
                close[i].removeEventListener('click', () => {
                  for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                  }
                });
              }
            }
            if (backdrop.length) {
                for (let i = 0; i < backdrop.length; i++) {
                  backdrop[i].removeEventListener('click', () => {
                    for (let j = 0; j < menu.length; j++) {
                      menu[j].classList.toggle('hidden');
                    }
                  });
                }
              }
            };
          }, []);

          return (
            <div><h1>Hello</h1></div>
          );
          }
   
</script>

export default Nav;

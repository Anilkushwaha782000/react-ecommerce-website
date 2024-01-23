import { faArrowUp, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from './CartContext';
import Mobilemenu from './Mobilemenu';
import './index.css';
import Foodicon from './Foodicon.js';
gsap.registerPlugin(ScrollTrigger);
function Navbar() {
  const myRef = useRef();

  const { calculateTotalItems } = useCart();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const [myelement1, setMyelement1] = useState();
  //console.log("myelemennavreft",myelement1)

  useEffect(() => {
    //console.log("myrefnav>>",myRef.current);
    const observer = new IntersectionObserver((entries) => {
      const entry1 = entries[0];
      setMyelement1(entry1.isIntersecting);
      //console.log("entrynav>>>>",entry1);
      gsap.fromTo(
        '#fytr',
        { opacity: 0, },
        { opacity: 1, duration: 1, delay: 0.5 }
      );
    })
    observer.observe(myRef.current);
  }, [])
 
  const [scrolledDown, setScrolledDown] = useState(false);

  // Use the window scroll event to toggle the "arrow up" button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ top: 0, left: 0, width: '100%', zIndex: 100 }}>
      <nav className="" ref={myRef} style={{backgroundColor:"darkkhaki"}}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-32 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMobileMenu}
                style={{color:"#161614"}}
              >
                <span className="absolute -inset-0.5" style={{color:"black"}}></span>
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* Icon when menu is open */}
                
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Foodicon/>
                {/* <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/spoon-logo.png" alt="spoon-logo" style={{ filter: "drop-shadow(2px 4px 6px blue)" }} /> */}
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">

                  <NavLink
                    exact
                    to="/"
                    className=" text-black rounded-md px-3 py-2 text-2xl font-medium hover:text-blue hover:cursor-pointer hover: transition-transform duration-200"
                    activeClassName="bg-gray-700"
                    aria-current="page"
                    style={{ fontWeight: "600" }}
                  >
                    Home

                  </NavLink>

                  <NavLink
                    to="/about"
                    className="text-black  hover:text-blue rounded-md px-3 py-2 text-2xl font-medium hover: transition-transform duration-200"
                    activeClassName="bg-gray-700"
                    style={{ fontWeight: "600" }}
                  >

                    About
                  </NavLink>

                  <NavLink
                    to="/products"
                    className="text-black  hover:text-blue rounded-md px-3 py-2 text-2xl font-medium hover: transition-transform duration-200"
                    activeClassName="bg-gray-700"
                    style={{ fontWeight: "600" }}
                  >
                    Product
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className="text-black  hover:text-blue rounded-md px-3 py-2 text-2xl font-medium hover: transition-transform duration-200"
                    activeClassName="bg-gray-700"
                    style={{ fontWeight: "600" }}
                  >
                    Contact
                  </NavLink>

                  <a
                    href="https://www.linkedin.com/in/anil-kushwaha-843689215/"
                    className="text-black  hover:text-blue rounded-md px-3 py-2 text-2xl font-medium hover: transition-transform duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: "600" }}
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" style={{gap:"10rem"}}>
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" style={{ filter: "drop-shadow(2px 4px 6px blue)" }}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg className="h-12 w-12" fill="green" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <span className='absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs'>{calculateTotalItems()}</span>
              </button>

              <NavLink to="/cart">
                <button ref={(element) => {
                  if (element) {
                    myRef.current = element;
                    const cartButtonRect = element.getBoundingClientRect();
                    console.log("card", cartButtonRect)
                  }
                }} className=" ml-2 bg-darkslateblue text-white rounded-md px-3 py-2" style={{ borderRadius: "20px", filter: "drop-shadow(2px 4px 6px blue)" }} >
                  <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                  <span className='itemnumber'>{calculateTotalItems()}</span>
                </button>
              </NavLink>

              {/* Profile dropdown */}

            </div>

          </div>
        </div>

        {/* Mobile menu */}

      </nav>
      <Mobilemenu isOpen={isMobileMenuOpen} closeMenu={toggleMobileMenu} />
      {!myelement1 && (
        <button
          className="fixed bottom-4 right-4  p-3 rounded-full text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-500" style={{ filter: "drop-shadow(2px 4px 6px violet)", backgroundColor: "rgb(18 16 40 / 98%)", zIndex: "9999" }}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}

    </div>
  )
}

export default Navbar
import React, { useEffect, useRef, useState } from 'react';
//import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

import gsap from 'gsap';
import './NavBar.css';

export default function Navbar({ isDarkMode, toggleDarkMode, scrollToHome, scrollToProjects }) {

   /*
          <div ref={themeToggleRef} className="theme-toggle">
          <button
            ref={buttonRef}
            onClick={handleToggle}
            className={!isDarkMode ? 'light-mode-icon' : 'dark-mode-icon'}
          >
            <div ref={iconRef}>
              {isDarkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
            </div>
          </button>
        </div>
          useEffect(() => {
            gsap.fromTo(themeToggleRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
          }, []);

          useEffect(() => {
            gsap.fromTo(iconRef.current, { rotation: 0 }, { rotation: 360, duration: 0.5 });
          }, [isDarkMode]);

          const themeToggleRef = useRef(null);
          const iconRef = useRef(null);
  */

  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);
 


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY)

      if (currentScrollY < lastScrollY) {
        gsap.to(navbarRef.current, { y: 0, duration: 0.5, ease: 'power2.out' });
      } else if (currentScrollY > lastScrollY) {
        gsap.to(navbarRef.current, { y: -200, duration: 0.5, ease: 'power2.out' });
      }

      setLastScrollY(currentScrollY); // Update the scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  return (
    <header ref={navbarRef} className="section Header">
      <div className="Name">Mohamed Shaheen</div>
      <nav className={`Navbar`}>
        <div className="Nav-component" onClick={scrollToHome}>Home</div>
        <div className="Nav-component" onClick={scrollToProjects}>Projects</div>
      </nav>
    </header>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import gsap from 'gsap';
import './NavBar.css'

export default function Navbar({ isDarkMode, toggleDarkMode ,scrollToHome, scrollToProjects}) {

  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);
  const themeToggleRef = useRef(null);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(themeToggleRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }, []);

  useEffect(() => {
    gsap.fromTo(iconRef.current, { rotation: 0 }, { rotation: 360, duration: 0.5 });
  }, [isDarkMode]);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY < lastScrollY) {
          gsap.to(navbarRef.current, { y: 0, duration: 0.5, ease: "power2.out" });
        } else {
          gsap.to(navbarRef.current, { y: -100, duration: 0.5, ease: "power2.out" });
        }
  
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

  const handleToggle = () => {
    gsap.fromTo(buttonRef.current, { scale: 1 }, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
    toggleDarkMode();
  };

  return (
    <section ref={navbarRef} className="section Header">
      <div className="Name">Mohamed Shaheen</div>
      <div></div>
      <div></div>
      <div className="Navbar">
        <div className="Nav-component" onClick={scrollToHome} >Home</div>
        {/*<div className="Nav-component">Resume</div>*/}
        <div className="Nav-component" onClick={scrollToProjects}>Projects</div>
        {/*
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
        */}
      </div>
    </section>
  );
}


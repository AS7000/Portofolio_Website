import './App.css';

import Hero from './components/Hero_section/Hero';
import Education from './components/Education_section/Education';
import Navbar from './components/NavBar'; 
import React, { useState, useRef } from 'react';
import Philosophy from './components/Philosophy_Section/Philosophy';
import Skills from './components/Skillset/WHM';
import JobTitle from './components/Skillset/JobTitle';
import Answer from './components/Skillset/Answer';
import Project from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,TextPlugin);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode)
  };

  const homeRef = useRef(null);
  const projectsRef = useRef(null);


  return (
    <div>
      <div className ={`landing-page ${isDarkMode? 'dark-mode' : 'light-mode'}`}>

        <Navbar
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
        scrollToHome={() => homeRef.current.scrollIntoView({ behavior: 'smooth' })} 
        scrollToProjects={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })} 
        />

        <Hero  isDarkMode={isDarkMode} reference={homeRef} />

        <Education isDarkMode={isDarkMode}/>

        <div className='connector' id='one'/>

        <Philosophy isDarkMode={isDarkMode}/>

        <Skills isDarkMode={isDarkMode}/>

        <div className='connector' id='two'/>

        <JobTitle isDarkMode={isDarkMode} Job_id={0} colormode='mode0'/>

        <JobTitle isDarkMode={isDarkMode} Job_id={1} colormode='mode1'/>

        <JobTitle isDarkMode={isDarkMode} Job_id={2} colormode='mode2'/>

        <JobTitle isDarkMode={isDarkMode} Job_id={3} colormode='mode3'/>

        <Answer  isDarkMode={isDarkMode}/>

        <div className='connector' id='three'/>

        <Project isDarkMode={isDarkMode} reference={projectsRef} />

        <Contacts isDarkMode={isDarkMode}/>

      </div>
    </div>
  );
}

export default App;

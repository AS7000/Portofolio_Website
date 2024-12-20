// Hero.js
import './Hero.css';
import Panel from './Panel';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';


export default function Hero({ reference, isDarkMode }) {


  const job_titles = ['AI Engineer', 'Data Scientist', 'Web Developer', 'Full Stack Developer']
  const [titleIndex, setTitleIndex] = useState(0); // To track the current title
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);


  useEffect(() => {

    const updateTitle = () => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % 4);
    };

    // Slide-in animation using fromTo for the left panel
    gsap.fromTo(
      leftPanelRef.current,
      {
        x: '-100%', // Starting position off-screen left
        opacity: 0, // Starting opacity
      },
      {
        x: '0%', // End position (on-screen)
        opacity: 1, // End opacity
        duration: 1,
        ease: 'power2.out',
      }
    );

    // Slide-in animation using fromTo for the right panel with delay
    gsap.fromTo(
      rightPanelRef.current,
      {
        x: '100%', // Starting position off-screen right
        opacity: 0, // Starting opacity
      },
      {
        x: '0%', // End position (on-screen)
        opacity: 1, // End opacity
        duration: 1,
        delay: 0.5, // Delay to start after the left panel
        ease: 'power2.out',
      }
    );
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.fromTo('.glitch', 
      { skewX: 0, opacity: 1, x: 0, scaleY: 1 }, // Starting state
      { skewX: 70, duration: 0.1, ease: 'power4.inOut' } // Ending state
    )
      .fromTo('.glitch', 
        { skewX: 70 }, // Starting state
        { skewX: 0, duration: 0.04, ease: 'power4.inOut' } // Ending state
      )
      .fromTo('.glitch', 
        { opacity: 1 }, // Starting state
        { opacity: 0, duration: 0.04 } // Ending state
      )
      .fromTo('.glitch', 
        { opacity: 0 }, // Starting state
        { opacity: 1, duration: 0.04 } // Ending state
      )
      .fromTo('.glitch', 
        { x: 0 }, // Starting state
        { x: -20, duration: 0.04 } // Ending state
      )
      .fromTo('.glitch', 
        { x: -20 }, // Starting state
        { x: 0, duration: 0.04 } // Ending state
      )
      .add('split', 0)
      .fromTo('.top', 
        { x: 0 }, // Starting state
        { x: -60, duration: 0.5, ease: 'power4.inOut' }, // Ending state
        'split'
      )
      .fromTo('.bottom', 
        { x: 0 }, // Starting state
        { x: 60, duration: 0.5, ease: 'power4.inOut' }, // Ending state
        'split'
      )
      .call(updateTitle, [],'split') // Call updateTitle at this point
      .add('return', '+=0.01') // The "return" label will trigger right after the previous animations
      .fromTo('.top', 
        { x: -60 }, // Starting state (after moving left)
        { x: 0, duration: 0.04, ease: 'power4.inOut' }, // Return to original state (moving right)
        'return'
      )
      .fromTo('.bottom', 
        { x: 60 }, // Starting state (after moving right)
        { x: 0, duration: 0.04, ease: 'power4.inOut' }, // Return to original state (moving left)
        'return'
      )
      .fromTo('.glitch', 
        { className: 'glitch' }, // Starting state
        { className: 'glitch redShadow', duration: 0.08 }, // Ending state
        'split'
      )
      .fromTo('#txt', 
        { scale: 1 }, // Starting state
        { scale: 1.1, duration: 0 }, // Ending state
        'split'
      )
      .fromTo('#txt', 
        { scale: 1.1 }, // Starting state
        { scale: 1, duration: 0.02 }, // Ending state
        '+=0.02'
      )
      .fromTo('.glitch', 
        { className: 'glitch redShadow' }, // Starting state
        { className: 'glitch', duration: 0.08 }, // Ending state
        '+=0.09'
      )
      .fromTo('.glitch', 
        { className: 'glitch' }, // Starting state
        { className: 'glitch greenShadow', duration: 0.03 }, // Ending state
        'split'
      )
      .fromTo('.glitch', 
        { className: 'glitch greenShadow' }, // Starting state
        { className: 'glitch', duration: 0.03 }, // Ending state
        '+=0.01'
      )
      .fromTo('.top', 
        { x: -60 }, // Starting state
        { x: 0, duration: 0.2, ease: 'power4.inOut' } // Ending state
      )
      .fromTo('.bottom', 
        { x: 60 }, // Starting state
        { x: 0, duration: 0.2, ease: 'power4.inOut' } // Ending state
      )
      .fromTo('.glitch', 
        { scaleY: 1 }, // Starting state
        { scaleY: 1.1, duration: 0.02, ease: 'power4.inOut' } // Ending state
      )
      .fromTo('.glitch', 
        { scaleY: 1.1 }, // Starting state
        { scaleY: 1, duration: 0.04, ease: 'power4.inOut' } // Ending state
      )
      ;
  }, []);




  return (
    <section ref={reference} className="Hero">
      <Panel panel_ref={leftPanelRef} className={!isDarkMode ? 'profile-pic light-mode-img' : 'profile-pic dark-mode-img'} />
      <Panel panel_ref={rightPanelRef} className={!isDarkMode ? 'banner-container light-mode-panel' : 'banner-contatiner dark-mode-panel'}>
        <div className="banner-title">
          <span id='start'>I am ... <span id='name'><br /> Mohamed <br />Shaheen</span><br /></span>
        </div>
        <div className="banner-title" id='txt'>
          <span class='glitch top'>{job_titles[titleIndex]}</span><br />
          <span class='glitch bottom'>{job_titles[titleIndex]}</span><br />
        </div>



        <div className='banner-description'>
          <h2 >
            <strong>“</strong> If you require innovation, passion and skills, I’m the man for the job. <strong>”</strong>
          </h2>
        </div>
        
      </Panel>
    </section>
  );
}

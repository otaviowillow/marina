import { useLayoutEffect, useState } from 'react'
import { Outlet, NavLink, useLocation } from "react-router-dom";

import linkedin from './public/linkedin.svg'
import dribbble from './public/dribbble.svg'

import './layout.scss';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleClosed = () => setIsOpen(!isOpen);
  
  useLayoutEffect(() => {
    isOpen ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");
  }, [isOpen])

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav className="main-nav"> 
        <div className={`container ${isOpen ? "change" : ""}`} onClick={toggleClosed}>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        <ul className={isOpen ? "show-menu" : ""}>
          <li><h4><NavLink to={"/"} onClick={toggleClosed}>My Work</NavLink></h4></li>
          <li><h4><NavLink to={"/about"} onClick={toggleClosed}>About Me</NavLink></h4></li>
        </ul>
        <ul className={`social-media${isOpen ? " show-menu" : ""}`}>
          <li><a href="https://dribbble.com/mabrhlk" target="_blank" rel="noreferrer"><img src={dribbble} alt="dribble" /></a></li>
          <li><a href="https://www.linkedin.com/in/marinabraholka/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;

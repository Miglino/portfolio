import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
        <div className='navbar'>
          <div className="navbar-left">  
            <a
            className="navbar-icon fa-solid fa-envelope"
            href="mailto:miglinomateo@gmail.com"
            target='_blank'
            ></a>
            <a 
            className=" navbar-icon fa-brands fa-linkedin"
            target='_blank'
            href="https://www.linkedin.com/in/mateo-miglino-967174227"
            ></a>  
          </div>
          <div className="navbar-center">
            <ul className="navbar-list">
              <li className="navbar-list-item">
                <NavLink to='/'>PORTFOLIO</NavLink>
              </li>
              <li className="navbar-list-item">
                <NavLink to='/aboutme_'>ABOUT ME</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
              <h3 className="navbar-text">MATEO MIGLINO</h3>
          </div>
        </div>
  )
}

export default Navbar
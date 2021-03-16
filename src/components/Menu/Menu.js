import './Menu.css';
import React, { useState } from 'react';
import navItems from './navItems'

function Menu() {
    let [toggle, setToggle] = useState(false)
    let toggleMenu = () => {
        setToggle(toggle = !toggle)
    }
  return (
    <div className={`menu ${toggle ? 'collapse': ''}`}>
        <ul className="nav-menu">
            {navItems.map((nav, index) => (
                <li key={index}>
                    <img className="icon" src={nav.icon} alt={nav.name} onClick={toggleMenu} />
                    <span className="nav-text">{nav.name}</span>
                </li>
            ))}
            {/* <li>
                <span className="icon" onClick={toggleMenu}></span>
                <span className="nav-text">Menu</span>
            </li> */}
            {/* <li>
                <span className="icon" onClick={toggleMenu}></span>
                <span className="nav-text">Menu</span>
            </li>
            <li>
                <span className="icon"></span>
                <span className="nav-text">Content Management</span>
            </li>
            <li>
                <span className="icon"></span>
                <span className="nav-text">Courses</span>
            </li> */}
        </ul>
    </div>
  );
}

export default Menu;

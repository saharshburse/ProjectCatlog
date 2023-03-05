import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import  menu  from '../../Assets/menu.png'
import './Navbar.css';
export default function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="nav">
            <div className='navcontainer'>
                <div className='logo'>
                    <Link to="/">
                        <h1>LOGO</h1>
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <img src={menu} alt="menu" />
                </div>

                <div className={`nav-elements  ${showNavbar && 'active'} navbar`}>

                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin">Admin</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/list">Catlog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

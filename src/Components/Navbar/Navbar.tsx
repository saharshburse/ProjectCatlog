import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
export default function Navbar() {
    return (
        <div className='navcontainer'>
            <div>
            <Link to="/">
                <h1>LOGO</h1>
            </Link>
            </div>
           

            <div className='navbar'>
                <Link to="/">
                    <button>HOME</button>
                </Link>
                <Link to="/admin">
                    <button>ADMIN</button>
                </Link>
                <Link to="/login">
                    <button>LOGIN </button>
                </Link>
                <Link to="/CreateAccount">
                    <button>FORM</button>
                </Link>

                <Link to="/List">
                    <button>LIST</button>
                </Link>
            </div>
        </div>
    )
}

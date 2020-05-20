import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <div className="logo arie">
            Arie
            <br/>
            Levental
            </div>
            <nav className='navbar'>
            <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
                <ul>
                    <li><a href="#top">About me</a></li>
                    <li><a href=" ">Projects</a></li>
                    <li><a href=" ">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
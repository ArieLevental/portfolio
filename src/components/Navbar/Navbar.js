import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="header">
        <div className="logo">
        Arie <br />
        Levental
        </div>
        <div class="menu-wrap">
            <input type="checkbox" class="toggler" />
            <div class="hamburger"><div></div></div>
            <div class="menu">
                <div>
                    <div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;
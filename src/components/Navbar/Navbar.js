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
            <div class="hamburger"><p>Menu </p><div></div></div>
            <div class="menu">
                <div>
                    <div>
                        <ul>
                            <li className="about__me"><a href="#about__me__p">About Me</a></li>
                            <li className="my__projects"><a href="#my__projects_p">Projects</a></li>
                            <li className="contact__me"><a href="#contact__me__p">Contact</a></li>
                        </ul>
                        <p className="copyrights">© 2020 Arie Levental</p>  
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;
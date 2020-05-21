import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div id="copyrights">
            © 2020 Arie Levental
            </div>
            <div id="icons">
                <a href="https://github.com/AverageLeo"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/arie-levental/"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.facebook.com/arieisrael.levental"><i class="fab fa-facebook"></i></a>
                <a href="https://twitter.com/ArieLevental"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    );
}

export default Footer;
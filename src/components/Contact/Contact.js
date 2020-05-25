import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <p id="contact__me__p"></p>
            <h1>Contact</h1>
            <h3>I'm eager to learn new things and improve myself. 
            I'm currently looking for my next challenge so feel free to reach out to me any time.</h3>
            <div className='icons'>
                <div className="icons__circle"> <a href="mailto:arieka39@gmail.com"><i className="far fa-envelope icons__color"></i></a></div>
                <div className="icons__circle"> <a href="https://www.linkedin.com/in/arie-levental/"><i className="fab fa-linkedin-in icons__color"></i></a></div>
            </div>
        </div>
    );
}

export default Contact;
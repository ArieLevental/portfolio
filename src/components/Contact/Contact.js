import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <h3>I'm eager to learn new things and improve myself. 
            I'm currently looking for my next challenge so feel free to reach out to me any time.</h3>
            <div className='icons'>
                <a href="mailto:arieka39@gmail.com"><i class="far fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/arie-levental/"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    );
}

export default Contact;
import React from "react";
import "./Contact.css";
import firebase from "firebase";

const Contact = () => {
  return (
    <div className="contact">
      <p id="contact__me__p"></p>
      <div className="contact-text">
        <h1>Contact</h1>
        <h3>
          I'm eager to learn new things and improve myself. I'm currently
          looking for my next challenge so feel free to reach out to me any
          time.
        </h3>
      </div>
      <div class="container">
        <div class="wrapper animated bounceInLeft">
          <div class="contact-info">
            <h3>Arie Levental</h3>
            <ul>
              <li>
                <i class="fa fa-road"></i> Israel, Jerusalem / Tel-Aviv
              </li>
              <li>
                <i class="fa fa-phone"></i> (972) 55-666-5679
              </li>
              <li>
                <i class="fa fa-envelope"></i> Arieka39@gmail.com
              </li>
            </ul>
          </div>
          <div class="alert">Your message has been sent</div>
          <div class="contact-text-area">
            <h3>Email Me</h3>
            <form id="contactForm">
              <p>
                <label>Name</label>
                <input type="text" name="name" id="name" />
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="company" id="company" />
              </p>
              <p>
                <label>Email Address</label>
                <input type="email" name="email" id="email" />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone" />
              </p>
              <p class="full">
                <label>Message</label>
                <textarea name="message" rows="5" id="message"></textarea>
              </p>
              <p class="full">
                <button>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

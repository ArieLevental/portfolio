import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contact-section">
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
          <div className="container">
            <div className="wrapper animated bounceInLeft">
              <div className="contact-info">
                <h3>Arie Levental</h3>
                <ul>
                  <li>
                    <i className="fa fa-road"></i> Israel, Jerusalem / Tel-Aviv
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> (972) 55-666-5679
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i> Arieka39@gmail.com
                  </li>
                </ul>
              </div>
              <div className="contact-text-area">
                <h3>Email Me</h3>
                <form
                  onSubmit={this.submitForm}
                  action="https://formspree.io/maypjazw"
                  method="POST"
                >
                  <p>
                    <label>Name</label>
                    <input type="text" name="name" required={true} />
                  </p>
                  <p>
                    <label>Company</label>
                    <input type="text" name="company" />
                  </p>
                  <p>
                    <label>Email Address</label>
                    <input type="email" name="email" required={true} />
                  </p>
                  <p>
                    <label>Phone Number</label>
                    <input type="text" name="phone" />
                  </p>
                  <p className="full">
                    <label>Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      required={true}
                    ></textarea>
                  </p>
                  {status === "SUCCESS" ? (
                    <p className="submit-success full">I got your messege!</p>
                  ) : (
                    <button className="full">
                      Send me something interesting!
                    </button>
                  )}
                  {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Contact;

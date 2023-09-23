import "./Navbar.css";

const Navbar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="header">
      <div className="logo image-container">
        <a href="/">
          <img
            src="/assets/logos/full-logo.png"
            alt="full logo"
            width="150"
            height="70"
          />
        </a>
      </div>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <p>Menu</p>
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li className="navItem about__me" onClick={navbarClicked}>
                  <a href="#about__me__p">About Me</a>
                </li>
                <li className="navItem my__projects" onClick={navbarClicked}>
                  <a href="#my__projects_p">Projects</a>
                </li>
                <li className="navItem contact__me" onClick={navbarClicked}>
                  <a href="#contact__me__p">Contact</a>
                </li>
                <li className="resume">
                  <a
                    href="/assets/docs/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Resume{" "}
                  </a>
                  <i className="fas fa-file-download fa-xs"></i>
                </li>
              </ul>
              <p className="copyrights">© {currentYear} Arie Levental</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function navbarClicked() {
  const toggler = document.getElementsByClassName("toggler")[0];
  toggler.checked = false;
}

export default Navbar;

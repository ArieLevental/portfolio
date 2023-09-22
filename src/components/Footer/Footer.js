import "./Footer.css";

const currentYear = new Date().getFullYear();

const socialMediaLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ArieLevental",
    icon: "fab fa-github another",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arie-levental/",
    icon: "fab fa-linkedin",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/arie.leventaI",
    icon: "fab fa-facebook",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ArieLevental",
    icon: "fab fa-twitter",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-copyrights">© {currentYear} Arie Levental</div>
      <div className="footer-icons">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={link.icon + " footer-icon"} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;

import "./Home.scss";

const Home = () => {
  return (
    <div className="intro">
      <div
        className="marquee lax"
        data-lax-opacity="0 1, (document.body.scrollHeight*0.2) 0"
      >
        <span>developer student solver</span>
      </div>
      <div className="cursor"></div>
      <p id="about__me__p"></p>
      <div
        className="picture lax"
        data-lax-opacity="0 1, (document.body.scrollHeight*0.2) 0"
      >
        <img src="/assets/images/portrait.png" alt="" />
      </div>
      <div className="home-text">
        <p className="home-text-name">Arie Levental</p>
        <p className="home-text-title">
          Passionate  <br /> Software Developer
        </p>
        <p className="home-text-about">
          Welcome to my portfolio!
          <br />
          I'm a Computer Science <span className="fancy__color">
            student
          </span>{" "}
          at The Hebrew University of Jerusalem,{" "}
          <span className="fancy__color">passionate</span> about coding and
          exploring diverse technologies. From JavaScript and React to Python
          and C/C++, I love diving into the programming world.
          <br />
          Let's journey through my{" "}
          <span className="fancy__color">projects</span> and share the
          excitement of programming!
        </p>
        {/* <p className="home-text-about">
          Full Stack <span className="fancy__color">developer</span>, capable of
          developing <span className="fancy__color">web platforms</span> from
          scratch to production, with full responsiveness and performance.
          <br />I focus on planning,{" "}
          <span className="fancy__color">designing</span> and developing both
          Back-End and Front-End.
          <br />
          Hands-on a wide range of technologies and platforms: JavaScript,
          React, Redux, PostgreSQL, Node.js etc.
          <br />
          Currently a <span className="fancy__color">
            Computer-Science
          </span>{" "}
          student at&nbsp;
          <a
            href="https://www.shanghairanking.com/institution/the-hebrew-university-of-jerusalem"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#878a8f" }}
          >
            The Hebrew University of Jerusalem
          </a>
          .
        </p> */}
      </div>
      <div className="scroll__icon">
        <div className="wheel__icon">
          <div className="mouse__icon"></div>
        </div>
      </div>
    </div>
  );
};

window.addEventListener("mousemove", cursor);

function cursor(e) {
  const mouseCursor = document.querySelector(".cursor");

  mouseCursor.style.top = e.clientY - 10 + "px";
  mouseCursor.style.left = e.clientX - 10 + "px";
}

export default Home;

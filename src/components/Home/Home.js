import React from "react";
import "./Home.scss";
import myPicture from "./picture.png";

const Home = () => {
  return (
    <div className="intro">
      <div
        className="marquee lax"
        data-lax-opacity="0 1, (document.body.scrollHeight*0.2) 0"
      >
        <span>DEVELOPER</span>
      </div>
      <div className="cursor"></div>
      <p id="about__me__p"></p>
      <div
        className="picture lax"
        data-lax-opacity="0 1, (document.body.scrollHeight*0.2) 0"
      >
        <img src={myPicture} alt="" />
      </div>
      <div className="home-text">
        <p className="home-text-name">Arie Levental</p>
        <p className="home-text-title">
          Full-Stack <br /> Web Developer
        </p>
        <p className="home-text-about">
          Full Stack <span className="fancy__color">developer</span>, capable of
          developing <span className="fancy__color">web platforms</span> from
          scratch to production, with full responsiveness and preformance.
          <br />I focus on planning,{" "}
          <span className="fancy__color">designing</span> and developing both
          Back-End and Front-End.
          <br />
          Hands-on a wide range of technologies and platforms: JaveScript, React, Redux, PostgreSQL, Node.js etc.
          <br />
          Currently a <span className="fancy__color">Computer-Science</span> studnent in&nbsp; 
          <a href="https://www.shanghairanking.com/institution/the-hebrew-university-of-jerusalem"
             target="_blank"
             rel="noopener noreferrer"
             style={{textDecoration: "none", color: "#878a8f"}}>
          The Hebrew University of Jerusalem</a>.
        </p>
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

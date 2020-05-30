import React from 'react';
import './Picture.css';
import myPicture from './picture.png';

const Picture = () => {
  return (
    <div className='intro'>
      <div className="cursor"></div>
      <p id="about__me__p"></p>
      <div className="picture">
        <img src={myPicture} alt=" " width=" " height=" " />
      </div>
      <div className="text">
        <p id="name">Arie Levental</p>
        <p id="title">Full-Stack <br /> Web Developer</p>
        <p id="about">Full Stack <span className="fancy__color">developer</span>, capable of developing <span className="fancy__color">web platforms</span> from scratch to production, with full responsiveness and preformance. 
        <br />
        I focus on planning, <span className="fancy__color">designing</span> and developing both Back-End and Front-End.
        <br />
        Hands-on a wide range of technologies and platforms:
        JaveScript, CSS, HTML, React, Redux, PostgreSQL, Node.js and Adobe Photoshop.</p>
      </div>
          <div className="scroll__icon">
          <div className="wheel__icon">
          <div className="mouse__icon">
          </div>
          </div>
          </div>
    </div> 
    );  
  }  
  
  
  window.addEventListener('mousemove', cursor);
  
  function cursor(e) {
    const mouseCursor = document.querySelector('.cursor');

    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
  }
  
export default Picture;


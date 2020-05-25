import React from 'react';
import './Picture.css';
import myPicture from './picture.png';

const Picture = () => {
  return (
    <div className='intro'>
      <p id="about__me__p"></p>
      <div className="picture">
        <img src={myPicture} alt=" " width="340" height="500" />
      </div>
      <div className="text">
          <p id="name">Arie Levental</p>
          <p id="title">Full-Stack <br /> Web Developer</p>
          <p id="about">Full Stack developer, capable of developing web platforms from scratch to production, with full responsiveness and preformance. 
            <br />
            I focus on planning, designing and developing both Back-End and Front-End.
            <br />
            Hands-on a wide range of technologies and platforms:
            JaveScript, CSS, HTML, React, Redux, PostgreSQL, Node.js and Adobe Photoshop.</p>
      </div>
      <div className="scroll__icon">
        <div className="wheel__icon">
          <div className="mouse__icon"></div>
        </div>
      </div>
    </div>
  );
}

export default Picture;


import React from 'react';
import redChair from '../../assets/red_chair.jpg';

const About = () => (
  <div className="about">
    <div className="row">
      <div className="col-md-4">
        <img className="about-img" src={redChair} alt="Andy Davison"/>
      </div>
      <div className="col-md-8">
        <h2 className="secondary-color">Hi there,</h2>
        <p>
          I'm Andy. I'm a developer at AND Digital. I love solving problems, and
          creating websites, apps, and all things digital.
        </p>
        <p>
          Away from work, I enjoy following football (I'm a Manchester Utd fan
          (sorry)), discovering new music, and playing pretentious indie games.
          I'm planning to start throwing some of my thoughts about these, and other
          things, up on a blog here soon.
        </p>
      </div>
    </div>
  </div>
)

export default About;

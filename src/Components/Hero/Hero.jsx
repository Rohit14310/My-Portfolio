import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resumePDF from "../../assets/Rohit-bora-CV.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Rohit Bora,</span> frontend developer in React.js.
      </h1>
      <p>
        I am a frontend developer with great pasion and want to create
        wonderfull website.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        {/* <div className="hero-resume">My Resume</div> */}
        <div className="hero-resume">
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline px-4 py-2 rounded-md shadow-md"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

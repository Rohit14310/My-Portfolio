import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icons from "../../assets/arrow_icon.svg";
import { Link } from "react-router";

// import { Link } from "react-router-dom";

const MyWork = () => {
  return (
    <div id="work" className="myWork">
      <div className="myWork-title">
        <h1>My latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          // <img key={index} src={work.w_img} alt="" />
          <a
            key={index}
            href={work.w_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={work.w_img} alt="" />
          </a>
        ))}
      </div>

      <div className="mywork-showmore">
        <Link className="linkname" to="/morework">
          Show More
        </Link>
        <img src={arrow_icons} alt="" />
      </div>
    </div>
  );
};

export default MyWork;

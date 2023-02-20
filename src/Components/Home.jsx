import { useEffect } from "react";
import { useState } from "react";
import "../mediaQuery/medium.css"

// import satyampp from "../Photo/satyampp.png";

const Home = () => {
  const linkedinLink = () => {
    window.open("https://www.linkedin.com/in/satyamgupta1516/", "_blank");
  };
  const resumeLink = () => {
    fetch("Satyam_Gupta_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Satyam_Gupta_Resume.pdf";
        alink.click();
      });
    });

    // window.open("https://drive.google.com/file/d/1UEjwkyTh11LisM92upDy1uTDLvO_r5oQ/view?usp=sharing", "_blank");
  };

  const githubLink = () => {
    window.open("https://github.com/satyamasai", "_blank");
  };

  const [prof, setProf] = useState("" || "Full Stack Web Developer");
  const profession = ["Full Stack Web Developer", "MERN Stack Developer"];
  // let i = 0;

  useEffect(
    (i) => {
      setInterval(() => {
        if (i === 0) {
          i = 1;
        } else {
          i = 0;
        }
        setProf(profession[i]);
      }, 2000);
    },
    [0]
  );

  return (
    <div className="homeDiv" id="home">
    <div className="left_home_div">
{/*    <div className="ocassion">ॐ Happy Maha Shivratri ॐ</div>
  */} 
       <h2 className="hey">
          Hey! i<span>'</span>m
        </h2>
        <h1>
          {" "}
          SATYAM <span className="white_color">GUPTA</span>{" "}
        </h1>
        <br />
        <br />
        <h2 className="full_stack"> • {prof} • </h2>
        <div className="socialIcon">
          <div className="linkedIn" onClick={linkedinLink}>
            <i class="fa-brands fa-linkedin"></i>
            <div style={{ color: "yellow" }} className="none">
              Linkedin
            </div>
          </div>

          <div className="linkedIn" onClick={githubLink}>
            <i class="fa-brands fa-github"></i>
            <div style={{ color: "yellow" }} className="none">
              Github
            </div>
          </div>

          <div className="linkedIn" onClick={resumeLink}>
            <i class="fa-solid fa-cloud-arrow-down"></i>
            <div style={{ color: "yellow" }} className="none">
              Resume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

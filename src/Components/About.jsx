import satyampq from "../Photo/satyampq.png";
// import satyampqr from "../Photo/satyampqr.png";
// import satyamp from "../Photo/satyamp.png" 
import satyampqrs from "../Photo/satyampqrs.png" 
import satyamnew from "../Photo/satyamnew.jpg"
const About = () => {
  return (
    <div className="aboutDiv" id="about">
      <div className="about_text">About Me</div>
      <div className="about_flex">
        <div className="about_div_img">
          <img src={satyamnew} alt="satyam pq" />
        </div>

        <div className="about_description">
          <br />
          <br />
          <h1 className="waviy">
            <span>I</span>
            <span className="red_mark">'</span>
            <span>m</span>
            <br />
            <span> Satyam </span>
          </h1>
          <br />
          <br />
          <h2>
            Quick learner and an aspiring full-stack web developer with core
            knowledge of MERN stack technology. Looking forward to applying and
            enhancing my skills and knowledge as a developer.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;

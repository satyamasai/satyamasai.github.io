import satyampq from "../Photo/satyampq.png";

const About = () => {
  return (
    <div className="aboutDiv" id="about">
      <div className="about_text">About</div>
      <div className="about_flex">
        <div className="about_div_img">
          <img src={satyampq} alt="" />
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

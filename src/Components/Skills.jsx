const Skills = () => {
  return (
    <div id="skill">
      <br />
      <br />
      <div
        style={{
          fontSize: "25px",
          fontWeight: "Bolder",
          textDecoration: "underline",
          color:"goldenrod"
        }}
      >
        Skills
      </div>

      <div className="SkillsDiv" id="SkillsDiv">
        <div>
          <i class="devicon-html5-plain-wordmark colored"></i>

          <h2>HTML</h2>
        </div>

        <div>
          <i class="devicon-css3-plain-wordmark colored"></i>

          <h2>CSS</h2>
        </div>

        <div>
          <i class="devicon-javascript-plain colored"></i>

          <h2>JavaScript</h2>
        </div>

        <div>
          <i class="devicon-react-original-wordmark colored"></i>

          <h2>React</h2>
        </div>

        <div>
          <i class="devicon-redux-original colored"></i>

          <h2>Redux</h2>
        </div>

        <div className="Chakra">
          <img src="https://www.coffeeclass.io/logos/chakra-ui.png" alt="" />
          <h2>Chakra UI</h2>
        </div>

        <div>
          <i class="devicon-mongodb-plain-wordmark colored"></i>

          <h2>Mongo DB</h2>
        </div>

        <div>
          <i class="devicon-nodejs-plain-wordmark colored"></i>

          <h2>Node.JS</h2>
        </div>
      </div>
    </div>
  );
};
export default Skills;

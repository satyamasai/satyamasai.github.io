import pharmaeasy from "../Photo/pharmaeasy-snap.jpg";
import ytclone from "../Photo/ytclone.jpg";

const Projects = () => {
  return (
    <>
      <div className="projectDiv" id="projectDiv">
        <h1
          style={{
            color: "yellow",

            textDecoration: "underline",
          }}
        >
          Projects
        </h1>

        <div className="project_card">
          <div className="card">
            <div>
              <img src={pharmaeasy} alt="" />
            </div>
            <button className="demobtn">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://cozy-naiad-3ca38b.netlify.app/index.html"
              >
                VIEW
              </a>
            </button>
            <button className="demobtn">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/satyamasai/PharmEasy-clone-by-Satyam"
              >
                source code
              </a>
            </button>
            <br />
            <br />
            <p>* Pharmeasy clone *</p>
            <div className="tech_stack">
              <div>
                <i class="devicon-html5-plain-wordmark colored"></i>
              </div>
              <div>
                <i class="devicon-css3-plain-wordmark colored"></i>
              </div>
              <div>
                <i class="devicon-javascript-plain colored"></i>
              </div>
            </div>
            <br />
            <p>
              this project made by HTML ,CSS and javascripts, moreover in this
              website clone i worked on the signup/login functionality add to
              cart functionality etc.
            </p>
          </div>

          <div className="card">
            <div>
              <img src={ytclone} alt="" />
            </div>
            <button className="demobtn">
              {" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://dapper-sawine-04c05a.netlify.app/"
              >
                VIEW
              </a>
            </button>

            <button className="demobtn">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://dapper-sawine-04c05a.netlify.app/"
              >
                Source code
              </a>
            </button>
            <br />
            <br />
            <p>* Youtube clone *</p>
            <div className="tech_stack">
              <div>
                <i class="devicon-html5-plain-wordmark colored"></i>
              </div>
              <div>
                <i class="devicon-css3-plain-wordmark colored"></i>
              </div>
              <div>
                <i class="devicon-javascript-plain colored"></i>
              </div>
            </div>
            <br />
            <p>
              i have made this project as a clone with html, javascripts and CSS
              and Youtube API with fetching functionality{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

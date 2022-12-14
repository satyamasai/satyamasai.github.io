import pharmaeasy from "../Photo/pharmaeasy-snap.jpg";
import ytclone from "../Photo/ytclone.jpg";
import urbancp from "../Photo/urbancp.jpg";
import naukris from "../Photo/naukris.jpg";

const Projects = () => {
  return (
    <>
      <div className="projectDiv" id="projectDiv">
        <h1
          style={{
            color: "goldenrod",

            textDecoration: "underline",

          }}
        >
          Projects
        </h1>

        <div className="project_card">
  {/*   0th  card       */}
        <div className="card">
        <div>
          <img src={naukris} alt="" />
        </div>
        <button className="demobtn">
          {" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://naukri12345.netlify.app/"
          >
            VIEW
          </a>
        </button>

        <button className="demobtn">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Sharmacs8853/overjoyed-field-1627"
          >
            Source code
          </a>
        </button>
        <br />
        <br />
        <p>* Naukri.com clone *</p>
        <div className="tech_stack">
          <div>
            
          <i class="devicon-react-original-wordmark colored"></i>
          
          </div>
          <div>
          
          <i class="devicon-nodejs-plain-wordmark colored"></i>
          
          </div>

          <div>
          <i class="devicon-javascript-plain colored"></i>
        </div>
          <div>
          <i class="devicon-express-original-wordmark"></i>
          
          </div>
          
          <div>
           
          <i class="devicon-mongodb-plain-wordmark colored"></i>
          
          </div>
        </div>
        <br />
        <p>
        Naukri.com is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies, and job seekers in India and overseas.{" "}
        </p>
      </div>

        {/*   1st card       */}
          <div key={Math.random()} className="card">
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
              This is e-commerce website with the functionality of coupan code, add to cart and signup/login.
            </p>
          </div>
          {/*  2nd project card */}
          <div className="card">
            <div>
              <img src={ytclone} alt="" />
            </div>
            <button className="demobtn">
              {" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://curious-hummingbird-01446b.netlify.app/"
              >
                VIEW
              </a>
            </button>

            <button className="demobtn">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/satyamasai/Youtube_clone"
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
              I have made this project as a clone with html, javascripts, CSS
              and Youtube API with fetching functionality{" "}
            </p>
          </div>

          {/*  3rd project card */}
          <div className="card">
            <div>
              <img src={urbancp} alt="" />
            </div>
            <button className="demobtn">
              {" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://urban-company-ruddy.vercel.app/"
              >
                VIEW
              </a>
            </button>

            <button className="demobtn">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/sonuprasad66/tense-visitor-349"
              >
                Source code
              </a>
            </button>
            <br />
            <br />
            <p>* Urban company clone *</p>
            <div className="tech_stack">
            <div>
            
            <i class="devicon-react-original-wordmark colored"></i>
            
            </div>
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
            
            Urban Company is Asia's largest online home services platform.The platform helps customers book reliable & high quality services - beauty treatments, massages, haircuts, home cleaning and many more..{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

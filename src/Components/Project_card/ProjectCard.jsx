import React from 'react'
import "./ProjectCard.css"


const ProjectCard = ({data}) => {
    let {name,heroimg,viewlink,sourceodelink,projectDisc}= data;
  return (
    <div className='project_card'>
    <div className="card">
            <div>
              <img src={heroimg} alt="heroimg" />
            </div>
            <button className="demobtn">
              {" "}
              <a
                rel="noreferrer"
                target="_blank"
                href={viewlink}
              >
                VIEW
              </a>
            </button>

            <button className="demobtn">
              <a
                rel="noreferrer"
                target="_blank"
                href={sourceodelink}
              >
                Source code
              </a>
            </button>
            <br />
            <br />
            <p>*{name}*</p>
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
                <i class="devicon-mongodb-plain-wordmark colored"></i>
              </div>
            </div>
            <br />
            <p>
             {projectDisc}
            </p>
          </div>
    
    </div>
  )
}

export default ProjectCard
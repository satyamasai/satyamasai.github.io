import React from 'react'
import "./ProjectCard.css"
// import {heybellohero} from 
const ProjectCard = () => {
  return (
    <div className='project_card'>
    <div className="card">
            <div>
              <img src="" alt="asdf" />
            </div>
            <button className="demobtn">
              {" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://monumental-mandazi-8960e5.netlify.app/"
              >
                VIEW
              </a>
            </button>

            <button className="demobtn">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/satyamasai/heybello"
              >
                Source code
              </a>
            </button>
            <br />
            <br />
            <p>* Hey Bello E-com. *</p>
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
              This is E-commerce application with React, Node.js, MongoDB and
              razorpay API integration with fetching functionality{" "}
            </p>
          </div>
    
    </div>
  )
}

export default ProjectCard
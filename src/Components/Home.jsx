import satyampp from "../Photo/satyampp.png"

 const Home=()=>{
    const linkedinLink=()=>{
        window.open("https://www.linkedin.com/in/satyamgupta1516/","_blank")
    }
     const resumeLink = () => {
        window.open("https://drive.google.com/file/d/1UEjwkyTh11LisM92upDy1uTDLvO_r5oQ/view?usp=sharing", "_blank");
        }

        const githubLink = () => {
            window.open("https://github.com/satyamasai", "_blank");
            }
    return (
      
    

 <div className="homeDiv">
                
             
 <div className="right_home_div">
 <img src={satyampp} alt="asdas" />
 </div>
              <div className="left_home_div">
                        <h2 className="hey">Hey! i<span>'</span>m</h2>
                        <h1> SATYAM</h1>
                        <h2> •  Full Stack Web Developer  • </h2>
                      <div className="socialIcon">
                    
                      <div className="linkedIn" onClick={linkedinLink}>
                        <i class="fa-brands fa-linkedin"></i>
                        <div style={{color:"yellow"}} className="none">Linkedin</div>
                      </div>
                    
                      <div className="linkedIn" onClick={githubLink}>
                        <i class="fa-brands fa-github"></i>
                        <div style={{color:"yellow"}} className="none">Github</div>
                      </div>  
            
                      <div className="linkedIn" onClick={resumeLink}>
                        <i class="fa-solid fa-cloud-arrow-down"></i>
                        <div style={{color:"yellow"}} className="none">Resume</div>
                      </div>          
            
                        </div>
                </div>
 </div>
    )
 }
 export default Home
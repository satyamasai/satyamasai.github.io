import React from "react";

import "../App.css";
const Stats = () => {
  return (
    // streak 
    <div id="stats" >
      <div style={{ width: "40%", margin: "auto"}}>
        <a href="https://github.com/satyamasai">
          <img
          alt="satyam"
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=satyamasai"
          />
        </a>
      </div>
 
      <div
        style={{
          width: "65%",
          height: "300px",
          display: "flex",
          margin: "auto",
          marginTop:"10px"
        
        }}
      >
        <a href="https://github.com/satyamasai">  
          <img alt="satyam"
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=satyamasai"  //launguages
          />
        </a>
        <a href="https://github.com/satyamasai">
          <img
          alt="satyam"
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=satyamasai&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
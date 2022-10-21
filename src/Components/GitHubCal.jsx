import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubCal = () => {
  return (
    <div className="GitHubCal">
      <h2>My Github Contributions </h2>
      <br />

      <div className="cal">
        <GitHubCalendar username="satyamasai" />
      </div>
    </div>
  );
};

export default GitHubCal;

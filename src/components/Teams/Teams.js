import React from "react";
// import Chart from "../chart/Chart.js";
import "./TeamCard.css";
import TeamCard from "./TeamCard";

const Teams = () => {
  return (
    <>
      <div id="team" className="teamHeading">
        <h1>Team Members</h1>
      </div>
      <div>
        <TeamCard />
        {/* <Chart /> */}
      </div>
    </>
  );
};

export default Teams;

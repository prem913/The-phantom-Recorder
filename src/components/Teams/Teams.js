import React from "react";
// import Chart from "../chart/Chart.js";
import "./TeamCard.css";
import TeamCard from "./TeamCard";
import { Container } from "@mui/system";

const Teams = () => {
  return (
    <>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.882)",
        width:"100%"
      }}>
        <div id="team" className="teamHeading">
          <h1>Team Members</h1>
        </div>
        <div>
          <TeamCard />
          {/* <Chart /> */}
        </div>
      </div>
    </>
  );
};

export default Teams;

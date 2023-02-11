import React from "react";
import "./Content.css";
import tempImg from "../../imgs/obj.png";
const Content = () => {
  return (
    <div className="content" id="content">
      <div className="objectiveWrapper">
        <h1>Objectives</h1>
        <div className="objective">
          <div className="objectiveText">
            <p>
              The objective is to build An electronic health record (EHR)
              contains highly sensitive and critical data related to patients
              that is shared among multiple facilities and agencies for
              effective diagnosis and treatment.
            </p>
          </div>
          <div className="objective_img">
            <img src={tempImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

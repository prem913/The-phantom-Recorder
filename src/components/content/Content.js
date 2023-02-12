import React from "react";
import "./Content.css";
import tempImg from "../../imgs/obj.png";

import html from "../../imgs/html.png";
import css from "../../imgs/css-3.png";
import js from "../../imgs/js.png";
import react from "../../imgs/science.png";
import node from "../../imgs/node-js.png";
import vsCode from "../../imgs/visual-studio.png";
import solidityImg from "../../imgs/solidity_img.png";
import etheriumImg from "../../imgs/Etherium_img.png";
import metamaskImg from "../../imgs/metamask.png";
import ipfsImg from "../../imgs/ipfs_img.png";
import ethersImg from "../../imgs/ethers_img.png";
import git from "../../imgs/git.png";

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

      {/* Tech used  */}

      <div className="skills" id="skills">
        <h2 className="skills_heading green"> Tools & Technologies </h2>

        {/* below div should be from backend  */}
        <div className="skillsIcons white">
          <div className="ethers skill">
            <img src={ethersImg} alt="" />
            <h4>ETHERS.JS</h4>
          </div>
          <div className="ipfs skill">
            <img src={ipfsImg} alt="" />
            <h4>IPFS</h4>
          </div>
          <div className="metamask skill">
            <img src={metamaskImg} alt="" />
            <h4>METAMASK</h4>
          </div>
          <div className="etherium skill">
            <img src={etheriumImg} alt="" />
            <h4>ETHEREUM</h4>
          </div>
          <div className="solidity skill">
            <img src={solidityImg} alt="" />
            <h4>SOLIDITY</h4>
          </div>
          <div className="html skill">
            <img src={html} alt="" />
            <h4>HTML</h4>
          </div>

          <div className="css skill">
            <img src={css} alt="" />
            <h4>CSS</h4>
          </div>

          <div className="js skill">
            <img src={js} alt="" />
            <h4>JS</h4>
          </div>

          <div className="react skill">
            <img src={react} alt="" />
            <h4>REACT JS</h4>
          </div>

          <div className="node skill">
            <img src={node} alt="" />
            <h4>NODE JS</h4>
          </div>

          <div className="vscode skill">
            <img src={vsCode} alt="" />
            <h4>VS CODE</h4>
          </div>

          <div className="git skill">
            <img src={git} alt="" />
            <h4>GIT</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

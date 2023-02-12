import React from "react";
import premImg from "../../imgs/Prem_img.jpeg";
import alimImg from "../../imgs/Alim_img.jpeg";
import prudhviImg from "../../imgs/prudhvi_image.jpeg";
import varunImg from "../../imgs/varun.jpeg";
import "./TeamCard.css";

const TeamCard = () => {
  return (
    <div className="teamCard">
      <div className="container">
        <div className="card">
          <div className="content">
            <h2>01</h2>
            <h3 className="alimImg">
              <img src={alimImg} alt="" />
            </h3>
            <p>
              <span>Name : </span> <span>Alim Khan</span> <br />
              <span>Branch : </span> <span>Electrical</span> <br />
              <span style={{ color: "var(--green)" }}>Role : </span>{" "}
              <span style={{ color: "var(--green)" }}>Frontend Developer</span>{" "}
              <br />
            </p>
            <a
              href="https://gleaming-babka-c832f1.netlify.app/"
              target="_blank"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="content">
            <h2>02</h2>
            <h3>
              <img src={premImg} alt="" />
            </h3>
            <p>
              <span>Name : </span> <span>Premchand </span> <br />
              <span>Branch : </span> <span>Electrical</span> <br />
              <span style={{ color: "var(--green)" }}>Role : </span>{" "}
              <span style={{ color: "var(--green)" }}>Backend Developer</span>{" "}
              <br />
            </p>
            <a href="https://premchand.me/" target="_blank">
              Know More
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="content">
            <h2>03</h2>
            <h3>
              <img src={prudhviImg} alt="" />
            </h3>
            <p>
              <span>Name : </span> <span>T. Prudhvi Kumar Reddy </span> <br />
              <span>Branch : </span> <span>Electrical</span> <br />
              <span style={{ color: "var(--green)" }}>Role : </span>{" "}
              <span style={{ color: "var(--green)" }}>
                Frontend,ML Developer
              </span>{" "}
              <br />
            </p>
            <a href="#">Know More</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="content">
            <h2>03</h2>
            <h3>
              <img src={varunImg} alt="" />
            </h3>
            <p>
              <span>Name : </span> <span>Varun Kumar Reddy </span> <br />
              <span>Branch : </span> <span>Electrical</span> <br />
              <span style={{ color: "var(--green)" }}>Role : </span>{" "}
              <span style={{ color: "var(--green)" }}>
                Backend,Flutter Developer
              </span>{" "}
              <br />
            </p>
            <a href="#">Know More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

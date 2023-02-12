import { Button } from "@mui/material";
import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="contact_info_wrapper">
        <h1>Contact Information</h1>
        <div className="contact_info">
          <p>email : abc@gmai.com</p>
          <p className="fright">phone no : 3483749837</p>
        </div>
      </div>

      <div className="personal_info_wrapper">
        <h1>Personal Information</h1>
        <div className="personalInfo">
          <p>First Name : Alim</p>
          <p className="fcenter">Last Name : Khan</p>
          <p> City : Raipur</p>
          <p className="fcenter">district : Janjgir</p>
          <p>State : Chhattisgarah</p>
          <p className="fcenter">PinCode : 3947974</p>
          <p>date-of-birth : 21-04-2000</p>
          <p className="fcenter">Blood Group : A+</p>
          <p>Gender : Male</p>
          <p className="fcenter">
            {" "}
            <span className="sheading">Health Issues : </span> <br />{" "}
            <span style={{ marginLeft: "14rem" }}></span> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Fugiat ad id vel rem dolorem
            deleniti sed eos odit? Praesentium maxime beatae, repellat voluptas
            nam aliquam a, tenetur perspiciatis dolore veniam architecto quia
            esse qui maiores? isf s
          </p>
        </div>
      </div>
      <div className="cust_button">
        <Button variant="outlined">Edit!!</Button>
      </div>
    </div>
  );
};

export default Info;

import { Button } from "@mui/material";
import React from "react";
import "./Info.css";

const Info = ({ data }) => {
  return (
    <div className="info">
      <div className="contact_info_wrapper">
        <h1>Contact Information</h1>
        <div className="contact_info">
          <p>email : {data.email}</p>
          <p className="fright">phone no : {data.mobNo}</p>
        </div>
      </div>

      <div className="personal_info_wrapper">
        <h1>Personal Information</h1>
        <div className="personalInfo">
          <p>First Name : {data.fname}</p>
          <p className="fcenter">Last Name : {data.lname}</p>
          <p> City : {data.city}</p>
          <p className="fcenter">district : {data.district}</p>
          <p>State : {data.state}</p>
          <p className="fcenter">PinCode : {data.pinCode}</p>
          <p>date-of-birth : {data.date}</p>
          <p className="fcenter">Blood Group : {data.bloodGroup}</p>
          <p>Gender : {data.gender}</p>
          <p className="fcenter">
            {" "}
            <span className="sheading">Health Issues : </span> <br />{" "}
            <span style={{ marginLeft: "14rem" }}></span> {data.health_issues}
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

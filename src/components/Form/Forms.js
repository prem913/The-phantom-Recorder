import { Button } from "@mui/material";
import React, { useState } from "react";
import Contact_Form from "./Contact_Form";
import Personal_form from "./Personal_form";
import "./Form.css"


const Forms = ({handleSubmit,getDetails,value,setValue}) => {
  

  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit(value)
  }
  const handleGetDetails = () => {
    getDetails()
  }

  return (
    <div className="all_forms">
      <Contact_Form value = {value} setValue={setValue} />
      <Personal_form value = {value} setValue={setValue} />
      <div className="cust_button">
        <Button variant="outlined" onClick={(e) => handleClick(e)}>
          Submit!!
        </Button>
        <Button variant="outlined" onClick={handleGetDetails}>
          getDetails
        </Button>
      </div>
    </div>
  );
};

export default Forms;

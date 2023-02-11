import { Button } from "@mui/material";
import React, { useState } from "react";
import Contact_Form from "./Contact_Form";
import Personal_form from "./Personal_form";


const initialState = {
  email : "",
  mobNo: "",
  fname: "",
  lname: "",
  city : "",
  district: "",
  state: "",
  pinCode: null,
  date: null,
  bloodGroup: "",
  gender: "",
  health_issues : ""

}
const Forms = () => {
  
  const [value, setValue] = useState(initialState);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(value);
  }

  return (
    <div className="all_forms">
      <Contact_Form value = {value} setValue={setValue} />
      <Personal_form value = {value} setValue={setValue} />
      <div className="cust_button">
        <Button variant="outlined" onClick={(e) => handleClick(e)}>
          Submit!!
        </Button>
      </div>
    </div>
  );
};

export default Forms;

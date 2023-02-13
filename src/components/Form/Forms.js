import { Button, Container } from "@mui/material";
import React, { useEffect, useState,useRef } from "react";
import Contact_Form from "./Contact_Form";
import Personal_form from "./Personal_form";
import "./Form.css"
import { initialState } from "../../App";
import { StyledButton, StyledPaper } from "../custom";


const Forms = ({handleSubmit,getDetails,value,setValue,edit}) => {
  const deployed = useRef(false)

  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit(value)
  }
  const handleGetDetails = () => {
    getDetails()
  }

  // useEffect(()=>{
    // if(edit === true && !deployed.current) {
    //   getDetails()
    //   deployed.current = true
    // }
  // })

  return (
    <Container style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight:"100vh",
        minwidth:"100vw",
        paddingTop:'3rem'
    }}>
      <StyledPaper style={{
        border:'1px solid #A997DF',
        zIndex:'2'
      }}>
    <div className="all_forms">
      <Contact_Form value = {value} setValue={setValue} />
      <Personal_form value = {value} setValue={setValue} />
      <div className="cust_button">
        <StyledButton variant="contained" onClick={(e) => handleClick(e)}>
          {edit === true?"Modify":"Submit"}
        </StyledButton>
      </div>
    </div>
      </StyledPaper>
      </Container>
  );
};

export default Forms;

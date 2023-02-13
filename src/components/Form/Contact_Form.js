import { TextField } from "@mui/material";
import "./Form.css";
import React from "react";

const Contact_Form = (props) => {
  return (
    <>
      <h1 className="form_heading">Contact Information</h1>
      <div className="Form">
        <div className="form_inner">
          <div className="frow">
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              value = {props.value.email}
              onChange={(e) =>
                props.setValue({ ...props.value, email: e.target.value })
              }
            />
            <TextField
              id="filled-basic"
              label="Mob No."
              variant="filled"
              value={props.value.mobNo}
              onChange={(e) =>
                props.setValue({ ...props.value, mobNo: e.target.value })
              }
            />
          </div>
          {/* <div className="frow">
            <TextField id="filled-basic" label="Last Name" variant="filled" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Contact_Form;

import React from "react";
import "./Form.css";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const Personal_form = (props) => {
  return (
    <>
      <h1 className="form_heading">Personal Information</h1>
      <div className="Form">
        <div className="form_inner">
          <div className="frow">
            <TextField
              id="filled-basic"
              label="First Name"
              variant="filled"
              value={props.value.fname}
              onChange={(e) =>
                props.setValue({ ...props.value, fname: e.target.value })
              }
            />
            <TextField
              id="filled-basic"
              label="Last Name"
              variant="filled"
              value={props.value.lname}
              onChange={(e) =>
                props.setValue({ ...props.value, lname: e.target.value })
              }
            />
          </div>
          <div className="frow">
            <TextField
              id="filled-basic"
              label="city"
              variant="filled"
              value={props.value.city}
              onChange={(e) =>
                props.setValue({ ...props.value, city: e.target.value })
              }
            />
            <TextField
              id="filled-basic"
              label="district"
              variant="filled"
              value={props.value.district}
              onChange={(e) =>
                props.setValue({ ...props.value, district: e.target.value })
              }
            />
          </div>
          <div className="frow">
            <TextField
              id="filled-basic"
              label="State"
              variant="filled"
              value={props.value.state}
              onChange={(e) =>
                props.setValue({ ...props.value, state: e.target.value })
              }
            />
            <TextField
              id="filled-basic"
              label="Pin Code"
              variant="filled"
              type="number"
              value={props.value.pinCode}
              onChange={(e) =>
                props.setValue({ ...props.value, pinCode: e.target.value })
              }
            />
          </div>
          <div className="frow">
            <TextField
              id="filled-basic"
              label=""
              variant="filled"
              type="date"
            />
            <TextField
              id="filled-basic"
              label="Blood Group"
              variant="filled"
              value={props.value.bloodGroup}
              onChange={(e) =>
                props.setValue({ ...props.value, bloodGroup: e.target.value })
              }
            />
          </div>
          <div className="frow">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={props.value.gender}
                onChange = {(e)=>{
                  props.setValue({...props.value,gender: e.target.value});
                }}
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="curstom_textarea">
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: "1rem",
                marginBottom: "0.5rem",
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              Health Issues
            </div>
            <TextareaAutosize
              aria-label="maximum height"
              placeholder=""
              style={{ width: "100%", height: "40vh" }}
              value={props.value.health_issues}
              onChange={(e) =>
                props.setValue({
                  ...props.value,
                  health_issues: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal_form;

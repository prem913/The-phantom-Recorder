import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Visit.css";
const VisitPopup = (props) => {
  return (
    <div className={props.showPopup === true
          ? "visit_popup_wrapper"
          : "visit_popup_wrapper visit_popup_wrapper_active"
      }>
      <div className="visit_popup">
        <div className="crossBtn" onClick={() => props.setShowPopup(false)}>
          <CloseIcon />
        </div>
        <div className="visit_popup_head">
          <p>Joined : 1 jan 2020</p>
          <p>Leave : 2 jan 2021</p>
        </div>
        <p>Host Name : sdhfshdf shdfh </p>
        <p className="fright">Dr. Name : dhsfsldhfs fhsd</p>

        <p>
          issue : Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Culpa, alias. Earum veniam ea officia ullam id inventore dolore soluta
          explicabo, ducimus, aspernatur, perferendis veritatis officiis
          similique harum assumenda nemo fugit doloribus facilis aperiam maxime
          optio. Distinctio facere quae laboriosam eius.
        </p>
      </div>
    </div>
  );
};

export default VisitPopup;

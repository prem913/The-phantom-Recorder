import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../MetaData.js";
import tempImg from "../../imgs/temp.png";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div>
        <MetaData title={` Profile`} />

        <div className="profileContainer">
          <div class="profileContainer-1">
            <h1>My Profile</h1>
            <img src={tempImg} alt="fsf" />
            <Link to="/me/update"> Edit Profile </Link>
          </div>
          <div className="profileContainer-2">
            <div>
              <h4>Full Name</h4>
              <p>{`Alim Khan`}</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>{`samsoon7789@gmail.com`}</p>
            </div>
            {/* <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substring(0, 10)}</p>
              </div> */}
            <div>
              <Link to="/orders">My Appointments</Link>
              {/* <Link to="/password/update">Change Password</Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

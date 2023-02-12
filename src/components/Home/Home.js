import React, { useEffect } from "react";
import "./Home.css";
import ThreeD_Face_Animation from "../../imgs/home_img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="home">
      <img src={ThreeD_Face_Animation} alt="" data-aos="zoom-in-down" />
      <div className="home_content" data-aos="fade-up">
        <h1>
          Electronic <span>Health Recorder</span>
        </h1>
        <p>
          An electronic health record (EHR) contains highly sensitive and
          critical data related to patients that is shared among multiple
          facilities and agencies for effective diagnosis and treatment. Types
          of data, an EHR typically includes: 1. Contact information 2.
          Information about visits to healthcare professionals 3. Allergies 4.
          Insurance information 5. Family history 6. Immunization status 7.
          Information about any conditions or diseases 8. A list of medications
          9. Records of hospitalization 10. Information about any surgeries or
          procedures performed. .{" "}
        </p>
        <Link to="/recognition">
          <div className="button">GET RECORD</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;

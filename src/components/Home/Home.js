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
          Electronic <span>Health Record</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          necessitatibus vero ex, quae reiciendis obcaecati ab sint omnis,
          provident iste voluptatum adipisci impedit ad. Voluptatibus harum, est
          rem sapiente libero dignissimos sequi corrupti maiores?.{" "}
        </p>
        <Link to="/recognition">
          <div className="button">Start</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;

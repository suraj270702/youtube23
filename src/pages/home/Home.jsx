import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import img from "../../img/check.png";
import './Home.scss';
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Slide />
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Give for Good: Empower Change with Your Generosity</h1>
            <div className="title">
              <img src={img} alt="" />
              Support for Every Cause
            </div>
            <p>
              Discover impactful projects to fund, tailored to various donation
              sizes. Transparent funding goals, no hidden fees.
            </p>
            <div className="title">
              <img src={img} alt="" />
              Empowering Change, Swiftly
            </div>
            <p>
              Start contributing to meaningful initiatives within minutes. Find
              the projects that align with your passion.
            </p>
            <div className="title">
              <img src={img} alt="" />
              Secure and Reliable Contributions
            </div>
            <p>
              Your donations are secure. Release of funds occurs only after
              project milestones are reached and verified.
            </p>
            <div className="title">
              <img src={img} alt="" />
              Round-the-Clock Assistance
            </div>
            <p>
              We're here for you 24/7. Reach out for any inquiries, guidance, or
              support you may need.
            </p>
          </div>
          <div className="item">
          <iframe className="video" width="560" height="515" src="https://www.youtube.com/embed/CiFoHm7HD94" frameborder="0" allowfullscreen></iframe>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

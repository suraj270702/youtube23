import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import img from "../../img/check.png";
import banner from "../../img/your-donation-makes-difference-quote-box-with-flat-character-charity-contribution-social-aid-speech-bubble-with-cartoon-illustration-colourful-quotation-design-on-white-background-vector.jpg";
import "./Home.scss";
import CategorySlider from "../../components/slide/CategorySlider";
import { data, donation } from "../../data";
import CategoryCard from "../../components/category/CategoryCard";
import DonationCard from "../../components/category/DonationCard";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Slide slidesToShow={5} arrowsScroll={5}>
      {
      data?.map((card)=>(
        <CategoryCard item={card} key={card.id}/>
      ))
    }
      </Slide>
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
            <iframe
              className="video"
              width="560"
              height="515"
              src="https://www.youtube.com/embed/CiFoHm7HD94"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Make a <i>Difference</i>
            </h1>
            <p>
              Join us in creating a positive impact by contributing to our noble
              cause.
            </p>
            <div className="title">
              <img src={img} alt="" />
              Transparent and Secure Donations
            </div>

            <div className="title">
              <img src={img} alt="" />
              Support Communities in Need
            </div>

            <div className="title">
              <img src={img} alt="" />
              Track Your Contributions and Impact
            </div>
            <button>Donate Now</button>
          </div>
          <div className="item">
            <img src={banner} alt="Donate Now" />
          </div>
        </div>
      </div>
      
      <Slide slidesToShow={3} arrowsScroll={3}>
      {
      donation?.map((card)=>(
        <DonationCard item={card} key={card.id}/>
      ))
    }
      </Slide>
    </div>
  );
};

export default Home;

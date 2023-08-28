import React from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel'
import check from '../../img/check.png'
const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className='nav'>LetsHelp Food Donation</span>
          <h1>Food Donation Requests</h1>
        <div className="user">
          <img className='pp' src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" />
          <span>HelpNgo</span>
        </div>
        <Slider slidesToShow={1} arrowsScroll={1} className="slider">
          <img src='https://img.freepik.com/free-vector/hand-drawn-flat-design-food-bank-illustration_23-2149354223.jpg?w=996&t=st=1693248098~exp=1693248698~hmac=2d252e56f6e5912abac5f2431ff52e53e3982c0423ade5260ea1c63b1f78a67a' />
          <img src='https://img.freepik.com/free-vector/hand-drawn-flat-design-food-bank-illustration_23-2149354223.jpg?w=996&t=st=1693248098~exp=1693248698~hmac=2d252e56f6e5912abac5f2431ff52e53e3982c0423ade5260ea1c63b1f78a67a' />
          <img src='https://img.freepik.com/free-vector/hand-drawn-flat-design-food-bank-illustration_23-2149354223.jpg?w=996&t=st=1693248098~exp=1693248698~hmac=2d252e56f6e5912abac5f2431ff52e53e3982c0423ade5260ea1c63b1f78a67a' />

        </Slider>
        <h1>Request Details</h1>
        <p>
        

We extend our warmest greetings to you and hope this letter finds you well. We are writing on behalf of HelpNgo, a dedicated non-profit organization committed to addressing hunger and poverty in our local community. Your support has the power to make a significant impact, and we are reaching out to you with an urgent request for food donations that can help us provide relief to those in need.

Our community is facing unprecedented challenges, exacerbated by recent global events and economic uncertainties. The ongoing effects of the COVID-19 pandemic continue to affect vulnerable families, leaving them struggling to put food on their tables. We are committed to making a positive change, but we need your help to make it happen.

We are kindly requesting your assistance in the form of food donations that encompass various aspects of our relief efforts:

1. **Cooked Meals:** Your contribution of cooked meals can provide immediate sustenance to individuals and families who are currently facing hunger. We aim to distribute hot, nutritious meals to those who may not have access to cooking facilities or ingredients.

2. **Packed Food:** Donations of non-perishable, packed food items such as canned goods, rice, pasta, and ready-to-eat snacks are invaluable. These items will be distributed through our community food pantry to ensure that families have access to essential staples.

3. **Essential Supplies:** In addition to food, we also welcome donations of essential supplies such as hygiene products, toiletries, and baby necessities. These items are often overlooked but are crucial for the well-being of families in need.

By contributing to our food donation drive, you directly impact the lives of those who are most vulnerable in our community. Your support will help us provide sustenance, relief, and a renewed sense of hope to individuals and families who are struggling.

To arrange your donation or to receive more information on how you can help, please contact us at [Your Contact Information]. We are more than willing to guide you through the donation process and answer any questions you may have.

Your compassion and commitment to our cause are deeply appreciated. Together, we can make a significant difference in the lives of those who need it most. Thank you for considering our request and for being a beacon of hope in these challenging times.

With heartfelt gratitude,


        </p>
        <div className="ngo">
          <h2>About NGO</h2>
          <div className="user">
          <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" />
          <div className="info">
            <span>HelpNgo</span>
            <button>Contact Me</button>
          </div>
          </div>
          <div className="box">
            <div className="items">
               <div className="item">
                <span className='title'>From</span>
                <span className='desc'>Mumbai</span>
               </div>
               <div className="item">
                <span className='title'>Member since</span>
                <span className='desc'>July 2020</span>
               </div>
               <div className="item">
                <span className='title'>Number Of Donations</span>
                <span className='desc'>100000+</span>
               </div>
               <div className="item">
                <span className='title'>Last Donations </span>
                <span className='desc'>1 Day ago</span>
               </div>
               <div className="item">
                <span className='title'>Category</span>
                <span className='desc'>Food Donation</span>
               </div>
            </div>
            <hr/>
            <p>
            Introducing HelpNgo: Empowering Change, Transforming Lives

At HelpNgo, we believe in the power of collective action to create lasting positive change. Our mission is to uplift communities, champion causes, and pave the way for a brighter future. With a passionate team and a steadfast commitment, we work tirelessly to address pressing issues and make a tangible impact where it matters most. Join us on this journey of compassion, empathy, and transformation as we strive to build a world where every individual's potential can flourish. Together, we can turn dreams into reality and shape a better world for all.
            </p>
          </div>
        </div>
        
        <div className="reviews">
          <h2>Reviews</h2>
          <div className="item">
            <div className="user">
          <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" />
              <div className="info">
                <span>HelpNgo</span>
                <div className="city">
                  <span>Mumbai</span>
                </div>
              </div>
            </div>
            <p>
              Great visiting here
            </p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src='https://cdn-icons-png.flaticon.com/512/126/126473.png' />
              <span>Yes</span>
              <img src='https://cdn-icons-png.flaticon.com/512/126/126504.png' />
              <span>No</span>
            </div>
          </div>
          <hr />
          <div className="item">
            <div className="user">
          <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" />
              <div className="info">
                <span>HelpNgo</span>
                <div className="city">
                  <span>Mumbai</span>
                </div>
              </div>
            </div>
            <p>
              Great visiting here
            </p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src='https://cdn-icons-png.flaticon.com/512/126/126473.png' />
              <span>Yes</span>
              <img src='https://cdn-icons-png.flaticon.com/512/126/126504.png' />
              <span>No</span>
            </div>
          </div>
          <hr />
          <div className="item">
            <div className="user">
          <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" />
              <div className="info">
                <span>HelpNgo</span>
                <div className="city">
                  <span>Mumbai</span>
                </div>
              </div>
            </div>
            <p>
              Great visiting here
            </p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src='https://cdn-icons-png.flaticon.com/512/126/126473.png' />
              <span>Yes</span>
              <img src='https://cdn-icons-png.flaticon.com/512/126/126504.png' />
              <span>No</span>
            </div>
          </div>
          <hr />
        </div>
        </div>
        
        <div className="right">
          <div className="price">
            <h1>Five Full Meals</h1>
            <h1>&#8377;350</h1>
          </div>
          <p>Your generous contribution will make a meaningful difference in the lives of five individuals by providing them with a much-needed one-time meal. In a world where hunger persists as a pressing concern, your support shines as a beacon of hope. Your kindness will not only satisfy their immediate hunger but also remind them that there are caring hearts willing to help in times of need. Your gesture resonates far beyond the meal itself, as it signifies compassion, solidarity, and the belief in a better tomorrow for everyone. Thank you for being a catalyst for positive change and for touching the lives of those who need it most.</p>

          <div className="features">
            <div className="item">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNURjNmQlIdGaPHX7RlR8Pgm_1wm1xcG1UIzExR1M&s' />
              <span>Complete One Time Meal</span>
            </div>
            <div className="item">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNURjNmQlIdGaPHX7RlR8Pgm_1wm1xcG1UIzExR1M&s' />
              <span>Full Healthy One Time Meal</span>
            </div>
            <div className="item">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNURjNmQlIdGaPHX7RlR8Pgm_1wm1xcG1UIzExR1M&s' />
              <span>Home Cooked One Time Meal</span>
            </div>
            <div className="item">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNURjNmQlIdGaPHX7RlR8Pgm_1wm1xcG1UIzExR1M&s' />
              <span>Nutritious One Time Meal</span>
            </div>

          </div>
          <button>Donate Now</button>
        </div>
      </div>
    </div>
  )
}

export default Gig
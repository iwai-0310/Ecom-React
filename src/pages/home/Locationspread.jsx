import React from "react";
import { Link } from "react-router-dom";
const title = "More Then 10,000 Customers";

const desc =
  "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education purpose icon 1",
    text: "Best place to order mapple syrup",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education purpose icon 2",
    text: "My fav site to order clothes from.",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education purpose icon 3",
    text: "I love all the choice here.",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education purpose icon 4",
    text: "Wakanada Forever",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education purpose icon 6",
    text: "Made by love and code",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education purpose icon 7",
    text: "Hope I can swim this ocean",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education purpose icon 8",
    text: "Join with Us",
  },
];

const Locationspread = () => {
  return (
    <div className="clients-section style-2 py-5">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>

        {/* main content */}
        <div className="section-wrapper">
          <div className="clients">
            {clientsList.map((val, i) => (
              <div key={i} className="client-list">
                <Link to="/signup" className="client-content">
                  <span>{val.text}</span>
                </Link>
                <div className="client-thumb">
                  <img src={val.imgUrl} alt={val.imgAlt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locationspread;

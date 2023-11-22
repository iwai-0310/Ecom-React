import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc =
  "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: "12600",
    text: "Marchant Enrolled",
  },
  {
    iconName: "icofont-graduate-alt",
    count: "30",
    text: "Certified Courses",
  },
  {
    iconName: "icofont-notification",
    count: "100",
    text: "Rewards and GitCards",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 style-2 py-12 ">
      <div className="container">
        <div className="section-wrapper">
          <div className="flex flex-col justify-center items-center">
            <div className="flex">
              {countList.map((val, i) => (
                <div key={i} className="count-item flex items-center">
                  <div className="count-inner">
                    {/* icons here */}
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>

                    <div className="count-content ml-2">
                      <h2 className="flex items-center">
                        <span className="count">
                          <CountUp end={val.count} />
                        </span>
                        <span className="ml-1">+</span>
                        <p className="ml-1">{val.text}</p>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-autp md:w-1/2 align-center">
              <div className="instructor-content">
                <span className="subtitle">{subTitle}</span>
                <h2>{title}</h2>
                <p>{desc}</p>
                <Link to="/signup" className="lab-btn">
                  {btnText}
                </Link>
              </div>
            </div>
            <div className="flex-auto md:w-1/2">
              <div className="instructor-thumb">
                <img src="/src/assets/images/instructor/01.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

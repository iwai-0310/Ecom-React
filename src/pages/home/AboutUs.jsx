import React from "react";

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
          <div className="row">
            {countList.map((val, i) => (
              <div key={i} className="count-item">
                <div className="count-inner">
                  <div className="count-icon">
                    <i className={val.iconName}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

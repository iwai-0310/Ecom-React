import React from "react";
import { Link } from "react-router-dom";
const title = "About app";
const desc =
  "Pleased to present a sophisticated educational web application developed using  React and Tailwind CSS. This endeavor represents the culmination of my recent immersion in these frameworks.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  {
    iconName: "icofont-google-map",
    text: "Haryana, India.",
  },
  {
    iconName: "icofont-phone",
    text: "+91 123 456 789",
  },
  {
    iconName: "icofont-envelope",
    text: "chazesingh@gmail.com",
  },
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "#",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
    className: "instagram",
  },
  {
    iconName: "icofont-pinterest",
    siteLink: "#",
    className: "pinterest",
  },
];

const ItemList = [
  {
    text: "All Products",
    link: "/shop",
  },
  {
    text: "Shop",
    link: "/shop",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Policy",
    link: "#",
  },
  {
    text: "FAQs",
    link: "/about",
  },
];

const quickList = [
  {
    text: "Summer Sessions",
    link: "#",
  },
  {
    text: "Events",
    link: "#",
  },
  {
    text: "Gallery",
    link: "#",
  },
  {
    text: "Forums",
    link: "#",
  },
  {
    text: "Privacy Policy",
    link: "#",
  },
  {
    text: "Terms of Use",
    link: "#",
  },
];

const tweetList = [
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Chandresh singh <a href="#">React and Tailwind CSS! 💻✨</a> Combining
        the declarative magic of React with the sleek styling of Tailwind, we're
        turning code into poetry. 📜✨
      </p>
    ),
  },
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Mayank singh <a href="#">Yo checkout this #app</a> I used to get all my
        clothes from myntra but now I use this app for all my fashion choices.
      </p>
    ),
  },
];

const footerbottomList = [
  {
    text: "Faculty",
    link: "#",
  },
  {
    text: "Staff",
    link: "#",
  },
  {
    text: "Students",
    link: "#",
  },
  {
    text: "Alumni",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="style-2">
      {/* footer top */}
      <div className="footer-top dark-view py-8 flex justify-center">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 justify-center">
            {/* about section */}
            <div className="col-span-1">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{title}</h4>
                    </div>
                    <div className="content">
                      <p>{desc}</p>
                      <ul className="lab-ul office-address">
                        {addressList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}> {val.text}</i>
                          </li>
                        ))}
                      </ul>
                      <ul className="lab-ul social-icons">
                        {socialList.map((val, i) => (
                          <li key={i}>
                            <a href="#" className={val.className}>
                              <i className={val.iconName}>{val.text}</i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Categories */}
            <div className="col-span-1">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{ItemTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {ItemList.map((val, i) => (
                          <li key={i}>
                            <a href="#">{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick Links */}
            <div className="col-span-1">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{quickTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {quickList.map((val, i) => (
                          <li key={i}>
                            <a href="#">{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Tweets*/}
            <div className="col-span-1">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{tweetTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {tweetList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}></i>
                            {val.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="footer-bottom flex justify-center">
        <div className="container">
          <div className="section-wrapper">
            <p>
              &copy; 2023 <Link to="/">React/Tailwind ecom</Link> Designed By{" "}
              <a href="/" target="_blank">
                Chaze
              </a>
            </p>
            <div className="footer-bottom-list">
              {footerbottomList.map((val, i) => (
                <a href="#" key={i}>
                  {val.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

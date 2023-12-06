import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import SpecialPageHeader from "../components/SpecialPageHeader";

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Expriences";
const desc =
  "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

const year = "30+";
const experience = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: "/src/assets/images/about/icon/01.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: "/src/assets/images/about/icon/02.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: "/src/assets/images/about/icon/03.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
];

const About = () => {
  return (
    <div>
      {/* <PageHeader title={"About Our Brand"} curPage={"About"} /> */}
      <SpecialPageHeader title={"About Our Brand"} curPage={"About"} />
      <div className="about-section style-3 py-4 section-bg flex justify-center">
        <div className="container">
          <div className="grid justify-center lg:grid-cols-2 grid-cols-1 items-center">
            {/* img here */}
            <div className="col-span-1">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="/src/assets/images/about/01.jpg" alt="" />
                </div>
                {/* <div className="abs-thumb ">
                  <img src="/src/assets/images/about/02.jpg" alt="" />
                </div> */}
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{experience}</p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              {/* title and subtitle here */}
              <div className="about-right ml-12">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                </div>

                <div className="section-wrapper">
                  <ul className="lab-ul">
                    {aboutList.map((val, i) => (
                      <li key={i}>
                        <div className="sr-left">
                          <img src={val.imgUrl} alt="" />
                        </div>
                        <div className="sr-right">
                          <h5>{val.title}</h5>
                          <p>{val.desc}</p>
                        </div>
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
  );
};

export default About;

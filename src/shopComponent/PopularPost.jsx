import React from "react";
import { Link } from "react-router-dom";

const title = "Most popular posts";
const postList = [
  {
    id: 1,
    imgUrl: "../assets/images/blog/10.jpg",
    imgAlt: "rajibraj91",
    title: "Integrating Java Web Sockets with Spring Framework",
    date: "Oct 11, 2023",
  },
  {
    id: 2,
    imgUrl: "../assets/images/blog/11.jpg",
    imgAlt: "rajibraj91",
    title:
      "As a Front-End Engineer, 4 React Traps And TipsYou Should Know About",
    date: "Dec 03, 2023",
  },
  {
    id: 3,
    imgUrl: "../assets/images/blog/12.jpg",
    imgAlt: "rajibraj91",
    title:
      "How to Get a React Component’s Height or Width Before Render its Content?",
    date: "Apr 08, 2023",
  },
  {
    id: 4,
    imgUrl: "../assets/images/blog/09.jpg",
    imgAlt: "rajibraj91",
    title: "How to dynamically build tailwind class names",
    date: "Jun 05, 2023",
  },
];

const PopularPost = () => {
  return (
    <div className="widget widget-post">
      <div className="widget-header">
        <h5 className="title">{title}</h5>
      </div>
      <ul className="widget-wrapper">
        {postList.map((blog, i) => (
          <li key={i} className="flex flex-wrap justify-between">
            {/* post images */}
            <div className="post-thumb">
              <Link to={`/blog`}>
                <img src={blog.imgUrl} alt="" />
              </Link>
            </div>
            {/* post data */}
            <div className="post-content">
              <Link to={`/blog`}>
                <h5 className="italic tracking-wide font-mono">{blog.title}</h5>
              </Link>
              <p>{blog.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPost;

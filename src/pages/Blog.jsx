import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import NewPageHeader from "../components/NewPageHeader";
import blogList from "../utilis/blogdata";
import { Badge, Button, IconButton } from "@material-tailwind/react";
const Blog = () => {
  return (
    <div className="">
      {/* <PageHeader title="Blog page" curPage="Blogs" /> */}
      <NewPageHeader title="Blog page" curPage="Blogs" />
      <div className="blog-section py-3 section-bg w-screen flex justify-center bg-gray-400">
        <div className="container ">
          <div className="section-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
              {blogList.map((data, i) => (
                <div key={i} className="col-span-1">
                  {/* <div className="post-item">
                    <div className="post-inner bg-gray-900">
                      <div className="post-thumb">
                        <Link to={`/blog/${data.id}`}>
                          <img src={data.imgUrl} alt="" />
                        </Link>
                      </div>

                      <div className="post-content">
                        <Link to={`/blog/${data.id}`}>
                          <h4>{data.title}</h4>
                        </Link>
                        <div className="meta-post">
                          <ul className="lab-ul">
                            {data.metaList.map((val, i) => (
                              <li key={i}>
                                <i className={val.iconName}></i>
                                {val.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p>{data.desc}</p>
                      </div>

                      <div className="post-footer">
                        <div className="pf-left">
                          <Link
                            to={`/blog/${data.id}`}
                            className="lab-btn-text"
                          >
                            {data.btnText}{" "}
                            <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                        <div className="pf-right">
                          <i className="icofont-comment">
                            <span className="comment-count">
                              {data.commentCount}
                            </span>
                          </i>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="blog w-11/12 h-auto bg-gray-200  hover:bg-gray-900 my-12 mx-6 py-4 px-2 hover:rounded-2xl group transition duration-500">
                    <div className="border-2 h-auto w-11/12 border-blue-gray-700 overflow-hidden rounded-lg group-hover:border-orange-700 m-4 group-hover:border-4 ">
                      <Link to={`/blog/${data.id}`}>
                        <img
                          className="group-hover:scale-110"
                          src={data.imgUrl}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="post-content mx-4 my-2">
                      <Link to={`/blog/${data.id}`}>
                        <h4 className="text-gray-900 group-hover:text-orange-700 ">
                          {data.title}
                        </h4>
                      </Link>
                      <div className="meta-post">
                        <ul className="lab-ul">
                          {data.metaList.map((val, i) => (
                            <li key={i} className="my-2">
                              <i className={`${val.iconName} mr-2`}></i>
                              {val.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-black group-hover:text-white group-hover:italic">
                        {data.desc}
                      </p>
                    </div>
                    <div className="post-footer flex justify-between mx-2 my-2 px-2 items-center">
                      <div className="pf-left">
                        <Link to={`/blog/${data.id}`} className="lab-btn-text">
                          {data.btnText}{" "}
                          <i className="icofont-external-link"></i>
                        </Link>
                      </div>
                      <div className="pf-right">
                        {/* <i className="icofont-comment">
                          <span className="comment-count">
                            {data.commentCount}
                          </span>
                        </i> */}
                        <Badge content={data.commentCount} color="orange-700">
                          <IconButton className="group-hover:bg-gray-200">
                            <i className="icofont-comment group-hover:text-black" />
                          </IconButton>
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

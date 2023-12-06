import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import NewPageHeader from "../components/NewPageHeader";
import blogList from "../utilis/blogdata";
const Blog = () => {
  return (
    <div className="">
      {/* <PageHeader title="Blog page" curPage="Blogs" /> */}
      <NewPageHeader title="Blog page" curPage="Blogs" />
      <div className="blog-section py-3 section-bg w-screen flex justify-center">
        <div className="container ">
          <div className="section-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
              {blogList.map((data, i) => (
                <div key={i} className="col-span-1">
                  <div className="post-item">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <Link to={`/blog/${data.id}`}>
                          <img src={data.imgUrl} alt="" />
                        </Link>
                      </div>
                      {/* post-content starts */}
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
                      {/* post-content ends */}
                      {/* post footer starts */}
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
                      {/* post footer ends */}
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

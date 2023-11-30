import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import blogList from "../utilis/blogdata";
const Blog = () => {
  return (
    <div className="">
      <PageHeader title="Blog page" curPage="Blogs" />
      <div className="blog-section py-3 section-bg">
        <div className="container">
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

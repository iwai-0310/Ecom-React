import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const BlogView = () => {
  const [blog, setBlog] = useState(blogList);
  //get the id from url
  const { id } = useParams();
  // console.log(id);
  //access the blog data using the id
  const result = blog.filter((b) => b.id === Number(id));
  return (
    <div>
      <PageHeader title={"Single Blog Page"} curPage={"Blog/Blog Details"} />
      <div className="blog-section blog-single py-4 section-bg">
        <div className="container">
          <div className="flex justify-center">
            {/* Left side starts */}
            <div className="lg:w-8/12 w-12">
              <article>
                <div className="section-wrapper">
                  <div className="grid grid-cols-1 justify-center gap-4 ">
                    <div className="col-span-1">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img src={item.imgUrl} alt="" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/* Left side ends */}
            {/* Right side starts */}
            <div className="lg:w-4/12 w-12">right</div>
            {/* Right Side ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;

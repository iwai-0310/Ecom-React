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
            <div className="lg:w-8/12 w-12">left</div>
            <div className="lg:w-4/12 w-12">right</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;

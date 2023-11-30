import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";

const BlogView = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  console.log(id);
  return <div>BlogView</div>;
};

export default BlogView;

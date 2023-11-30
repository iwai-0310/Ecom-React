import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];

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
                              {/* post thumb starts */}
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              {/* post thumb ends */}
                              {/* post content starts */}
                              <div className="post-content">
                                <h4>{item.title}</h4>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Voluptate enim animi quo,
                                  sit consectetur tenetur repudiandae eaque
                                  neque illo earum error deserunt officia id
                                  sint alias, asperiores eum molestias. Ducimus.
                                  In assumenda quaerat exercitationem, ab itaque
                                  debitis explicabo ipsa inventore quod facilis
                                  quas nisi tempore culpa velit voluptas
                                  consectetur laboriosam necessitatibus fuga
                                  eveniet! Molestias, suscipit! Sit dolor ipsum
                                  harum. Nostrum. Soluta, iusto dolorum!
                                  Veritatis minus delectus explicabo, autem
                                  commodi doloribus quidem tenetur eaque quo
                                  voluptatem impedit mollitia iusto architecto
                                  sit cupiditate unde reprehenderit, libero ipsa
                                  non placeat id dignissimos? Sed.
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Blanditiis nemo laudantium
                                    officia vero?
                                  </p>
                                  <cite>
                                    <a href="#">...Mellisa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Molestiae tenetur placeat
                                  accusamus, enim id atque necessitatibus soluta
                                  pariatur, explicabo voluptatum, laboriosam
                                  impedit nemo tempore. Qui vel atque voluptate
                                  natus consequatur. Odit eum reprehenderit at
                                  nisi consequuntur itaque quaerat error ea
                                  minus officia quas accusamus dolorum
                                  asperiores dolor, sunt nulla iusto ab totam
                                  unde. At officia ducimus voluptate, pariatur
                                  delectus odio. Temporibus tenetur placeat
                                  distinctio, aut blanditiis, optio quod
                                  molestias in dolores nobis porro saepe,
                                  suscipit aspernatur debitis incidunt magnam
                                  iste. Vero pariatur laudantium nesciunt aut
                                  sapiente voluptatibus voluptas ipsa.
                                  Voluptates.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Quasi laboriosam voluptates
                                  cupiditate quaerat, autem modi quidem, amet
                                  sapiente pariatur nisi rem voluptatum hic cum
                                  quas illo architecto dolorem repudiandae
                                  placeat. Accusamus tempore fugiat quam
                                  repellendus quasi non repellat voluptate
                                  eligendi aliquid iure veniam voluptates
                                  quisquam placeat dolorem esse nesciunt ea
                                  consequuntur enim, deleniti quos autem,
                                  pariatur suscipit veritatis perspiciatis?
                                  Tenetur.
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/wnxO4AT2N4o?si=GdpN5DP3026hfuiw"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Labore distinctio quidem
                                  unde facilis molestias magnam, quisquam
                                  numquam libero ratione beatae expedita
                                  cupiditate vel consectetur error explicabo
                                  voluptatibus nesciunt itaque quaerat?
                                </p>
                                <div className="tags-section ">
                                  <ul className="tags lab-ul ">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Bussiness</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* post content ends */}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* navigation starts here */}
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left">Previous Blog</i>
                        </a>
                        <a href="#" className="title">
                          title to prev one
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="prev">
                          <span className="font-light">Next Blog</span>
                          <i className="icofont-double-right"></i>
                        </a>
                        <a href="#" className="title">
                          title to next one
                        </a>
                      </div>
                    </div>
                    {/* navigation ends here */}
                  </div>
                </div>
              </article>
            </div>
            {/* Left side ends */}
            {/* Right side starts */}
            <div className="lg:w-4/12 w-12">
              <aside className="pl-4">
                <Tags />
                <PopularPost />
              </aside>
            </div>
            {/* Right Side ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;

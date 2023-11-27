import React, { useState } from "react";
import Rating from "../components/Rating";

const reviewtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      {/* Desc and review buttons */}
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Reviews 4
        </li>
      </ul>
      {/* Desc and review contents */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* add review fields for entry here */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviewtitle}</h5>
              </div>
              {/* add the review form here */}
            </div>
          </div>
        </div>
        {/* description content */}
        <form action="action">
          <div className="flex">
            <div className="md:w-4/12 w-full mx-2">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full name *"
              />
            </div>
            <div className="md:w-4/12 w-full mx-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email *"
              />
            </div>
            <div className="md:w-4/12 w-full mx-2">
              <div className="rating">
                <span>Your ratings</span>
                <Rating />
              </div>
            </div>
          </div>
          <div className="md:w-11/12 w-full my-2 mx-2">
            <textarea
              name="message"
              id="message"
              cols=""
              rows="8"
              placeholder="Type Review Here ..."
            ></textarea>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="default-button bg-orange-500 text-gray-900 font-bold"
            >
              <span>Submit Review</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Review;

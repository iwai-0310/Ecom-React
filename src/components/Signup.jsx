import React, { useState } from "react";
import { Link } from "react-router-dom";
const title = "Sign up";
const socialTitle = "Sign up as new user";
const buttonTxt = "Sign me up";
const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "#",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
    className: "instagram",
  },
  {
    iconName: "icofont-pinterest",
    siteLink: "#",
    className: "pinterest",
  },
];

const Signup = () => {
  const [error, setError] = useState("");
  const handleRegister = () => {};
  const handleSignup = (e) => {};
  return (
    <div>
      <div className="login-section py-4 section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSignup}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="User name *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password here ..."
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Confirm Password ..."
                  required
                />
              </div>
              {/* showing messages here */}
              <div>
                {error && (
                  <div className="error-message text-red-500">{error}</div>
                )}
              </div>
              <div className="form-group">
                <div
                  className="flex justify-between flex-wrap
                "
                >
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <Link to="/forpass">Forgot Password ?</Link>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className=" lab-btn">
                  <span>{buttonTxt}</span>
                </button>
              </div>
            </form>

            {/* account bottom */}
            <div className="account-bottom">
              <span className="cate pt-10">
                Don't have an Account ? <Link to="/sign-up">Sign up</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>

              {/* social login here */}
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-center">
                {socialList.map((val, i) => (
                  <li key={i}>
                    <a href="/" className={val.className}>
                      <i className={val.iconName}></i>
                    </a>
                  </li>
                ))}
                <li>
                  <button className="github" onClick={handleRegister}>
                    <i className="icofont-github"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

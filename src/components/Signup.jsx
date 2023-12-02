import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
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
  const { signupWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const handleRegister = () => {
    signupWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setError("Please provided valid email & password");
      });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      setError("Password doesnot match ! Please provide correct password");
    } else {
      setError("");
      createUser(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          alert("Account created successfully!");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          alert(`${error.message}`);
        });
    }
  };
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
                  name="confirmPassword"
                  id="confirmPassword"
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
                <button type="submit" className=" lab-btn">
                  <span>{buttonTxt}</span>
                </button>
              </div>
            </form>

            {/* account bottom */}
            <div className="account-bottom">
              <span className="cate pt-10">
                Already have an Account ? <Link to="/login">Log in</Link>
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

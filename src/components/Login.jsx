import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const title = "login";
const socialTitle = "Login with Social Media";
const buttonTxt = "Login Now";
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

const Login = () => {
  const [error, setError] = useState("");

  const { signupWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email);
    // console.log(password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setError("Please provided valid email & password");
      });
  };
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

  const from = location.state?.from?.pathname || "/";
  return (
    <div>
      <div className="login-section py-16 ">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="text-2xl uppercase font-medium mb-2">{title}</h3>
            <p class="text-gray-600 mb-6 text-sm mb-4">
              Welcome! So good to have you back!
            </p>
            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label
                  htmlFor="email"
                  className="text-gray-600 mb-2 block text-left"
                >
                  Email Address
                </label>

                <input
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="youremail.@domain.com"
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="password"
                  className="text-gray-600 mb-2 block text-left"
                >
                  Password
                </label>

                <input
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="***********"
                  required
                />
              </div>

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
                <button
                  type="submit"
                  className=" bg-gray-900 text-orange-700 hover:bg-orange-700  hover:text-gray-900 hover:font-bold"
                >
                  <span>{buttonTxt}</span>
                </button>
              </div>
            </form>

            <div className="account-bottom">
              <span className="cate pt-10">
                Don't have an Account ? <Link to="/sign-up">Sign up</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>

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
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(517.3237790751541 218.86873479747794)">
          <path
            d="M98 -146.5C126.8 -134 149.8 -106.5 156.4 -76.1C163.1 -45.7 153.3 -12.6 136.3 10.8C119.3 34.2 95.1 47.8 84.4 89.6C73.8 131.4 76.8 201.5 47.4 251.2C17.9 301 -43.9 330.4 -86.6 310.7C-129.4 291 -153.1 222.1 -195.4 170.7C-237.7 119.4 -298.5 85.5 -292.8 49.1C-287.1 12.7 -215 -26.3 -163.7 -48.2C-112.3 -70.1 -81.8 -75 -58 -89.8C-34.2 -104.6 -17.1 -129.3 8.7 -142.9C34.6 -156.5 69.2 -159 98 -146.5"
            fill="#de6400"
          ></path>
        </g>

        <g transform="translate(509.2833844550808 279.37802828928227)">
          <path
            d="M132.5 -183.1C167.7 -183.6 189.3 -140 185.8 -99.1C182.3 -58.3 153.5 -20.2 156.2 28.7C159 77.7 193.2 137.4 183.9 173.3C174.5 209.1 121.5 221.1 73.1 223.8C24.8 226.4 -18.9 219.7 -57.9 204.8C-96.9 189.8 -131.2 166.6 -167.8 137.9C-204.4 109.1 -243.2 74.8 -272.5 25C-301.8 -24.9 -321.4 -90.3 -284.8 -113.2C-248.1 -136.1 -155.2 -116.4 -98.3 -106.1C-41.4 -95.7 -20.7 -94.8 14 -116.5C48.7 -138.2 97.3 -182.7 132.5 -183.1"
            fill="#de6400"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Login;

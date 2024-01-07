import React, { useContext, useState, useEffect } from "react";
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
  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      {
        path: "#blob1",
      },
      {
        path: "#blob2",
      },

      {
        repeat: 999,
        duration: 2000,
        yoyo: true,
      }
    );
    tween.start();
  });

  const from = location.state?.from?.pathname || "/";
  return (
    <div className="flex justify-around">
      <div className="w-2/3">
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
      </div>
      <div className=":w-1/3">
        <svg
          id="visual"
          viewBox="0 0 540 960"
          width="540"
          height="960"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="0" width="540" height="960" fill="#FFFFFF"></rect>
          <g transform="translate(262.1862564167242 498.8539935002064)">
            <path
              id="blob1"
              d="M79.9 -134.6C95.9 -98.3 96 -64.8 101.9 -35.7C107.8 -6.6 119.5 18 130 59.6C140.4 101.2 149.5 159.8 127.7 164C105.8 168.1 52.9 117.8 9.5 104.7C-33.9 91.7 -67.8 115.8 -91.3 112.2C-114.7 108.6 -127.7 77.1 -125.1 49.2C-122.4 21.2 -104 -3.3 -89.6 -23.5C-75.3 -43.6 -65 -59.4 -50.7 -96.3C-36.4 -133.2 -18.2 -191.1 6.9 -200.5C31.9 -210 63.9 -170.9 79.9 -134.6"
              fill="#ff5b00"
            ></path>
          </g>
          <g
            transform="translate(240.16601744888274 427.3315042842392)"
            className="invisible"
          >
            <path
              id="blob2"
              d="M73.3 -79.3C113.8 -71.6 178.1 -75.2 189.2 -57.6C200.4 -40 158.2 -1.1 124.4 21.1C90.6 43.3 65.1 49 45.8 87.7C26.5 126.4 13.2 198.2 -8.4 209.7C-30 221.3 -60 172.5 -77.5 133.2C-95.1 94 -100.4 64.1 -111 35.2C-121.7 6.2 -137.9 -21.9 -128.6 -39.1C-119.4 -56.3 -84.7 -62.5 -59 -75C-33.3 -87.5 -16.7 -106.3 -0.1 -106.1C16.5 -106 32.9 -87 73.3 -79.3"
              fill="#ff5b00"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Login;

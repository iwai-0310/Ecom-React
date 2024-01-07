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
    <div className="">
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
  );
};

export default Login;

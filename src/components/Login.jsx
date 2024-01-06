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
        path: "#blob3",
      },
      {
        path: "#blob4",
      },
      {
        path: "#blob5",
      },
      {
        repeat: 999,
        duration: 5000,
        yoyo: true,
      }
    );
    tween.start();
  });

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
      {/* <svg
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
            id="blob1"
            d="M98 -146.5C126.8 -134 149.8 -106.5 156.4 -76.1C163.1 -45.7 153.3 -12.6 136.3 10.8C119.3 34.2 95.1 47.8 84.4 89.6C73.8 131.4 76.8 201.5 47.4 251.2C17.9 301 -43.9 330.4 -86.6 310.7C-129.4 291 -153.1 222.1 -195.4 170.7C-237.7 119.4 -298.5 85.5 -292.8 49.1C-287.1 12.7 -215 -26.3 -163.7 -48.2C-112.3 -70.1 -81.8 -75 -58 -89.8C-34.2 -104.6 -17.1 -129.3 8.7 -142.9C34.6 -156.5 69.2 -159 98 -146.5"
            fill="#de6400"
          ></path>
        </g>

        <g
          transform="translate(509.2833844550808 279.37802828928227)"
          className="invisible"
        >
          <path
            id="blob2"
            d="M132.5 -183.1C167.7 -183.6 189.3 -140 185.8 -99.1C182.3 -58.3 153.5 -20.2 156.2 28.7C159 77.7 193.2 137.4 183.9 173.3C174.5 209.1 121.5 221.1 73.1 223.8C24.8 226.4 -18.9 219.7 -57.9 204.8C-96.9 189.8 -131.2 166.6 -167.8 137.9C-204.4 109.1 -243.2 74.8 -272.5 25C-301.8 -24.9 -321.4 -90.3 -284.8 -113.2C-248.1 -136.1 -155.2 -116.4 -98.3 -106.1C-41.4 -95.7 -20.7 -94.8 14 -116.5C48.7 -138.2 97.3 -182.7 132.5 -183.1"
            fill="#de6400"
          ></path>
        </g>
      </svg> */}
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <rect x="0" y="0" width="900" height="600" fill="#FFFFFF"></rect>
        <g transform="translate(480.12066362887975 318.7857375378606)">
          <path
            id="blob1"
            d="M116.3 -139.5C135.4 -122.6 124.8 -71.4 141.8 -18.6C158.7 34.2 203.2 88.6 188.4 103.7C173.7 118.8 99.7 94.7 51.9 88.5C4.2 82.4 -17.2 94.3 -56 102.5C-94.8 110.6 -150.9 115.1 -193.7 88.7C-236.5 62.3 -266 5.1 -244.3 -30.1C-222.7 -65.4 -149.9 -78.6 -100.7 -90.1C-51.4 -101.6 -25.7 -111.3 11.5 -125C48.6 -138.6 97.3 -156.3 116.3 -139.5"
            fill="none"
            stroke="#ef7e21"
            stroke-width="6"
          ></path>
        </g>
        <g
          transform="translate(474.02593136016907 309.8021497887421)"
          className="invisible"
        >
          <path
            id="blob2"
            d="M159.2 -204.2C190.2 -163.6 188.2 -98.2 174.3 -49.6C160.5 -0.9 134.8 31.1 119.2 79C103.6 126.9 98.2 190.8 67.4 214.9C36.6 239 -19.5 223.3 -58.9 194.7C-98.3 166.1 -121 124.6 -157.7 81.3C-194.3 38 -244.9 -7.1 -229 -30.5C-213 -53.9 -130.6 -55.7 -81.4 -93C-32.1 -130.3 -16.1 -203.2 24 -231.8C64.1 -260.3 128.1 -244.7 159.2 -204.2"
            fill="none"
            stroke="#ef7e21"
            stroke-width="6"
          ></path>
        </g>
        <g
          transform="translate(436.34303725210185 308.08608716794566)"
          className="invisible"
        >
          <path
            id="blob3"
            d="M69.7 -88.7C85 -70.2 88.3 -43.2 118 -2C147.7 39.2 203.7 94.6 192.7 109.1C181.8 123.5 103.7 97 50.8 98.3C-2 99.6 -29.8 128.7 -50.1 126.2C-70.3 123.7 -83.2 89.6 -105.3 57.7C-127.4 25.8 -158.8 -3.8 -165.4 -40.2C-172.1 -76.5 -154.2 -119.4 -122.5 -135C-90.8 -150.6 -45.4 -138.8 -9.1 -127.9C27.2 -117.1 54.4 -107.2 69.7 -88.7"
            fill="none"
            stroke="#ef7e21"
            stroke-width="6"
          ></path>
        </g>
        <g
          transform="translate(490.2754706178427 291.71093127941685)"
          className="invisible"
        >
          <path
            id="blob4"
            d="M89.4 -106.9C101.8 -96.3 87.8 -54.6 103.6 -11.4C119.4 31.8 164.9 76.7 166.5 116.9C168 157.1 125.6 192.7 83.6 191.4C41.6 190.1 0.1 151.9 -31.6 124.2C-63.4 96.5 -85.4 79.2 -126.9 51.7C-168.4 24.3 -229.5 -13.5 -243.7 -62.1C-258 -110.8 -225.4 -170.3 -177 -174.6C-128.6 -178.9 -64.3 -127.9 -12.9 -112.6C38.6 -97.3 77.1 -117.6 89.4 -106.9"
            fill="none"
            stroke="#ef7e21"
            stroke-width="6"
          ></path>
        </g>
        <g
          transform="translate(451.47440027496987 271.1057884680723)"
          className="invisible"
        >
          <path
            id="blob5"
            d="M69.6 -64.6C102.7 -55.1 150.8 -45.1 161.2 -23C171.6 -0.9 144.3 33.3 115.4 50.9C86.5 68.5 56.1 69.5 19.5 105.2C-17.1 141 -59.9 211.4 -87.5 213.2C-115.2 214.9 -127.7 148 -138.9 96C-150 44 -159.7 7.1 -164.3 -39.7C-168.8 -86.6 -168.3 -143.2 -140.1 -153.6C-111.8 -164 -55.9 -128 -18.9 -105.5C18.2 -83 36.4 -74.1 69.6 -64.6"
            fill="none"
            stroke="#ef7e21"
            stroke-width="6"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Login;

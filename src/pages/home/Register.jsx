import React from "react";

const subTitle = "Save Your Day";
const Title = (
  <h2>
    Join us on our day Long Free Workshop for <b>Advance </b>{" "}
    <span>Mastering </span> on Sales
  </h2>
);

const desc = "Limited Time Offer! Hurry up";
const Register = () => {
  return (
    // <div>
    //   <section className="register-section py-8 pb-0">
    //     <div className="container">
    //       <div className="grid gap-4 lg:grid-cols-2 grid-cols-1 items-center">
    //         <div className="col">
    //           <div className="section-header">
    //             <span className="subtitle">{subTitle}</span>
    //             {Title}
    //             <p>{desc}</p>
    //           </div>
    //         </div>

    //         <div>
    //           <div className="section-wrapper">
    //             <h4>Register Now</h4>
    //             <form className="register-form">
    //               <input
    //                 type="text"
    //                 name="name"
    //                 placeholder="Username"
    //                 className="reg-input"
    //               />
    //               <input
    //                 type="email"
    //                 name="email"
    //                 placeholder="Email"
    //                 className="reg-input"
    //               />
    //               <input
    //                 type="text"
    //                 name="numer"
    //                 pattern="[0-9]*"
    //                 inputmode="numberic"
    //                 placeholder="Phone no."
    //                 className="reg-input"
    //               />
    //               <button type="submit" className="lab-btn">
    //                 Register
    //               </button>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div>
      <section className="bg-gradient-to-b from-gray-700 via-gray-400 to-white w-screen h-screen">
        <div className="Registration-section">
          <div className="grid gap-4 lg:grid-cols-2 grid-cols-1 items-center">
            <div className="col-span-1">
              <div className="Register-header">
                <span className="Register-header-subtitle">{subTitle}</span>
                {Title}
                <p>{desc}</p>
              </div>
            </div>

            <div>
              <div className="Register-wrapper">
                <h4>Register Now</h4>
                <form className="Register-wrapper-form">
                  <input
                    type="text"
                    name="name"
                    placeholder="Username"
                    className=""
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className=""
                  />
                  <input
                    type="text"
                    name="numer"
                    pattern="[0-9]*"
                    inputmode="numberic"
                    placeholder="Phone no."
                    className=""
                  />
                  <button type="submit" className="">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

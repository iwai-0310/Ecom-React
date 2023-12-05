import React from "react";

const subTitle = "Save Your Day";
const Title = (
  <h2 className="text-5xl font-normal italic my-8">
    Join us on our day Long Free Workshop for
    <span className="font-bold not-italic"> Advance Mastering </span> on Sales
  </h2>
);

// const desc = "Limited Time Offer! Hurry up";
const desc = (
  <h4 className="font-semibold ">
    Limited Time Offer ! <span className="text-orange-700">Hurry up</span>
  </h4>
);
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
      <section className="bg-gradient-to-b from-gray-700 via-gray-400 to-white w-screen h-auto mb-24">
        <div className="Registration-section flex items-center justify-between ">
          <div className="col-span-1 w-7/8 h-auto  m-5">
            <div className="Register-header">
              <span className="Register-header-subtitle font-semibold text-3xl text-orange-700 mt-32">
                {subTitle}
              </span>
              {Title}
              <p>{desc}</p>
            </div>
          </div>

          <div>
            <div className="Register-wrapper w-4/6 h-auto  m-4   ">
              <h4 className="tracking-widest text-orange-700">Register Now</h4>
              <form className="Register-wrapper-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className=" border-white rounded border-2 my-2 "
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className=" border-white rounded border-2 my-2 auto"
                />
                <input
                  type="text"
                  name="number"
                  pattern="[0-9]*"
                  inputmode="numberic"
                  placeholder="Phone no."
                  className=" border-white rounded border-2 my-2 auto"
                />
                <div className="form-register-button flex justify-center items-center">
                  <button
                    type="submit"
                    className="bg-gray-900 text-white rounded-lg hover:bg-orange-700 hover:text-black transition duration-300"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

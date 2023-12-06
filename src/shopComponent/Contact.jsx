import React from "react";
import PageHeader from "../components/PageHeader";
import GoogleMaps from "../components/GoogleMaps";

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
  "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
  {
    imgUrl: "/src/assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: "/src/assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632,02 982 745",
  },
  {
    imgUrl: "/src/assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "admin@shopcart.com",
  },
  {
    imgUrl: "/src/assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
  },
];

const Contact = () => {
  return (
    <div>
      <PageHeader title={"Get in touch with us"} curPage={"Contact Us"} />
      <div className="map-address-section py-3 section-bg flex justify-center">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>

          <div className="section-wrapper">
            <div className="flex flex-row-reverse">
              <div className="col-span-12 lg:col-span-5 xl:col-span-4">
                <div className="contact-wrapper">
                  {contactList.map((val, i) => (
                    <div key={i} className="contact-item">
                      <div className="contact-thumb">
                        <img src={val.imgUrl} alt="" />
                      </div>
                      <div className="contact-content">
                        <h6 className="title">{val.title}</h6>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* intergration google map */}
              {/* map starts here */}
              <div className="xl:col-span-8 lg:col-span-7 col-12">
                <GoogleMaps />
              </div>
              {/* map ends here */}
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section py-4 mb-12 flex justify-center">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{conSubTitle}</span>
            <h2 className="title">{conTitle}</h2>
          </div>
          <div className="section-wrapper">
            <form className="contact-form mb-12">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name *"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Contact Number "
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="sub"
                  id="sub"
                  placeholder="Subject *"
                />
              </div>
              <div className=" w-full">
                <textarea
                  name="message"
                  id="message"
                  rows="10"
                  className="w-full block resize-y"
                  placeholder="Your Message ..."
                ></textarea>
              </div>
              <div className="form-group w-full text-center">
                <button className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

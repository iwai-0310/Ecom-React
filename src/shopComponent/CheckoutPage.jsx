import React from "react";

const CheckoutPage = () => {
  // state to show the pop up
  const [show, setShow] = useState(false);
  //state to show different banking options
  const [activeTab, setActiveTab] = useState("visa");

  //handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  return <div>CheckoutPage</div>;
};

export default CheckoutPage;

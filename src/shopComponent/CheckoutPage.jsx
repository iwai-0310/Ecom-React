import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

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

  return (
    <div>
      <Button onClick={handleShow} variant="gradient">
        Proceed to Checkout
      </Button>
      ;
      <Dialog open={show} handler={handleShow}>
        <DialogHeader>
          <h5>Select your payment option</h5>
          <br className="text-gray-900" />
        </DialogHeader>
        <DialogBody>
          <div className="mt-3 ">
            {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  href="#visa"
                  className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                  id="visa-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="visa"
                  aria-selected={activeTab === "visa"}
                  onClick={() => {
                    handleTabChange("visa");
                  }}
                >
                  <img
                    src="https://i.imgur.com/sB4jftM.png"
                    alt=""
                    width="80"
                  />
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#paypal"
                  className={`nav-link ${
                    activeTab === "paypal" ? "active" : ""
                  }`}
                  id="paypal-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="paypal"
                  aria-selected={activeTab === "paypal"}
                  onClick={() => {
                    handleTabChange("paypal");
                  }}
                >
                  <img
                    src="https://i.imgur.com/yK7EDD1.png"
                    alt=""
                    width="80"
                  />
                </a>
              </li>
            </ul> */}

            {/* let try some material-tailwind tabs */}
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-gray-900 shadow-none rounder-none",
                }}
              >
                <Tab
                  onClick={() => setActiveTab("visa")}
                  value="visa"
                  key="visa"
                  className={
                    activeTab === "visa" ? "text-gray-100 bg-orange-700 " : ""
                  }
                >
                  Card
                </Tab>
              </TabsHeader>
              <TabsBody>
                <TabPanel key="visa" value="visa">
                  <h1>lets see master card payments here</h1>
                </TabPanel>
              </TabsBody>

              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-2"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-gray-900 shadow-none rounder-none",
                }}
              >
                <Tab
                  onClick={() => setActiveTab("online banking")}
                  value="online banking"
                  key="online banking"
                  className={
                    activeTab === "online banking"
                      ? "text-gray-100 bg-orange-700"
                      : ""
                  }
                >
                  Online Banking
                </Tab>
              </TabsHeader>
              <TabsBody>
                <TabPanel key="online banking" value="online banking">
                  <h1>lets see online payments here</h1>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleHide}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick="">
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default CheckoutPage;

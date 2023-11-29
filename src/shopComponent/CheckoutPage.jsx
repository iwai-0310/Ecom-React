import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
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
            <ul className="nav" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a href="#visa">
                  <img
                    src="https://i.imgur.com/sB4jftM.png"
                    alt=""
                    width="80"
                  />
                </a>
              </li>
            </ul>
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

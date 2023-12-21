import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import NewPageHeader from "../components/NewPageHeader";
const APIurl = "http://localhost:3000/api/v1/products/";
const addNewItem = () => {
  //create a useState to store default value of some properties
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    seller: "",
    price: 0,
    stock: 0,
    imageUrl: [],
  });

  //submit opertaion
  const handleSubmit = async () => {
    try {
      const response = await fetch(APIurl, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Product created successfully");
      } else {
        console.log("Error creating product:", response.statusText);
      }
    } catch (error) {
      console.log("Error creating product:", error.message);
    }
  };

  return (
    <div className="bg-gray-100">
      <NewPageHeader title="Insert item page" curPage="Shop" />
      <Card color="transparent" shadow={false}>
        <div className="moveTitleToMiddle flex justify-center items-center h-full">
          <div className="centerContent text-center mt-6">
            <Typography variant="h4" color="blue-gray">
              New product
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter the details of the item you want to add to our app!
            </Typography>
          </div>
        </div>
        <div className="formInMiddle flex justify-center items-center h-full">
          <form className="mt-8 mb-2 w-5/6 h-full">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Name
              </Typography>
              <Input
                size="lg"
                placeholder="Enter the Product's name "
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="halfSize flex flex-col md:flex-row gap-6 ">
                <div className="flex flex-col flex-grow">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mt-1 mb-3"
                  >
                    Category
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter the product's category"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-5/6"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mt-1 mb-3"
                  >
                    Seller
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter seller"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-5/6"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </div>
              <div className="halfSize flex flex-col md:flex-row gap-6 ">
                <div className="flex flex-col flex-grow">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mt-1 mb-3"
                  >
                    Price
                  </Typography>
                  <Input
                    size="lg"
                    type="number"
                    placeholder="Enter the price of item"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-5/6"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mt-1 mb-3"
                  >
                    Stock
                  </Typography>
                  <Input
                    size="lg"
                    type="number"
                    placeholder="Enter the quantity"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-5/6"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </div>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Image Url
              </Typography>
              <Input
                size="lg"
                placeholder="Enter the Image url of the product here "
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            {/* <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            /> */}
            <div className="flex item-center justify-center">
              <Button
                className="mt-6 mb-6 w-3/5 "
                fullWidth
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
            {/* <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography> */}
          </form>
        </div>
      </Card>
    </div>
  );
};

export default addNewItem;

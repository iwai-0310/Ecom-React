import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Slider,
} from "@material-tailwind/react";
import Search from "./Search";

const FilterBy = ({ product, GridList }) => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const checkButtonWorks = () => {
    console.log("the desc button should work like thsi");
  };
  return (
    <React.Fragment>
      <Button className="w-5/6" onClick={openDrawer}>
        Filter by ...
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Filter by
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {/* <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography> */}
        <Search product={product} GridList={GridList} />
        <hr />
        {/* sorting by seller */}
        <Typography color="black" className="my-2 font-bold">
          Sort seller by
        </Typography>
        <div className="flex gap-2 my-2 justify-between">
          <Button
            size="sm"
            variant="outlined"
            className="hover:text-orange-700 "
          >
            Asc
          </Button>
          <Button size="sm" className="hover:text-orange-700">
            desc
          </Button>
        </div>
        <hr />
        {/* sorting by name */}
        <Typography color="black" className="my-2 font-bold">
          Sort name by
        </Typography>
        <div className="flex gap-2 my-2 justify-between">
          <Button
            size="sm"
            variant="outlined"
            className="hover:text-orange-700 "
            onClick={checkButtonWorks}
          >
            Asc
          </Button>
          <Button
            size="sm"
            className="hover:text-orange-700"
            onClick={checkButtonWorks}
          >
            desc
          </Button>
        </div>
        <hr />
        <div>
          {/* sorting by price */}
          <div>
            <Typography color="black" className="mt-2 mb-2 font-bold">
              Select price range
            </Typography>
            <Slider size="sm" defaultValue={50} className="mb-12" />
          </div>
          <hr />
          {/* sorting by stock */}
          <div>
            <Typography color="black" className="mt-2 mb-2 font-bold">
              Select stock range
            </Typography>
            <Slider size="sm" defaultValue={50} className="mb-12" />
          </div>
          {/* sorting by shipping */}
          <div>
            <Typography color="black" className="mt-2 mb-2 font-bold">
              Select shipping range
            </Typography>
            <Slider size="sm" defaultValue={50} className="mb-8" />
          </div>
        </div>
        <Button fullWidth> block level button </Button>
      </Drawer>
    </React.Fragment>
  );
};

export default FilterBy;

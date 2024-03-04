import React from "react";
import Button from "./Button";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container p-20"
    >
      <div className="flex flex-col flex-1">
        <h2></h2>
        <h2 className="text-5xl font-bold">
          <span className="pb-5">The New Arrival</span>
          <br />
          <span className="text-red-400">Nike </span>
          Shoes
        </h2>
        <p className="mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          voluptatum dignissimos temporibus sapiente magnam asperiores.
        </p>
        <Button label="View Details" iconURL={arrowRight} />
      </div>
    </section>
  );
};

export default SuperQuality;

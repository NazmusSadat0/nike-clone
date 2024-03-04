import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full border-2  flex justify-center min-h-screen gap-10 mt-6 mb-"
    >
      <div className="ml-20 xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-red-400 mb-10">Our Summer Collection</p>
        <h1 className="text-5xl font-bold">
          <span className="pb-5">The New Arrival</span>
          <br />
          <span className="text-red-400">Nike </span>
          Shoes
        </h1>
        <p className="mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          voluptatum dignissimos temporibus sapiente magnam asperiores.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-gray-500 leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-200 pt-20 w-1/2">
        <img src={bigShoeImg} alt="" width={500} height={500} className="ml-24"/>
        <div className="flex sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%]">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard 
              imgURL={shoe}
              changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Hero;

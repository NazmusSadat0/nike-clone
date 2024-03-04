import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="name" className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5 flex-col">
        <div className="flex">
          <img src={star} alt="star" width={24} height={24} />
          <p className="text-gray-600 text-lg ml-3">(4.5)</p>
        </div>
        <p className="font-mono text-xl leading-normal textslate-500"></p>
        <h3 className="mt-2 font-bold leading-normal text-lg ">{name}</h3>
        <p
          className="text-sm text-red-500 font-semibold"
        >
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;

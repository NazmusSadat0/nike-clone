import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
    ${
      bigShoeImg === imgURL.bigShoe ? "border-red-500" : "border-transparent"
    } cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-center bg-gray-200 sm:w-40 sm:h-40 rounded-xl max-sm:p-4 pl-12 pt-5">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-container"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

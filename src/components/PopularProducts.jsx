import React from "react";
import { products } from "../constants";
import PopularProductCard from "./PopularProductCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 p-20">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-sans font-bold">
          Our <span className="text-red-500">Popular</span> Product
        </h2>
        <p className="lg:max-w-lg mt-2 font-serif">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          earum veniam eos laudantium maiores sequi culpa et, modi aperiam
          tenetur adipisci corporis fugiat. Deserunt sequi, adipisci
          perspiciatis itaque doloremque aspernatur!
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {products.map((product, index) => (
                <PopularProductCard key={index} {...product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;

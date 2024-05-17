import Image from "next/image";
import React from "react";
import Dash from "./Dash";

const Featured = () => {
  return (
    <div className="container pt-40">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Food</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat
        repellat expedita tempore hic iste. Laborum odit illo ex nostrum! Lorem
        ipsum dolor sit amet.
      </p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/samosa.webp"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Indian Samosa</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            A samosa  is a fried central Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, peas, meat, or fish.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/dhokla.JPG"
            width={500}
            height={900}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Dhokla</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
           Dhokla is a savoury sponge dish that is native to the Indian state of Gujarat and parts of adjacent states, and is popular throughout the country.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/biryani.jpg"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Chicken Briyani</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice, some type of meat and spices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
  {
    img: "/cake.avif",
    title: "Delicious Cake",
    desc: "2x tuna sahimi, 1x noodles",
    price: "₹300.00",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "₹500.00",
  },
  {
    img: "/images.jpg",
    title: "Indian Parathe",
    desc: "1 parathe per piece",
    price: "₹20.00",
  },
  {
    img: "/pani.webp",
    title: "Indian Pani-puri",
    desc: "6 piece per plate",
    price: "₹8.00",
  },
  {
    img: "/kachori.jpg",
    title: "Kachori",
    desc: "1 peice per plate",
    price: "₹30.00",
  },
  {
    img: "/kulcha.webp",
    title: "Matar Kulcha",
    desc: "2x peices per plate",
    price: "₹50.00",
  },
  {
    img: "/dosa.jpg",
    title: "Dosa",
    desc: "4piece per plate",
    price: "₹65.00",
  },
  {
    img: "/Kathi_rolls.webp",
    title: "Kathi_rolls",
    desc: "3 per piece",
    price: "₹70.00",
  },
];

const Menu = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
        Enjoy a selection of freshly prepared hot and cold food, barista-made drinks, soups, and delicious desserts and snacks from our brand-new menu.
          <br />
          quidem esse eum animi?
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="bg-accent text-white p-1">Appetizers</li>
        <li>Breakfast</li>
        <li>Salads</li>
        <li>Meat & Fish</li>
        <li>Soup</li>
        <li>Desert</li>
        <li>Drinks</li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto top-10"
            src="/beautifull.jpg"
            width={500}
            height={500}
            alt="dish"
          />
        </div>

        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuData.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;

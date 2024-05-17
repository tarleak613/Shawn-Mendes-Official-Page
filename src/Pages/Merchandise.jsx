// Merchandise.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import merchandiseData from "../merchandise.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
// import { FaPlus, FaMinus } from "react-icons/fa";
import ViewCart from "./ViewCart"; // Import the ViewCart component

const Merchandise = () => {
  const hoodies = merchandiseData.hoodies;
  const accessories = merchandiseData.accessories;

  const [selectedItem, setSelectedItem] = useState(null); // State to store selected item
  const [cartCount, setCartCount] = useState(0);

  const settingsRightToLeft = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    rtl: true, // Right to left sliding direction
  };

  const settingsDefault = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  // const handlePlusClick = (item) => {
  //     setSelectedItem(item);
  //     setCartCount((prevCount) => prevCount + 1);

  //     // Store selected item in local storage
  //     localStorage.setItem('selectedItem', JSON.stringify(item));
  // };

  // Function to handle selecting an item
  const handleSelectItem = (item) => {
    setSelectedItem(item);

    // Store selected item in local storage
    localStorage.setItem("selectedItem", JSON.stringify(item));
  };
  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-4">
          <section>
            <h2 className="text-2xl font-bold mb-4">Hoodies</h2>
            <Slider {...settingsRightToLeft}>
              {hoodies.map((item) => (
                <div key={item.id} className="w-48 m-2 flex flex-col relative">
                  <img
                    src={item.image}
                    alt={`Hoodie ${item.id}`}
                    className="w-full h-48 object-cover relative"
                  />
                  <Link
                    to="/view-cart"
                    onClick={() => handleSelectItem(item)}
                    className="block w-full mt-2 bg-black text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 relative"
                    style={{
                      display: "grid", 
                      placeItems: "center",
                      textDecoration: "none", 
                      height: "100%", 
                    }}
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </Slider>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Accessories</h2>
            <Slider {...settingsDefault}>
              {accessories.map((item) => (
                <div key={item.id} className="w-48 m-2 flex flex-col relative">
                  <img
                    src={item.image}
                    alt={`Accessory ${item.id}`}
                    className="w-full h-48 object-cover relative"
                  />
                  <Link
                    to="/view-cart"
                    onClick={() => handleSelectItem(item)}
                    className="block w-full mt-2 bg-black text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 relative"
                    style={{
                      display: "grid", 
                      placeItems: "center", 
                      textDecoration: "none", 
                      height: "100%", 
                    }}
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </Slider>
          </section>
        </div>
      </div>
      {selectedItem && <ViewCart selectedItem={selectedItem} />}
    </>
  );
};

export default Merchandise;

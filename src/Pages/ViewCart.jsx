import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
const ViewCart = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Retrieve selected item from local storage
    const storedItem = JSON.parse(localStorage.getItem("selectedItem"));
    setSelectedItem(storedItem);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="border-t border-white"></div>
      <div className="flex h-screen bg-black text-white">
        <div className="w-1/2 flex  justify-center items-center ">
          {selectedItem && (
            <img
              src={selectedItem.image}
              alt="Product Image"
              className="max-w-xs md:max-w-sm"
            />
          )}
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Limited Edition</h2>
            <h1 className="text-3xl font-bold mb-4">
              {selectedItem && selectedItem.title}
            </h1>
            {/* <p className="text-lg">Quantity: {selectedItem && selectedItem.quantity}</p> */}
            <p className="text-lg">
              Price: {selectedItem && selectedItem.price}
            </p>
            <p className="text-lg">Size: {selectedItem && selectedItem.size}</p>
            <p className="text-lg">
              Arrival Date: {selectedItem && selectedItem.arrivalDate}
            </p>
            {/* Add more attributes here */}
          </div>
          <div>
            <button
              onClick={() => (window.location.href = "/not-found-page")}
              className="text-blue-500 hover:text-blue-600 font-semibold cursor-pointer"
            >
              Pre-Order
            </button>

            <p className="text-sm text-gray-600 mt-2">ALL SALES FINAL</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCart;

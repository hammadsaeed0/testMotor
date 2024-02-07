// ProductSlider.js
import React, { useRef } from "react";
// import "./ProductSlider.css";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
const FeaturedCars = ({ items }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="relative w-full container md:px-4 px-0 mx-auto">
      <div
        ref={scrollContainerRef}
        className="scroll-container   productOverflow  overflow-x-auto whitespace-nowrap"
      >
        {items}
      </div>

      <div className=" md:block hidden">
        <button
          className="arrow arrow-left absolute -left-4  flex  pr-1   justify-center  items-center  top-80 rounded-full  bg-secondary w-16 h-16"
          onClick={scrollLeft}
        >
          {/* <LiaAngleLeftSolid size={35} color="white" className=" font-extrabold" /> */}
          <img src={require('../../assets/images/leftarrow.png')} className=" w-6" alt="" />
        </button>
        <button
          className="arrow arrow-right absolute -right-4  flex justify-center pl-1 items-center   top-80 rounded-full  bg-secondary w-16 h-16"
          onClick={scrollRight}
        >
          {/* <LiaAngleRightSolid size={35} color="white" /> */}
          <img src={require('../../assets/images/rightarrow.png')} className=" w-6" alt="" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCars;

import { Carousel } from "flowbite-react";
import React from "react";
import cake1 from "../../assets/slider/cake1.jpg";
import cake2 from "../../assets/slider/cake2.jpg";
import cake3 from "../../assets/slider/cake3.jpg";

const Slider = () => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel leftControl="left" rightControl="right">
          <img
            src={cake1}
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;

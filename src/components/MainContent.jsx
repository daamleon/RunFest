import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import runningImage1 from "../assets/running.jpg";
import runningImage2 from "../assets/running2.jpg";
import runningImage3 from "../assets/running3.jpg";

function MainContent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="z-0 bg-orange-500 text-center h-full w-full mt-6 mb-6 p-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        Join the Ultimate Running Experience!
      </h2>
      <p className="text-white mb-6 max-w-2xl mx-auto">
        Whether you are a seasoned marathon runner or just starting your
        journey, our event welcomes everyone. Challenge yourself, meet new
        friends, and explore beautiful courses.
      </p>
      <Slider {...settings} className="mb-6">
        <div className="justify-items-center">
          <img
            src={runningImage3}
            alt="Running"
            className="w-[80%] h-[50%] md:w-[60%] md:h-[40%] mx-auto"
          />
        </div>
        <div className="justify-items-center">
          <img
            src={runningImage1}
            alt="Running"
            className="w-[80%] h-[50%] md:w-[60%] md:h-[40%] mx-auto"
          />
        </div>
        <div className="justify-items-center">
          <img
            src={runningImage2}
            alt="Running"
            className="w-[80%] h-[50%] md:w-[60%] md:h-[40%] mx-auto"
          />
        </div>
      </Slider>
      <p className="text-lg text-white pt-2 max-w-xl mx-auto">
        Experience the thrill of the race with thousands of runners from around
        the world. Be part of an unforgettable adventure and push your limits.
      </p>
      <button className="mt-4 px-6 py-3 bg-orange-800 text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-orange-900 transition">
        Learn More
      </button>
    </div>
  );
}

export default MainContent;

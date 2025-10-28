import { useEffect, useState } from "react";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";
import test4 from "../assets/test4.png";
import { FaStar } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const testimonials = [
  {
    name: "Sadun Dilshan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    name: "John Doe",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
  },
  {
    name: "Jane Smith",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 5,
  },
];

const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [disable , setDisable ] = useState(false)
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };


useEffect(() => {
  const interval = setInterval(() => {
    setDisable(true);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setDisable(false), 500); 
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <div>
      <div className="container mx-auto px-5 md:px-10 py-24">
        {/* Header */}
        <div className="flex justify-between items-center ">
          <p className="text-[#9E9E9E] text-2xl">Reviews</p>
          <button className="bg-[#212121] text-white px-6 py-3 rounded-lg cursor-pointer">
            + Your Opinions
          </button>
        </div>

        <p className="text-5xl font-bold text-[#424242] mt-4">Your Opinions</p>

        {/* Images */}
        <div className="mt-20 flex flex-wrap justify-between">
          <div className="md:w-[430px] w-full">
            <div className="flex gap-4">
              <img src={test1} className="object-cover w-40 h-40" />
              <img src={test2} className="object-cover w-[120px] h-[120px]" />
            </div>
            <div className="flex ms-10">
              <img src={test3} className="object-cover w-[180px] h-[180px]" />
              <img src={test4} className="object-cover w-[150px] h-[150px]" />
            </div>
          </div>

          {/* Slider Section */}
          <div className="relative md:w-[500px] overflow-hidden  w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="me-6 min-w-[483px] rounded-2xl px-6 py-7 [box-shadow:0px_2px_4px_rgb(58,53,65,0.14)] bg-white"
                >
                  <p className="font-semibold text-[#424242] text-2xl">
                    {t.name}
                  </p>
                  <ul className="flex gap-1 mt-3 text-[#424242] text-[16px]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-[#757575]">{t.text}</p>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex  gap-3 mt-5">
              <button
                disabled = {disable}
                onClick={prevSlide}
                className="cursor-pointer p-3 bg-[#212121] text-white rounded-full hover:bg-[#424242] transition"
              >
                <FaChevronLeft />
              </button>
              <button
                disabled = {disable}
                onClick={nextSlide}
                className="cursor-pointer p-3 bg-[#212121] text-white rounded-full hover:bg-[#424242] transition"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

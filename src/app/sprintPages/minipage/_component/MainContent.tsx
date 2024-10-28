import Booking from "./Booking";
import SmartImage from "@/components/SmartImage";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAppState } from "@/context/AppContext";


const MainContent: NextPage = () => {
  const { isLanguageEnglish } = useAppState(); // Access language state
  const router = useRouter();
  const [page, setPage] = useState({
    nano: "",
    mini: "mini",
    mega: "",
  });

  const images = [
    "/nanopage/RectangleMi1.jpeg",
    "/nanopage/RectangleMi2.jpeg",
    "/nanopage/RectangleMi3.jpeg",
    "/nanopage/RectangleMi4.jpeg",
    "/nanopage/RectangleMi5.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex + 3 >= images.length ? 0 : prevIndex + 3
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex - 3 < 0 ? images.length - 3 : prevIndex - 3
  //   );
  // };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loops back to first image
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    ); // Loops back to last image
  };

  const handleChange = (name: string) => {
    if (name === "nano") {
      router.push("/sprintPages/nanopage");
      setPage({
        nano: "nano",
        mini: "",
        mega: "",
      });
    } else if (name === "mini") {
      router.push("/sprintPages/minipage");
      setPage({
        nano: "",
        mini: "mini",
        mega: "",
      });
    } else if (name === "mega") {
      router.push("/sprintPages/megapage");
      setPage({
        nano: "",
        mini: "",
        mega: "mega",
      });
    }
  };
  return (
    <main className="pt-[150px] md:pb-16 pb-12 w-[90%] md:max-w-[70%] mx-auto flex flex-col gap-8">
      <header className="flex flex-col md:flex-row justify-start gap-8 md:gap-16 text-xl md:text-2xl lg:text-3xl">
        {/* <nav className="text-sm md:text-lg leading-[150%] text-left inline-block">
          <span className="text-darkslateblue text-[#29458c]">
            <b>{isLanguageEnglish ? "Home" : "ಮನೆ"}</b>
          </span>
          <span className="font-medium">
            <span className="text-darkslateblue">{` / `}</span>
            <span className="text-darkslategray">
              {isLanguageEnglish ? "Sprints" : "ಸ್ಪ್ರಿಂಟ್ಸ್"}
            </span>

          </span>
        </nav> */}
      </header>

      {/* Adjusted sprint images */}
      <section className="w-full flex flex-row md:items-center md:justify-center gap-2 md:gap-12 text-left text-lg md:text-2xl lg:text-3xl overflow-x-auto no-scrollbar">
        <article
          className="flex-shrink-0 w-[36vw] md:w-[118px] flex flex-col items-center justify-start gap-4 cursor-pointer"
          onClick={() => handleChange("nano")}
        >
          <SmartImage
            className={`w-[25%] md:w-[50%] h-auto object-cover rounded-md ${page.nano ? "" : "mix-blend-luminosity"
              }`}
            alt="Nano Sprints"
            src={
              !page.nano
                ? "/nanopage/NANO SPRINT ICON - grey.png"
                : "/nanopage/NANO SPRINT ICON.svg"
            }
            width={48}
            height={48}
          />
          <p
            className={
              page.nano
                ? "leading-[150%] font-extrabold text-[#29458c]"
                : "leading-[150%]  font-extrabold text-[#bdbdbd]"
            }
          >
            Nano Sprints
          </p>
        </article>
        <article
          className="flex-shrink-0 w-[36vw] md:w-[118px] flex flex-col items-center justify-start gap-4"
          onClick={() => handleChange("mini")}
        >
          <SmartImage
            className={`w-[25%] md:w-[50%] h-auto object-cover rounded-md ${page.mini ? "" : "mix-blend-luminosity"
              }`}
            alt="Mini Sprints"
            src={
              !page.mini
                ? "/nanopage/MINI SPRINT ICON - grey.png"
                : "/nanopage/MINI SPRINT ICON.svg"
            }
            width={48}
            height={48}
          />
          <p
            className={
              page.mini
                ? "leading-[150%] font-extrabold text-[#29458c]"
                : "leading-[150%] font-extrabold text-[#bdbdbd]"
            }
          >
            Mini Sprints
          </p>
        </article>
        <article
          className="flex-shrink-0 w-[36vw] md:w-[118px] flex flex-col items-center justify-start gap-4 cursor-pointer"
          onClick={() => handleChange("mega")}
        >
          <SmartImage
            className={`w-[25%] md:w-[50%] h-auto object-cover rounded-md ${page.mega ? "" : "mix-blend-luminosity"
              }`}
            alt="Mega Sprints"
            src={
              !page.mega
                ? "/nanopage/MEGA SPRINT ICON - grey.png"
                : "/nanopageMEGA SPRINT ICON.svg"
            }
            width={64}
            height={64}
          />
          <p
            className={
              page.mega
                ? "leading-[150%] font-extrabold text-[#29458c]"
                : "leading-[150%] font-extrabold text-[#bdbdbd]"
            }
          >
            Mega Sprints
          </p>
        </article>
      </section>

      {/* Increased heading size */}
      {/* <section className="md:max-w-[100%] text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold font-['Amazon Ember'] text-[#29458c] text-left mt-6 md:mt-10">
        Mini Sprints: Multi-Day Skill Building Workshops on Robotics and AI
      </section> */}
      {/* <h2 className="md:max-w-[100%] text-[#29458c] leading-[150%] text-heading6 md:text-heading5 font-['Amazon Ember'] text-left mt-6 md:mt-10">Mini Sprints: Multi-Day Skill Building Workshops on Robotics and AI</h2> */}
      <h2 className="md:max-w-[100%] text-[#29458c] leading-[150%] text-heading6 md:text-heading5 font-['Amazon Ember'] text-left mt-6 md:mt-10">
        {isLanguageEnglish
          ? "Mini Sprints: Multi-Day Skill Building Workshops on Robotics and AI"
          : "ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು ಎಐ ಕಾರ್ಯಕ್ರಮದ ಮಿನಿ ಸ್ಪ್ರಿಂಟ್ಸ್: ಹಲವು-ದಿನದ ಕೌಶಲ್ಯ-ನಿರ್ಮಾಣ"}
      </h2>


      {/* First two images in the same row */}
      {/* <div className="flex flex-col sm:flex-row gap-6 justify-between">
        <SmartImage
          src="/nanopage/Rectangle 4.jpeg"
          className="w-full sm:w-[48%] h-auto rounded-md"
          alt="First SmartImage"
        />
        <SmartImage
          src="/nanopage/Rectangle 32.jpeg"
          className="w-full sm:w-[48%] h-auto rounded-md"
          alt="Second SmartImage"
        />
      </div> */}
      {/* Last three images in the same row */}
      {/* <div className="flex flex-col sm:flex-row gap-6 justify-between">
        <SmartImage
          src="/nanopage/Rectangle 4.jpeg"
          className="w-full sm:w-[32%] h-auto rounded-md"
          alt="First SmartImage"
        />
        <SmartImage
          src="/nanopage/Rectangle 32.jpeg"
          className="w-full sm:w-[32%] h-auto rounded-md"
          alt="Second SmartImage"
        />
        <SmartImage
          src="/nanopage/Rectangle 32.jpeg"
          className="w-full sm:w-[32%] h-auto rounded-md"
          alt="Third SmartImage"
        />
      </div> */}
      {/* <section className="hidden md:flex flex-col gap-6">
        <div className="flex flex-row gap-6 justify-between">
          <figure className="w-full sm:w-[48%] h-auto rounded-md">
            <SmartImage src="/nanopage/Rectangle 4.jpeg" alt="First SmartImage" 
            width={600} 
            height={400}/>
          </figure>
          <figure className="w-full sm:w-[48%] h-auto rounded-md">
            <SmartImage src="/nanopage/Rectangle 32.jpeg" alt="Second SmartImage" 
            width={600} 
            height={400}/>
          </figure>
        </div>
        <div className="flex flex-row gap-6 justify-between">
          <figure className="w-full sm:w-[32%] h-auto rounded-md">
            <SmartImage src="/nanopage/Rectangle 4.jpeg" alt="Third SmartImage" 
            width={350} 
            height={250}/>
          </figure>
          <figure className="w-full sm:w-[32%] h-auto rounded-md">
            <SmartImage src="/nanopage/Rectangle 32.jpeg" alt="Fourth SmartImage" 
            width={350} 
            height={250}/>
          </figure>
          <figure className="w-full sm:w-[32%] h-auto rounded-md">
            <SmartImage src="/nanopage/Rectangle 32.jpeg" alt="Fifth SmartImage" 
            width={350} 
            height={250}/>
          </figure>
        </div>
      </section>
      <section className="flex md:hidden overflow-x-auto no-scrollbar">
        <div className="flex flex-row gap-6">
          <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
            <SmartImage src="/nanopage/Rectangle 4.jpeg" alt="First SmartImage" 
            width={500}
            height={300}/>
          </figure>
          <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
            <SmartImage src="/nanopage/Rectangle 32.jpeg" alt="Second SmartImage" 
            width={500}
            height={300}/>
          </figure>
          <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
            <SmartImage src="/nanopage/Rectangle 4.jpeg" alt="Third SmartImage" 
            width={500}
            height={300}/>
          </figure>
          <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
            <SmartImage src="/nanopage/Rectangle 32.jpeg" alt="Fourth SmartImage" 
            width={500}
            height={300}/>
          </figure>
          <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
            <SmartImage src="/nanopage/Rectangle 32.jpeg" alt="Fifth SmartImage"
            width={500}
            height={300} />
          </figure>
        </div>
      </section> */}
      <div className="relative w-full">
        {/* Carousel for medium and large screens */}
        <section className="hidden md:flex flex-col gap-6">
          <div className="relative">
            {/* Images Row */}
            <div className="flex flex-row justify-center gap-4">
              {images.slice(currentIndex, currentIndex + 3).map((src, index) => (
                <figure key={index} className="w-[33.33%] relative">
                  <SmartImage
                    className="rounded-md w-full h-[300px] object-cover"
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={600}
                    height={400}
                  />
                </figure>
              ))}
            </div>

            {/* Left Arrow Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-incandescent-light rounded-full mx-4"
            >
              <span className="text-incandescent-main text-lg">&#60;</span> {/* Change 'text-white' to your desired color */}
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-incandescent-light rounded-full mx-4"
            >
              <span className="text-incandescent-main text-lg ">&#62;</span> {/* Change 'text-white' to your desired color */}
            </button>
          </div>
        </section>

        {/* Carousel for small screens */}
        <section className="flex md:hidden items-center justify-center gap-2">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-incandescent-light rounded-full mx-0.5"
          >
            <span className="text-incandescent-main text-lg">&#60;</span> {/* Change 'text-white' to your desired color */}
          </button>



          {/* Single Image Display */}
          <figure className="w-[80%] max-w-md flex-shrink-0">
            <SmartImage
              className="rounded-md w-full h-[300px] object-cover"
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={400}
              height={300}
            />
          </figure>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-incandescent-light rounded-full mx-0.5"
          >
            <span className="text-incandescent-main text-lg ">&#62;</span> {/* Change 'text-white' to your desired color */}
          </button>
        </section>
      </div>


      <Booking />
    </main>
  );
};

export default MainContent;

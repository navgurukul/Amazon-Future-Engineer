import Booking from "./Booking";
import SmartImage from "@/components/SmartImage";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAppState } from "@/context/AppContext";

interface MainContentProps {
  handleOfflineBooking: () => void;
}

const MainContent: NextPage<MainContentProps> = ({ handleOfflineBooking }) => {
  const { isLanguageEnglish } = useAppState(); // Access language state
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

  const router = useRouter();
  const [page, setPage] = useState({
    nano: "nano",
    mini: "",
    mega: "",
  });

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

  const images = [
    "/nanopage/Rectangle4-5.jpeg",
    "/nanopage/Rectangle3-4.png",
    "/nanopage/Rectangle4-4.jpeg",
    "/nanopage/Rectangle3-5.jpeg",
    "/nanopage/Rectangle5-5.jpeg",
  ];



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
      {/* First Section */}
      {/* <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-left text-lg md:text-2xl lg:text-3xl text-text-primary font-webtypestyles-h6">
        <article
          className="w-full sm:w-[110px] flex flex-col items-center justify-start gap-4"
          onClick={() => handleChange("nano")}
        >
          <SmartImage
            className={`w-full h-auto object-cover rounded-md ${
              page.nano ? "" : "mix-blend-luminosity"
            }`}
            alt="Nano Sprints"
            src={!page.nano ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"}
            width={110}
            height={110}
          />
          <p
            className={page.nano ? "leading-[150%] font-extrabold text-[#29458c]" : "leading-[150%]"}
          >
            Nano Sprints
          </p>
        </article>

        <article
          className="w-full sm:w-[110px] flex flex-col items-center justify-start gap-4 cursor-pointer"
          onClick={() => handleChange("mini")}
        >
          <SmartImage
            className={`w-full h-auto object-cover rounded-md ${
              page.mini ? "" : "mix-blend-luminosity"
            }`}
            alt="Mini Sprints"
            src={!page.mini ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"}
            width={110}
            height={110}
          />
          <p
            className={page.mini ? "leading-[150%] font-extrabold text-[#29458c]" : "leading-[150%]"}
          >
            Mini Sprints
          </p>
        </article>

        <article
          className="w-full sm:w-[110px] flex flex-col items-center justify-start gap-4 cursor-pointer"
          onClick={() => handleChange("mega")}
        >
          <SmartImage
            className={`w-full h-auto object-cover rounded-md ${
              page.mega ? "" : "mix-blend-luminosity"
            }`}
            alt="Mega Sprints"
            src={!page.mega ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"}
            width={110}
            height={110}
          />
          <p
            className={page.mega ? "leading-[150%] font-extrabold text-[#29458c]" : "leading-[150%]"}
          >
            Mega Sprints
          </p>
        </article>
      </section> */}
      <section className="w-full flex flex-row md:items-center md:justify-center gap-2 md:gap-12 text-left text-lg md:text-2xl lg:text-3xl overflow-x-auto no-scrollbar">
        {/* Article for Nano Sprints */}
        <article
          className="flex-shrink-0 w-[36vw] md:w-[118px] flex flex-col items-center justify-start gap-4"
          onClick={() => handleChange("nano")}
        >
          <SmartImage
            className={`w-[25%] md:w-[50%] h-auto object-cover rounded-md ${page.nano ? "" : "mix-blend-luminosity"
              }`}
            alt="Nano Sprints"
            // src={!page.nano ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"}
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
                : "leading-[150%] font-extrabold text-[#bdbdbd]"
            }
          >
            {/* Nano Sprints */}
            <span>
              {isLanguageEnglish ? "Nano Sprints" : "ನಾನೋ ಸ್ಪ್ರಿಂಟ್‌ಗಳು"}
            </span>
          </p>
        </article>

        {/* Article for Mini Sprints */}
        <article
          className="flex-shrink-0 w-[36vw] md:w-[118px] flex flex-col items-center justify-start gap-4 cursor-pointer"
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
            {/* Mini Sprints */}
            <span>
              {isLanguageEnglish ? "Mini Sprints" : "ಮಿನಿ ಸ್ಪ್ರಿಂಟ್‌ಗಳು"}
            </span>
          </p>
        </article>

        {/* Article for Mega Sprints */}
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
                : "/nanopage/MEGA SPRINT ICON.svg"
            }
            width={48}
            height={48}
          />
          <p
            className={
              page.mega
                ? "leading-[150%] font-extrabold text-[#29458c]"
                : "leading-[150%] font-extrabold text-[#bdbdbd]"
            }
          >
            {/* Mega Sprints */}
            <span>
              {isLanguageEnglish ? "Mega Sprints" : "ಮೆಗಾ ಸ್ಪ್ರಿಂಟ್‌ಗಳು"}
            </span>
          </p>
        </article>
      </section>

      {/* Second Section */}
      {/* <section className="md:max-w-[100%] text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold font-['Amazon Ember'] text-[#29458c] text-left mt-6 md:mt-10">
        Nano Sprints: One-day experiential learning sessions to ignite interest
        and aspirations in Robotics and AI
      </section> */}
      {/* <h2 className="md:max-w-[100%] text-[#29458c] leading-[150%] text-heading6 md:text-heading5 font-['Amazon Ember'] text-left mt-6 md:mt-10">Nano Sprints: One-day experiential learning sessions to ignite interest and aspirations in Robotics and AI</h2> */}
      <h2 className="md:max-w-[100%] text-[#29458c] leading-[150%] text-heading6 md:text-heading5 font-['Amazon Ember'] text-left mt-6 md:mt-10">
        {isLanguageEnglish
          ? "Nano Sprints: One-day experiential learning sessions to ignite interest and aspirations in Robotics and AI"
          : "ರೊಬೊಟಿಕ್ಸ್ ಮತ್ತು ಎಐನಲ್ಲಿ ಆಸಕ್ತಿ ಮತ್ತು ಆಕಾಂಕ್ಷೆಗಳನ್ನು ಹುಟ್ಟುಹಾಕಲು ನ್ಯಾನೊ ಸ್ಪ್ರಿಂಟ್ಸ್ ಒಂದು ದಿನದ ಅನುಭವದ ಕಲಿಕೆ."}
      </h2>

      {/* Third Section */}
      {/* <section className="flex flex-col sm:flex-row gap-6 justify-between">
        <figure className="w-full sm:w-[48%] h-auto rounded-md">
          <img src="/nanopage/Rectangle 4.jpeg" alt="First SmartImage" />
        </figure>
        <figure className="w-full sm:w-[48%] h-auto rounded-md">
          <img src="/nanopage/Rectangle 32.jpeg" alt="Second SmartImage" />
        </figure>
      </section>
      <section className="flex flex-col sm:flex-row gap-6 justify-between">
        <figure className="w-full sm:w-[32%] h-auto rounded-md">
          <img src="/nanopage/Rectangle 4.jpeg" alt="First SmartImage" />
        </figure>
        <figure className="w-full sm:w-[32%] h-auto rounded-md">
          <img src="/nanopage/Rectangle 32.jpeg" alt="Second SmartImage" />
        </figure>
        <figure className="w-full sm:w-[32%] h-auto rounded-md">
          <img src="/nanopage/Rectangle 32.jpeg" alt="Third SmartImage" />
        </figure>
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

      <Booking handleOfflineBooking={handleOfflineBooking} />
    </main>
  );
};

export default MainContent;

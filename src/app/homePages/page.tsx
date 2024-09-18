"use client";

import type { NextPage } from "next";
import { useState, useCallback } from "react";
import CreateAClass from "./CreateAClass";

// import styles from "./_components/homePages.module.css";

const HomePage: NextPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onFrameContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  // Function to handle button click to open the popup
  const handleBookSessionClick = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return(
<div className="w-full relative bg-white min-h-screen overflow-hidden text-left text-xl md:text-2xl text-[#3a3a3a] font-['Amazon Ember Display']">
  <section className="relative w-full min-h-screen text-center text-xl md:text-2xl text-[#3a3a3a] font-['Amazon Ember Display']">
    <video
      src="./homepage/video.mp4"
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      muted
    ></video>

    <img
      className="absolute top-[2vw] left-[2vw] w-[4vw] h-[4vw] overflow-hidden"
      alt=""
      src="./homepage/reshot-icon-molecules-YBNSD562JC 1.svg"
    />

    <header className="absolute top-[25%] left-[2vw] right-[2vw] max-w-[1200px] mx-auto flex flex-col gap-6 items-start text-left">
      <div className="w-full flex flex-col gap-4 items-start">
        <h1 className="w-[60vw] relative font-extrabold leading-[150%] text-white">
          WELCOME TO AMAZON FUTURE ENGINEERS INNOVATION HUB
        </h1>
        <h2 className="relative text-[1.5vw] leading-[150%] font-extrabold text-white">
          A tinkering lab for every future engineer
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start text-[14px] md:text-[18px] text-white">
        <button
          className="flex items-center justify-center px-4 py-2 bg-[#f55c38] rounded-full h-12 md:h-14 cursor-pointer"
          onClick={handleBookSessionClick}
        >
          <span className="relative font-medium leading-[170%]">
            Book a Session
          </span>
        </button>
        <button className="flex items-center justify-center px-4 py-2 bg-gray-200 text-[#f55c38] rounded-full h-12 md:h-14">
          <span className="relative font-medium leading-[170%]">
            Take a Virtual Tour
          </span>
        </button>
      </div>
    </header>

    <nav className="absolute top-[2vw] right-[2vw] flex items-center justify-center px-8 py-2 bg-gray-200 text-[#f55c38] rounded-full h-12 md:h-14 text-[14px] md:text-[18px] cursor-pointer">
      <span className="relative font-medium leading-[170%]">Login</span>
    </nav>

    <div className="absolute top-[2vw] right-[14vw] flex items-center justify-center px-2 bg-gray-200/70 rounded-full h-8 md:h-12 gap-1 text-[12px] md:text-[14px] text-white">
      <button className="flex items-center justify-center px-3 py-2 bg-[#f55c38] rounded-full h-6 md:h-8 font-medium leading-5">
        Eng
      </button>
      <button className="flex items-center justify-center px-3 py-2 rounded-full h-6 md:h-8 text-[#3a3a3a]">
        ಅಇಈ
      </button>
    </div>
  </section>

  {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <CreateAClass closePopup={closePopup} />
        </div>
      )}

  <section className="relative w-full min-h-screen overflow-visible text-left text-xl text-[#29458c] mt-16 md:mt-24">
    <article className="w-full flex flex-col items-start justify-start gap-4 px-4 md:px-12">
      <h2 className="relative font-extrabold leading-[150%]">
        What is the AFE Innovation Hub?
      </h2>
      <p className="w-full md:w-1/2 relative text-[18px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
        AFE Studio is a state-of-the-art Robotics and AI lab dedicated to
        empowering over 4,000 students by 2024. Our lab offers an
        unparalleled opportunity for students to dive into the fascinating
        realms of computer science and robotics. Designed with innovation in
        mind, AFE Studio provides an interactive and immersive environment
        where students can experiment, learn, and grow.
      </p>
    </article>

    <div className="w-full flex flex-col md:flex-row items-start justify-start gap-4 px-4 md:px-12 overflow-visible">
      <figure className="flex-1 h-[360px]">
        <img
          className="object-cover w-full h-full"
          alt="AFE Hub Image 1"
          src="./homepage/Rectangle 4.svg"
        />
      </figure>
      <figure className="w-full md:w-[50%] h-[360px]">
        <img
          className="object-cover w-full h-full"
          alt="AFE Hub Image 2"
          src="./homepage/Rectangle 3.svg"
        />
      </figure>
      <figure className="flex-1 h-[360px]">
        <img
          className="object-cover w-full h-full"
          alt="AFE Hub Image 3"
          src="./homepage/Rectangle 5.svg"
        />
      </figure>
    </div>
  </section>
<section className="relative w-full bg-[#29458c] flex flex-col items-start justify-start py-[80px] px-4 md:px-12 gap-[48px] text-white">
  <header className="w-full md:w-[793px] flex flex-col items-start justify-start gap-[16px]">
    <h2 className="relative leading-[150%] font-extrabold text-[24px] md:text-[32px]">How it Works?</h2>
    <p className="self-stretch relative text-[16px] md:text-[18px] leading-[170%] font-medium font-[Amazon Ember]">
      There are a few simple steps that you can take to book a sprint session for your students.
    </p>
  </header>

  <div className="w-full flex flex-col items-center justify-start gap-8 text-[20px] md:text-[24px]">
    <div className="w-full flex flex-wrap items-center justify-start gap-8 gap-y-12">
      <div className="w-full lg:w-[25%] flex flex-col items-center justify-start">
        <img
          className="w-[140px] h-[140px] object-cover"
          alt="Step 1"
          src="./homepage/Lottie flies.gif"
        />
      </div>
      <div className="w-full lg:w-[15%] flex flex-col items-center justify-start">
        <img
          className="w-[140px] h-[140px] object-cover"
          alt="Step 2"
          src="./homepage/Lottie flies.gif"
        />
      </div>
      <div className="w-full lg:w-[25%] flex flex-col items-center justify-start">
        <img
          className="w-[140px] h-[140px] object-cover"
          alt="Step 3"
          src="./homepage/Lottie flies.gif"
        />
      </div>
      <div className="w-full lg:w-[25%] flex flex-col items-center justify-start">
        <img
          className="w-[140px] h-[140px] object-cover"
          alt="Step 4"
          src="./homepage/Lottie flies.gif"
        />
      </div>
    </div>

    <img
      className="w-full md:w-[80%] relative h-[24px]"
      alt="Process Overview"
      src="./homepage/Frame 31704.svg"
    />

    <div className="w-full flex flex-col md:flex-row items-start justify-start gap-8 md:gap-[33px]">
      <article className="w-full md:w-[calc(50%-16px)] lg:w-[383px] flex flex-col items-center justify-start gap-2">
        <h3 className="relative leading-[150%] font-extrabold text-[18px]">Get to Know Innovation Hub</h3>
        <p className="relative text-center text-[14px] leading-[150%] font-medium font-['Amazon Ember']">
          Take a look around at what we do at Innovation Hub with the latest happenings or our virtual tour.
        </p>
      </article>

      <article className="w-full md:w-[calc(50%-16px)] lg:w-[383px] flex flex-col items-center justify-start gap-2">
        <h3 className="relative leading-[150%] font-extrabold text-[18px]">Check Out Sprint Details</h3>
        <p className="relative text-center text-[14px] leading-[150%] font-medium font-['Amazon Ember']">
          Explore if the sprint fits your needs and learning goals.
        </p>
      </article>

      <article className="w-full md:w-[calc(50%-16px)] lg:w-[383px] flex flex-col items-center justify-start gap-2">
        <h3 className="relative leading-[150%] font-extrabold text-[18px]">Book and Get Ready</h3>
        <p className="relative text-center text-[14px] leading-[150%] font-medium font-['Amazon Ember']">
          Easily find suitable slots and book via our system or call us.
        </p>
      </article>

      <article className="w-full md:w-[calc(50%-16px)] lg:w-[383px] flex flex-col items-center justify-start gap-2">
        <h3 className="relative leading-[150%] font-extrabold text-[18px]">Visit & Enjoy the Tinkering</h3>
        <p className="relative text-center text-[14px] leading-[150%] font-medium font-['Amazon Ember']">
          Get hands-on for the actual fun at the lab.
        </p>
      </article>
    </div>
  </div>
</section>
<section className="relative w-full flex flex-col items-start justify-start gap-[48px] text-[#29458c] px-4 mt-16 mb-16">
  <article className="w-full max-w-screen-lg flex flex-col items-start justify-start gap-[24px]">
    <h2 className="self-stretch relative leading-[150%] font-extrabold">
      Value - Driven programs
    </h2>
    <p className="self-stretch relative text-[18px] leading-[170%] font-medium font-[Amazon Ember] text-[#3a3a3a] lg:w-2/3">
      Teachers can easily schedule lab sessions and integrate Maker's Space into their lesson plans/ Curriculum. Pick a program and embark on a transformative STEM journey with your students.
    </p>
  </article>

  <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-4 text-[18px] text-white font-[Amazon Ember]">
    <section className="flex-1 bg-[#29458c] overflow-hidden flex flex-col items-start justify-start p-12 box-border relative gap-8 min-h-[calc(100vh-4.5rem)]">
      <div className="w-full max-w-screen-md flex flex-col items-start justify-start gap-4 z-0">
        <header className="flex flex-row items-center justify-start gap-4 text-[24px] font-[Amazon Ember Display]">
          <h3 className="relative leading-[150%] font-extrabold text-white">
            Nano Sprints
          </h3>
          <span className="rounded-full bg-[#049796] h-8 flex flex-row items-center justify-center px-2 box-border text-sm font-[Amazon Ember]">
            <p className="relative leading-[170%] font-medium">Active</p>
          </span>
        </header>
        <p className="self-stretch relative leading-[170%] font-medium">
          One day sessions designed to spark interest and build aspiration.
        </p>
        <div className="flex flex-row items-center justify-start gap-2">
          <figure className="w-11 h-8 relative overflow-hidden flex-shrink-0">
            <img
              src="./homepage/reshot-icon-search-time-schedule-YKN4SVFGAU.svg"
              alt="Icon"
            />
          </figure>
          <p className="flex flex-row items-center justify-start relative leading-[170%] font-medium">
            1 Day (3 hours)
          </p>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <figure className="w-[44px] h-[32px] relative overflow-hidden flex-shrink-0">
            <img
              src="./homepage/reshot-icon-student-boy-L9ESXQZ3WU.svg"
              alt="Student icon"
            />
          </figure>
          <p className="relative leading-[170%] font-medium">
            30 to 40 students per session
          </p>
        </div>
        <div>
          <button className="relative rounded-full bg-white flex items-center justify-center px-8 py-2.5 cursor-pointer text-center text-lg text-[#29458c]">Book a Session</button>
        </div>
      </div>
      <img
        className="absolute w-[558.7px] h-[523.7px] top-[131px] right-0 object-contain z-20 m-0 hidden lg:block"
        alt="Decorative graphic"
        src="./homepage/Vector.svg"
      />
    </section>

    <aside className="w-full lg:w-[calc(35%-16px)] flex flex-col items-start justify-start gap-4 text-[#29458c]">
      <article className="self-stretch bg-[#cdeaea] overflow-hidden flex flex-col items-start justify-start p-12 gap-6">
        <header className="flex flex-row items-center justify-start gap-4 text-2xl font-['Amazon Ember Display']">
          <h3 className="relative leading-[1.5] font-extrabold">
            Mini Sprints
          </h3>
          <span className="rounded-full bg-[#f55c38] h-8 flex flex-row items-center justify-center px-2 box-border text-sm text-white font-sans">
            <p className="relative leading-[170%] font-medium">
              Upcoming
            </p>
          </span>
        </header>
        <p className="relative leading-[170%] font-medium text-[#3a3a3a] self-stretch">
          Multi-day workshops focusing on specific STEM topics.
        </p>
        <div className="flex flex-row items-center justify-start gap-1 text-[#f55c38]">
          <p className="relative leading-[170%] font-medium">
            Learn More
          </p>
          <img
            className="w-6 h-6 relative overflow-hidden flex-shrink-0"
            alt="Chevron"
            src="./homepage/chevron_right.svg"
          />
        </div>
      </article>

      <article className="self-stretch bg-[#fff2f2] overflow-hidden flex flex-col items-start justify-start p-12 gap-6">
        <header className="flex flex-row items-center justify-start gap-4 text-2xl font-display">
          <h3 className="relative leading-[150%] font-extrabold">
            Mega Sprints
          </h3>
          <span className="rounded-full bg-[#f55c38] h-[32px] flex flex-row items-center justify-center px-2 box-border text-xs text-white font-[Amazon Ember]">
            <p className="relative leading-[170%] font-medium">
              Upcoming
            </p>
          </span>
        </header>
        <p className="self-stretch relative leading-[170%] font-medium text-[#3a3a3a]">
          Comprehensive Programs Leading to Exciting Competitive Robotics Challenges.
        </p>
        <div className="flex flex-row items-center justify-start gap-1 text-[#f55c38]">
          <p className="relative leading-[170%] font-medium">
            Learn More
          </p>
          <img
            className="relative w-6 h-6 overflow-hidden flex-shrink-0"
            alt="Chevron"
            src="./homepage/chevron_right.svg"
          />
        </div>
      </article>
    </aside>
  </div>
</section>
<section className="relative w-full min-h-screen text-left text-white flex items-start overflow-hidden">
  <img
    className="absolute top-0 left-0 w-full h-full object-cover"
    alt="Background video"
    src="./homepage/video 2.svg"
  />

  <div className="relative z-10 flex flex-col items-start justify-start gap-8 px-4 md:px-8 lg:px-16 py-8">
    <h2 className="md:text-4xl lg:text-2xl font-extrabold leading-tight">
      Take a Sneak Peak at AFE Innovation Hub
    </h2>

    <a
      href="#"
      className="rounded-full bg-white h-16 flex items-center justify-center px-6 py-3 text-lg text-[#29458c] font-[Amazon Ember] hover:bg-gray-100 transition-colors duration-300"
    >
      <span className="font-medium">Start Virtual Tour</span>
    </a>
  </div>
</section>
<section className="relative w-full flex flex-col items-start justify-start gap-8 text-[#29458c] px-4 mt-16">
  <header className="w-full font-extrabold leading-[150%]">
    Latest From The Innovation Hub
  </header>

  <div className="w-full flex items-center justify-between relative">
    <button className="w-12 h-12 flex items-center justify-center overflow-hidden">
      <img
        className="object-cover"
        alt="Previous"
        src="./homepage/chevron_left.svg"
      />
    </button>

    <div className="flex flex-grow overflow-hidden gap-4">
      <figure className="flex-grow relative overflow-hidden">
        <img
          className="object-cover w-full h-full"
          alt="Innovation Hub Image 1"
          src="./homepage/Rectangle 6.svg"
        />
      </figure>
      <figure className="flex-grow relative overflow-hidden">
        <img
          className="object-cover w-full h-full"
          alt="Innovation Hub Image 2"
          src="./homepage/Rectangle 7.svg"
        />
      </figure>
      <figure className="flex-grow relative overflow-hidden">
        <img
          className="object-cover w-full h-full"
          alt="Innovation Hub Image 3"
          src="./homepage/Rectangle 8.svg"
        />
      </figure>
    </div>

    <button className="w-12 h-12 flex items-center justify-center overflow-hidden">
      <img
        className="object-cover"
        alt="Next"
        src="./homepage/chevron_right_black.svg"
      />
    </button>
  </div>
</section>
<section className="relative mx-4 lg:mx-12 flex flex-col items-start justify-start gap-4 text-[#29458c] py-8">
  <h2 className="text-2xl font-extrabold leading-[150%]">
    Have Any Questions?
  </h2>
  <p className="text-base leading-[170%] font-[Amazon Ember] text-[#3a3a3a]">
    <strong>
      <span>Reach out to us at </span>
      <a href="mailto:afeinnovation@ihub.com" className="text-[#f55c38]">
        afeinnovation@ihub.com
      </a>
    </strong>
  </p>
</section>

<footer className="relative bg-[#ffad33] w-full h-[102px] text-[24px]">
  <section className="flex flex-row items-center justify-between w-full h-full px-12">
    <div className="flex flex-row items-center gap-4">
      <img
        className="w-[38px] h-[38px]"
        alt="Innovation Hub Logo"
        src="./homepage/reshot-icon-molecules-YBNSD562JC 1.svg"
      />
      <h1 className="text-lg font-extrabold leading-[150%]">
        Innovation Hub
      </h1>
    </div>

    <b className="text-sm font-[AmazonEmber]">
      Privacy Policy
    </b>

    <nav className="flex flex-row items-center gap-4">
      <a href="https://www.linkedin.com">
        <img
          className="w-[32px] h-[32px]"
          alt="LinkedIn"
          src="./homepage/Linkedin.svg"
        />
      </a>
      <a href="https://www.twitter.com">
        <img
          className="w-[32px] h-[32px]"
          alt="Twitter"
          src="./homepage/Twitter.svg"
        />
      </a>
    </nav>
  </section>
</footer>
</div>
  )
};

export default HomePage;

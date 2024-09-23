"use client";

import CreateAClass from "./CreateAClass";
import Popup from "../sprintPages/nanopage/_component/Popup";
import Footer from "../sprintPages/nanopage/_component/Footer";
import type { NextPage } from "next";
import { useState, useCallback,useEffect } from "react";
import Header from "../sprintPages/nanopage/_component/Header";
import SecondPopup from "../sprintPages/nanopage/_component/SecondPopup";


interface PopupProps {

  offlinePopup: boolean;

  handleOfflineBookingClose: () => void;

  handleClose: () => void;

}
const HomePage:  NextPage<PopupProps>  = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isHelpDeskPopupOpen, setIsHelpDeskPopupOpen] = useState(false);
  const [offlinePopup, setOfflinePopup] = useState<boolean>(false);
  const [openSecondPopup, setOpenSecondPopup] = useState<boolean>(false);

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

  // Function to handle button click to open the helpdesk popup
  const handleHelpDeskPopup = () => {
    setIsHelpDeskPopupOpen(true);
  };

  // Function to close the helpdesk popup
  const closeHelpDeskPopup = () => {
    setIsHelpDeskPopupOpen(false);
  };


  const handleOfflineBooking : ()=> void = () => {
    setOfflinePopup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
  };

  const handleOfflineBookingClose : () => void = () => {
    setOfflinePopup(false);
    setOpenSecondPopup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
  };

  const handleClose = ()=>{
    setOfflinePopup(false);
    document.body.classList.remove("overflow-hidden");
  }
  // Close the second popup after 2 seconds
  useEffect(() => {
    if (openSecondPopup) {
      const timer = setTimeout(() => {
        setOpenSecondPopup(false);
        document.body.classList.remove("overflow-hidden");
      }, 5000);

      return () => clearTimeout(timer); // Clean up the timer on unmount or change
    }
  }, [openSecondPopup]);

  return (
    <div className="w-full relative bg-white min-h-screen overflow-hidden text-left text-xl md:text-2xl text-[#3a3a3a] font-['Amazon Ember Display']">
      {/* <Header/> */}
      <Header
      isLoggedIn={false}
      handleOfflineBooking={handleOfflineBooking}
      offlinePopup={offlinePopup}
      openSecondPopup={openSecondPopup}
    />
      {/* First Section */}
      <section className="relative w-full min-h-screen text-center text-xl md:text-2xl text-[#3a3a3a] font-['Amazon Ember Display']">
        <video
          src="./homepage/video.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
          autoPlay
          muted
        ></video>

        {/* <img
          className="absolute top-[2vw] left-[2vw] w-[4vw] h-[4vw] overflow-hidden"
          alt=""
          src="./homepage/reshot-icon-molecules-YBNSD562JC 1.svg"
        /> */}

        <header className="absolute top-[25%] left-[2vw] max-w-[1200px] mx-auto flex flex-col gap-6 items-start text-left">
          <div className="w-full flex flex-col gap-4 items-start">
            <h1 className="w-[60vw] relative font-extrabold leading-[150%] text-white text-[2.5vw]">
              WELCOME TO AMAZON FUTURE ENGINEER MAKERSPACE
            </h1>
            <h2 className="relative text-[1.5vw] leading-[150%] font-extrabold text-white">
              A Cutting-Edge Robotics and AI Lab for Educators and Students
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
            {/* <button
              className="flex items-center justify-center px-4 py-2 bg-gray-200 text-[#f55c38] rounded-full h-12 md:h-14 gap-2"
              onClick={handleHelpDeskPopup}
            >
              <img
                src="./nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg"
                alt="helpdesk"
              />
              <span className="relative font-medium leading-[170%]">
                Helpdesk
              </span>
            </button> */}
            <button className="flex items-center justify-center px-4 py-2 bg-gray-200 text-[#f55c38] rounded-full h-12 md:h-14">
              <span className="relative font-medium leading-[170%]">
                Take a Virtual Tour
              </span>
            </button>
          </div>
        </header>
        {/* {isHelpDeskPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <Popup closeHelpDeskPopup={closeHelpDeskPopup} />
          </div>
        )} */}

        {/* <nav
          className="absolute top-[2vw] right-[2vw] flex items-center justify-center px-8 py-2 bg-gray-200 text-[#f55c38] rounded-full h-12 md:h-14 text-[14px] md:text-[18px] cursor-pointer"
          onClick={handleBookSessionClick}
        >
          <span className="relative font-medium leading-[170%]">Login</span>
        </nav> */}

        

        {/* <div className="absolute top-[2vw] right-[14vw] flex items-center justify-center px-2 bg-gray-200/70 rounded-full h-8 md:h-12 gap-1 text-[12px] md:text-[14px] text-white">
          <button className="flex items-center justify-center px-3 py-2 bg-[#f55c38] rounded-full h-6 md:h-8 font-medium leading-5">
            Eng
          </button>
          <button className="flex items-center justify-center px-3 py-2 rounded-full h-6 md:h-8 text-[#3a3a3a]">
            ಅಇಈ
          </button>
        </div> */}
      </section>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <CreateAClass closePopup={closePopup} />
        </div>
      )}

      {/* Second Section */}
      <section className="relative w-full min-h-screen overflow-visible text-left text-xl text-[#29458c] mt-16 md:mt-24">
        <article className="w-full flex flex-col items-start justify-start gap-4 px-4 md:px-12 md:mb-10">
          <h2 className="relative font-extrabold leading-[150%] md:text-[28px]">
            What is the AFE Innovation Hub?
          </h2>
          <p className="w-full md:w-1/2 relative text-[18px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
            AFE Studio is a state-of-the-art Robotics and AI lab dedicated to
            empowering over 4,000 students by 2024. Our lab offers an
            unparalleled opportunity for students to dive into the fascinating
            realms of computer science and robotics. Designed with innovation in
            mind, AFE Studio provides an interactive and immersive environment
            where students can experiment, learn, and grow.
          </p>
        </article>

        <div className="w-full flex flex-col md:flex-row items-start justify-start gap-4 px-4 md:px-12 overflow-visible">
          <figure className="w-full md:w-[33%] h-[360px]">
            <img
              className="object-cover w-full h-full"
              alt="AFE Hub Image 1"
              src="./homepage/Rectangle 4(2).svg"
            />
          </figure>
          <figure className="w-full md:w-[66%] h-[360px]">
            <img
              className="object-cover w-full h-full"
              alt="AFE Hub Image 2"
              src="./homepage/Rectangle 3-new.svg"
            />
          </figure>
          <figure className="w-full md:w-[33%] h-[360px]">
            <img
              className="object-cover w-full h-full"
              alt="AFE Hub Image 3"
              src="./homepage/Rectangle 5-new.svg"
            />
          </figure>
        </div>
      </section>
      <section className="relative w-full bg-[#29458c] flex flex-col items-start justify-start py-[80px] px-4 md:px-12 gap-[48px] text-white">
        <header className="w-full md:w-[793px] flex flex-col items-start justify-start gap-[16px]">
          <h2 className="relative leading-[150%] font-extrabold text-[28px] md:text-[32px]">
            How it Works?
          </h2>
          <p className="self-stretch relative text-[16px] md:text-[22px] leading-[170%] font-medium font-[Amazon Ember]">
            There are a few simple steps that you can take to book a sprint
            session for your students.
          </p>
        </header>

        <div className="w-full flex flex-col items-center justify-start gap-8 text-[20px] md:text-[24px]">
          <div className="w-full flex items-center justify-start gap-8 gap-y-12">
            <div className="w-full lg:w-[25%] flex flex-col items-center justify-start">
              <img
                className="w-[140px] h-[140px] object-cover"
                alt="Step 1"
                src="./homepage/Lottie flies.gif"
              />
            </div>
            <div className="w-full lg:w-[25%] flex flex-col items-center justify-start">
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
              <h3 className="relative leading-[150%] font-extrabold text-[24px]">
                Get to Know Innovation Hub
              </h3>
              <p className="relative text-center text-[20px] leading-[150%] font-medium font-['Amazon Ember']">
                Take a look around at what we do at Innovation Hub with the
                latest happenings or our virtual tour.
              </p>
            </article>

            <article className="w-full md:w-[calc(50%-16px)] lg:w-[383px] flex flex-col items-center justify-start gap-2">
              <h3 className="relative leading-[150%] font-extrabold text-[24px]">
                Check Out Sprint Details
              </h3>
              <p className="relative text-center text-[20px] leading-[150%] font-medium font-['Amazon Ember']">
                Explore if the sprint fits your needs and learning goals.
              </p>
            </article>

            <article className="w-full md:w-[calc(50%-16px)] lg:w-[383px] flex flex-col items-center justify-start gap-2">
              <h3 className="relative leading-[150%] font-extrabold text-[24px]">
                Book and Get Ready
              </h3>
              <p className="relative text-center text-[20px] leading-[150%] font-medium font-['Amazon Ember']">
                Easily find suitable slots and book via our system or call us.
              </p>
            </article>

            <article className="w-full md:w-[calc(50%-16px)] lg:w-[383px] flex flex-col items-center justify-start gap-2">
              <h3 className="relative leading-[150%] font-extrabold text-[24px]">
                Visit & Enjoy the Tinkering
              </h3>
              <p className="relative text-center text-[20px] leading-[150%] font-medium font-['Amazon Ember']">
                Get hands-on for the actual fun at the lab.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="relative w-full flex flex-col items-start justify-start gap-12 text-[#29458c] px-4 mt-16 mb-16 md:px-12">
        <article className="w-full max-w-screen-lg flex flex-col items-start justify-start gap-6">
          <h2 className="w-full leading-[150%] font-extrabold text-2xl md:text-[28px]">
            What to Expect at AFE Makerspace
          </h2>
          <p className="w-full text-lg leading-[170%] font-medium text-[#3a3a3a] lg:w-3/4 md:text-[20px]">
            Teachers can easily schedule lab sessions and integrate Maker's
            Space into their lesson plans/ Curriculum. Pick a program and embark
            on a transformative STEM journey with your students.
          </p>
        </article>

        <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6 text-[18px] text-white font-[Amazon Ember]">
          <section className="flex-1 bg-[#29458c] flex flex-col items-start justify-start p-12 relative gap-8 min-h-[80vh] lg:min-h-[calc(100vh-14.5rem)]">
            <div className="w-full max-w-screen-md flex flex-col items-start justify-start gap-4 z-0">
              <header className="flex flex-row items-center justify-start gap-4 text-[24px] font-bold">
                <h3 className="leading-[150%] font-extrabold text-white">
                  Nano Sprints
                </h3>
                <span className="rounded-full bg-[#049796] h-8 flex items-center justify-center px-4 text-sm font-medium">
                  Active
                </span>
              </header>
              <p className="w-full leading-[170%] font-medium">
                One day sessions designed to spark interest and build
                aspiration.
              </p>
              <div className="flex flex-row items-center gap-2">
                <figure className="w-11 h-8">
                  <img
                    src="./homepage/reshot-icon-time-YEDR7WZV2Q.svg"
                    alt="Icon"
                  />
                </figure>
                <p className="leading-[170%] font-medium">1 Day (3 hours)</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <figure className="w-[44px] h-[32px]">
                  <img
                    src="./homepage/reshot-icon-student-DRC3YF56MU.svg"
                    alt="Student icon"
                  />
                </figure>
                <p className="leading-[170%] font-medium">
                  30 to 40 students per session
                </p>
              </div>
              <div>
                <button className="rounded-full bg-white text-[#29458c] px-8 py-2.5 text-lg">
                  Book a Session
                </button>
              </div>
            </div>

            <img
              className="absolute right-0 top-12 lg:top-[22.5%] lg:right-[5%] w-[30%] lg:w-[50%] z-10"
              alt="Decorative graphic"
              src="./homepage/Vector.svg"
            />
          </section>

          <aside className="w-full lg:w-[30%] flex flex-col gap-6">
            <article className="w-full bg-[#cdeaea] flex flex-col items-start p-12 gap-6 h-full">
              <header className="flex flex-row items-center justify-start gap-4 text-2xl font-bold">
                <h3 className="leading-[1.5] font-extrabold text-[#29458c]">
                  Mini Sprints
                </h3>
                <span className="rounded-full bg-[#f55c38] h-8 flex items-center justify-center px-4 text-sm text-white font-medium">
                  Upcoming
                </span>
              </header>
              <p className="leading-[170%] font-medium text-[#3a3a3a]">
                Multi-day workshops focusing on specific STEM topics.
              </p>
              <div className="flex flex-row items-center text-[#f55c38]">
                <p className="leading-[170%] font-medium">Learn More</p>
                <img
                  className="w-6 h-6 ml-1"
                  alt="Chevron"
                  src="./homepage/chevron_right.svg"
                />
              </div>
            </article>

            <article className="w-full bg-[#fff2f2] flex flex-col items-start p-12 gap-6 h-full">
              <header className="flex flex-row items-center justify-start gap-4 text-2xl font-bold">
                <h3 className="leading-[150%] font-extrabold text-[#29458c]">
                  Mega Sprints
                </h3>
                <span className="rounded-full bg-[#f55c38] h-8 flex items-center justify-center px-2 text-sm text-white font-medium">
                  Upcoming
                </span>
              </header>
              <p className="leading-[170%] font-medium text-[#3a3a3a]">
                Comprehensive Programs Leading to Exciting Competitive Robotics
                Challenges.
              </p>
              <div className="flex flex-row items-center text-[#f55c38]">
                <p className="leading-[170%] font-medium">Learn More</p>
                <img
                  className="w-6 h-6 ml-1"
                  alt="Chevron"
                  src="./homepage/chevron_right.svg"
                />
              </div>
            </article>
          </aside>
        </div>
      </section>

      <section className="relative min-h-screen text-left text-white flex items-start overflow-hidden md:mx-6">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Background video"
          src="./homepage/video 2.svg"
        />

        <div className="relative z-10 flex flex-col items-start justify-start gap-8 mx-6 px-4 md:px-8 py-8 lg:mx-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
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

      <section className="relative mx-4 md:mt-12 lg:mx-12 flex flex-col items-start justify-start gap-8 text-[#29458c]">
        <header className="w-full md:text-[30px] font-extrabold leading-[150%]">
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
                src="./homepage/Rectangle-new1.svg"
              />
            </figure>
            <figure className="flex-grow relative overflow-hidden">
              <img
                className="object-cover w-full h-full"
                alt="Innovation Hub Image 2"
                src="./homepage/Rectangle-new2.svg"
              />
            </figure>
            <figure className="flex-grow relative overflow-hidden">
              <img
                className="object-cover w-full h-full"
                alt="Innovation Hub Image 3"
                src="./homepage/Rectangle-new3.svg"
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
        <h2 className="text-2xl font-extrabold leading-[150%] md:text-[25px]">
          Have Any Questions?
        </h2>
        <p className="text-base leading-[170%] font-[Amazon Ember] text-[#3a3a3a] md:text-[20px]">
          <strong>
            <span>Reach out to us at </span>
            <a href="mailto:afeinnovation@ihub.com" className="text-[#f55c38]">
              afeinnovation@ihub.com
            </a>
          </strong>
        </p>
      </section>
      <Footer />
      <Popup offlinePopup={offlinePopup}
      handleOfflineBookingClose={handleOfflineBookingClose}
      // openSecondPopup={openSecondPopup}
      handleClose={handleClose}/>
      {openSecondPopup && <SecondPopup />}
    </div>
  );
};

export default HomePage;
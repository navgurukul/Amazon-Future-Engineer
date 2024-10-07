"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CallPopup from "../sprintPages/nanopage/_component/CallPopup";
import SecondPopup from "../sprintPages/nanopage/_component/SecondPopup";
import CreateAClass from "./CreateAClass";
import Cookies from "js-cookie";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";


const HomePage: NextPage = () => {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isHelpDeskPopupOpen, setIsHelpDeskPopupOpen] = useState(false);
  const [offlinePopup, setOfflinePopup] = useState<boolean>(false);
  const [openSecondPopup, setOpenSecondPopup] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === "A" &&
        target.getAttribute("href") === "#virtual-tour"
      ) {
        e.preventDefault();
        const section = document.querySelector("#virtual-tour");

        if (section) {
          const headerHeight = 120;
          const sectionPosition =
            section.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: sectionPosition - headerHeight,
            behavior: "smooth",
          });
        }
      }
    };

    // Attach event listener to the document for smooth scrolling
    document.addEventListener("click", handleSmoothScroll);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  const onFrameContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  // Function to handle button click to open the popup
  const handleBookSessionClick = () => {
    const cookieData = Cookies.get("loginData");
    if (cookieData) {
      router.push("/sprintPages/nanopage");
    } else {
      setIsPopupOpen(true);
    }
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

  // Function to handle redirection on "Learn More" button click
  // const handleLearnMoreMiniClick = () => {
  //   router.push("/sprintPages/minipage");
  // };

  // const handleLearnMoreMegaClick = () => {
  //   router.push("/sprintPages/megapage");
  // };

  const handleLearnMoreClick = (type: any) => {
    const loginData = localStorage.getItem("loginData");
    if (loginData) {
      if (type === "mini") {
        router.push("/sprintPages/minipage");
      } else if (type === "mega") {
        router.push("/sprintPages/megapage");
      }
    } else {
      alert("Please login to continue");
    }
  };

  const handleOfflineBooking: () => void = () => {
    setOfflinePopup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
  };

  const handleOfflineBookingClose: () => void = () => {
    setOfflinePopup(false);
    setOpenSecondPopup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
  };

  const handleClose = () => {
    setOfflinePopup(false);
    document.body.classList.remove("overflow-hidden");
  };
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
        handleBookSessionClick={handleBookSessionClick}
        handleOfflineBooking={handleOfflineBooking}
        offlinePopup={offlinePopup}
        openSecondPopup={openSecondPopup}
        bookingPopup={false}
        bgColor="home"
      />
      {/* First Section */}
      {/* <section className="relative w-full min-h-screen text-center text-xl md:text-2xl text-[#3a3a3a] font-['Amazon Ember Display']">
        <video
          src="./homepage/video.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
          autoPlay
          muted
        ></video>

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
            <button className="flex items-center justify-center px-4 py-2 bg-gray-200 text-[#f55c38] rounded-full h-12 md:h-14">
              <span className="relative font-medium leading-[170%]">
                Take a Virtual Tour
              </span>
            </button>
          </div>
        </header>
      </section> */}

      <section className="relative w-full min-h-screen text-center text-xl md:text-2xl text-[#3a3a3a] font-['Amazon Ember Display']">
        <video
          src="./homepage/video.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
          autoPlay
          muted
        ></video>

        <header className="absolute top-[20%] left-0 max-w-[1000px] mx-auto flex flex-col gap-6 items-start text-left px-4 md:px-12">
          <div className="w-full flex flex-col gap-4 items-start">
            {/* <div className="h-[126px] w-[800px]"> */}
              {/* <div className="text-white text-[42px] font-extrabold font-['Amazon Ember Display'] leading-[63px]"> */}
              <div className="text-[#f0f0f0] md:text-web-light-background-default text-heading5 md:text-heading4 font-heading4-bold leading-[150%]">
                Come build the future with us at the Amazon Future Engineer
                Makerspace
              </div>
            {/* </div> */}
            {/* <div className="w-[800px] h-[72px]"> */}
              {/* <div className="w-full relative text-[1.5rem] leading-[150%] font-extrabold text-white text-left inline-block font-['Amazon Ember Display']"> */}
              <div className="text-[#f0f0f0] md:text-web-light-background-default text-heading6 font-heading6-bold leading-[150%]">
                A one-of-a-kind Robotics and AI Lab for students and educators
                in Bangalore
              </div>
            {/* </div> */}
          </div>

          <div className="flex flex-col md:flex-row xs:gap-2 sm:gap-4 md:gap-4 lg:gap-8 items-start text-[16px] md:text-[18px] text-white w-full">
            <button
              className="flex items-center justify-center md:px-2 md:py-2 lg:px-10 lg:py-4 bg-[#f55c38] rounded-full h-12 md:h-14 lg:h-16 w-full md:w-auto cursor-pointer"
              onClick={handleBookSessionClick}
            >
              <span className="relative font-medium leading-[170%]">
                Book a Session Online
              </span>
            </button>
            <button
              className="flex items-center justify-center md:px-4 md:py-4 lg:px-10 lg:py-4 bg-gray-200 text-[#f55c38] rounded-full h-12 md:h-14 lg:h-16 w-full md:w-auto gap-4"
              onClick={handleOfflineBooking}
            >
              <Image
                className="w-6 h-6 sm:w-8 sm:h-8 overflow-hidden"
                alt="Helpdesk Icon"
                src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg"
                width={24}
                height={24}
                sizes="(min-width: 640px) 32px"
              />
              <span className="relative font-medium leading-[170%]">
                Call Us
              </span>
            </button>
            <button className="flex items-center justify-center md:px-4 md:py-4 lg:px-10 lg:py-4 bg-gray-200 text-[#f55c38] rounded-full h-12 md:h-14 lg:h-16 w-full md:w-auto font-medium leading-[170%]">
              <a href="#virtual-tour">
                {/* <span className="relative font-medium leading-[170%]"> */}
                  Take Virtual Tour
                {/* </span> */}
              </a>
            </button>
          </div>
        </header>
      </section>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <CreateAClass closePopup={closePopup} />
        </div>
      )}

      {/* Second Section */}
      {/* <section className="relative w-full min-h-screen overflow-visible text-left text-xl text-[#29458c] mt-16 md:mt-24">
        <article className="w-full flex flex-col items-start justify-start gap-4 px-4 md:px-12 md:mb-10">
          <h2 className="relative font-extrabold leading-[150%] text-[20px] md:text-[28px]">
            What is the AFE Makerspace?
          </h2>
          <p className="w-full md:w-1/2 relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
            AFE Studio is a state-of-the-art Robotics and AI lab dedicated to empowering over 4,000 students by 2024. Our lab offers an unparalleled opportunity for students to dive into the fascinating realms of computer science and robotics. Designed with innovation in mind, AFE Studio provides an interactive and immersive environment where students can experiment, learn, and grow
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
      </section> */}
      <section className="relative w-full overflow-visible text-left text-xl text-[#29458c] py-12 md:mt-16">
        <article className="w-full flex flex-col items-start justify-start gap-4 px-4 md:px-12 mb-10">
          {/* <h2 className="relative leading-[150%] text-5xl md:text-[25px] font-extrabold"> */}
          <h2 className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold">
            What is the AFE Makerspace?
          </h2>
          <div>
            {/* <p className="w-full md:w-1/2 relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']"> */}
            <p className="w-full md:w-1/2 relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
              At the AFE Makerspace, we provide exciting learning opportunities
              in robotics and computer science for students. Our goal is to give
              them a glimpse into the careers of the future, encouraging them to
              think big while exploring and creating
            </p>
            {/* <p className="w-full md:w-1/2 relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember'] mt-4"> */}
            <p className="w-full md:w-1/2 relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray mt-4">
              By prioritizing government school students, we ensure equitable
              access and support diverse talent in shaping the future of
              technology
            </p>
            <img className="md:block hidden absolute m-0 top-[7.5rem] left-[63.3rem] max-w-full h-[18.369rem] z-0" src="./homepage/Frame 31751.svg" alt="Coding symbols 1" />
          </div>
        </article>

        <div className="w-full overflow-x-auto flex flex-row items-start justify-start gap-4 px-4 md:px-12">
          <figure className="flex-none w-[calc(100vw-64px)] h-[calc((100vw-32px)*0.6)] md:w-[24%] md:h-[360px]">
            <Image
              className="object-cover w-full h-full rounded-md"
              alt="AFE Hub Image 1"
              // src="./homepage/Rectangle 4(2).svg"
              src="/homepage/Rectangle4-2.jpeg"
              width={480}
              height={288}
            />
          </figure>
          <figure className="flex-none w-[calc(100vw-32px)] h-[calc((100vw-32px)*0.6)] md:w-[50%] md:h-[360px] z-10">
            <Image
              className="object-cover w-full h-full rounded-md"
              alt="AFE Hub Image 2"
              // src="./homepage/Rectangle 3-new.svg"
              src="/homepage/Rectangle3-2.jpeg"
              width={640}
              height={360}
            />
          </figure>
          <figure className="flex-none w-[calc(100vw-64px)] h-[calc((100vw-32px)*0.6)] md:w-[24%] md:h-[360px] z-10">
            <Image
              className="object-cover w-full h-full rounded-md"
              alt="AFE Hub Image 3"
              // src="./homepage/Rectangle 5-new.svg"
              src="/homepage/Rectangle5-2.jpeg"
              width={480}
              height={288}
            />
          </figure>
        </div>
      </section>

      {/* Third Section */}
      {/* <section className="relative w-full bg-[#29458c] flex flex-col items-start justify-start py-[80px] px-4 md:px-12 gap-[48px] text-white">
        <header className="w-full md:w-[793px] flex flex-col items-start justify-start gap-[16px]">
          <h2 className="relative leading-[150%] font-extrabold text-[28px] md:text-[32px]">
            How it Works?
          </h2>
          <p className="self-stretch relative text-[16px] md:text-[22px] leading-[170%] font-medium font-[Amazon Ember]">
            There are a few simple steps that you can take to book a sprint
            session for your students
          </p>
        </header>

        <div className="w-full flex flex-col items-center justify-start gap-8 text-[20px] md:text-[24px]">
          <div className="w-full flex items-center justify-start gap-8 gap-y-12">
            <div className="w-full lg:w-[25%] flex flex-col items-center justify-start">
              <Image
                className="w-[140px] h-[140px] object-cover"
                alt="Step 1"
                src="./homepage/Lottie flies.gif"
              />
            </div>
            <div className="w-full lg:w-[25%] flex flex-col items-center justify-start">
              <Image
                className="w-[140px] h-[140px] object-cover"
                alt="Step 2"
                src="./homepage/Lottie flies.gif"
              />
            </div>
            <div className="w-full lg:w-[25%] flex flex-col items-center justify-start">
              <Image
                className="w-[140px] h-[140px] object-cover"
                alt="Step 3"
                src="./homepage/Lottie flies.gif"
              />
            </div>
            <div className="w-full lg:w-[25%] flex flex-col items-center justify-start">
              <Image
                className="w-[140px] h-[140px] object-cover"
                alt="Step 4"
                src="./homepage/Lottie flies.gif"
              />
            </div>
          </div>

          <Image
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
                Easily find suitable slots and book via our system or 
                .
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
      </section> */}
      <section className="relative w-full bg-[#29458c] flex flex-col items-start justify-start py-[48px] md:py-[64px] px-4 md:px-12 gap-[48px] text-white">
        <header className="w-full lg:w-[50vw] flex flex-col items-start justify-start gap-[16px]">
          {/* <h2 className="relative leading-[150%] font-extrabold text-[28px] md:text-[32px]"> */}
          <h2 className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold">
            Are You a Government School Teacher in or around Bengaluru?
          </h2>
          {/* <p className="self-stretch relative text-[16px] md:text-[22px] leading-[170%] font-medium font-[Amazon Ember]"> */}
          <p className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember']">
            Help inspire the next generation of tech leaders by registering your
            students to visit the AFE Makerspace in a few simple steps:
          </p>
        </header>

        <div className="w-full overflow-x-auto no-scrollbar">
          {/* <div className="flex flex-row items-start justify-between gap-8 w-full">
            <Image
              className="w-[20vw] min-w-[180px] h-[170px] object-cover"
              alt="Step 1"
              src="/homepage/Lottie flies.gif"
              width={300}
              height={180}
            />
            <Image
              className="w-[20vw] min-w-[180px] h-[170px] object-cover"
              alt="Step 2"
              src="/homepage/Lottie flies.gif"
              width={300}
              height={180}
            />
            <Image
              className="w-[20vw] min-w-[180px] h-[170px] object-cover"
              alt="Step 3"
              src="/homepage/Lottie flies.gif"
              width={300}
              height={180}
            />
            <Image
              className="w-[20vw] min-w-[180px] h-[170px] object-cover"
              alt="Step 4"
              src="/homepage/Lottie flies.gif"
              width={300}
              height={180}
            />
          </div> */}

          {/* <div className="flex justify-center mx-12 ml-8 md:ml-0 w-[880px] lg:w-full">
      <Image
        className="h-[24px] object-contain w-full"
        alt="Process Overview"
        src="./homepage/Frame 31704.svg"
      />
    </div> */}

          <div className="flex flex-row items-start gap-8 mt-4 w-full">
            <article className="flex flex-col items-center w-[80vw] min-w-[180px]">
              <Image
              className="w-[15vw] min-w-[180px] h-[170px] object-cover"
              alt="Step 1"
              src="/homepage/Lottie flies.gif"
              width={300}
              height={180}
            />
              {/* <h3 className="font-extrabold lg:text-[24px] md:text-[18px] text-[15px] leading-[150%] text-center mb-3"> */}
              <h3 className="text-bodyM2 md:text-subTitle1 leading-[170%] font-['Amazon Ember'] text-center mb-3">
                Visit AFE Makerspace Virtually
              </h3>
              {/* <p className="lg:text-[19px] md:text-[16px] text-[13px] leading-[150%] font-medium font-[Amazon Ember] text-center"> */}
              <p className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-center">
                Take a look at the lab through the{" "}
                <a
                  href="#virtual-tour"
                  className="text-[#f55c38] cursor-pointer"
                >
                  virtual tour
                </a>
              </p>
            </article>

            <article className="flex flex-col items-center w-[80vw] min-w-[180px]">
              <Image
              className="w-[15vw] min-w-[180px] h-[170px] object-cover"
              alt="Step 2"
              src="/homepage/Lottie flies.gif"
              width={300}
              height={180}
            />
              {/* <h3 className="font-extrabold lg:text-[24px] md:text-[18px] text-[15px] leading-[150%] text-center mb-3"> */}
              <h3 className="text-bodyM2 md:text-subTitle1 leading-[170%] font-['Amazon Ember'] text-center mb-3">
                Discover Our Programs
              </h3>
              {/* <p className="lg:text-[19px] md:text-[16px] text-[13px] leading-[150%] font-medium font-[Amazon Ember] text-center"> */}
              <p className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-center">
                We offer three programs: Nano, Mini, and Mega sprints. Choose
                the one that best fit your classrooms learning goals
              </p>
            </article>

            <article className="flex flex-col items-center w-[80vw] min-w-[180px]">
              <Image
              className="w-[15vw] min-w-[180px] h-[170px] object-cover"
              alt="Step 3"
              src="/homepage/Lottie flies.gif"
              width={300}
              height={180}
            />
              {/* <h3 className="font-extrabold lg:text-[24px] md:text-[18px] text-[15px] leading-[150%] text-center mb-3"> */}
              <h3 className="text-bodyM2 md:text-subTitle1 leading-[170%] font-['Amazon Ember'] text-center mb-3">
                Book Your Session
              </h3>
              {/* <p className="lg:text-[19px] md:text-[16px] text-[13px] leading-[150%] font-medium font-[Amazon Ember] text-center"> */}
              <p className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-center">
                Select a time slot and book your session through our online
                system or by calling us on 
                <a
                  href="tel:+916366969292"
                  className="text-[#f55c38] cursor-pointer"
                >
                   {" "}+916366969292
                </a>
                  . Currently, we are only
                taking bookings for Nano sprints
              </p>
            </article>

            <article className="flex flex-col items-center w-[80vw] min-w-[180px]">
              <Image
              className="w-[15vw] min-w-[180px] h-[170px] object-cover"
              alt="Step 4"
              src="/homepage/Lottie flies.gif"
              width={300}
              height={180}
            />
              {/* <h3 className="font-extrabold lg:text-[24px] md:text-[18px] text-[15px] leading-[150%] text-center mb-3"> */}
              <h3 className="text-bodyM2 md:text-subTitle1 leading-[170%] font-['Amazon Ember'] text-center mb-3">
                Visit and Start Learning
              </h3>
              {/* <p className="lg:text-[19px] md:text-[16px] text-[13px] leading-[150%] font-medium font-[Amazon Ember] text-center"> */}
              <p className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-center">
                Bring your students to AFE Makerspace and enjoy a hands-on
                experience with robotics and AI!
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      {/* <section className="relative w-full flex flex-col items-start justify-start gap-12 text-[#29458c] px-4 mt-16 mb-16 md:px-12">
  <article className="w-full max-w-screen-lg flex flex-col items-start justify-start gap-6">
    <h2 className="w-full leading-[150%] font-extrabold text-5xl md:text-[25px]">
      What to Expect at AFE Makerspace
    </h2>
    <p className="w-full md:w-1/2 lg:w-3/4 relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
      Teachers can easily schedule lab sessions and integrate Maker's Space into
      their lesson plans/ Curriculum. Pick a program and embark on a
      transformative STEM journey with your students.
    </p>
  </article>

  <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6 text-[18px] text-white font-[Amazon Ember]">
    <section className="flex-1 bg-[#29458c] flex flex-col items-start justify-start p-12 relative gap-8 min-h-[80vh] lg:min-h-[calc(100vh-14.5rem)]">
      <div className="w-full max-w-screen-md flex flex-col items-start justify-start gap-4 z-0">
        <header className="flex flex-row items-center justify-start gap-4 text-[17px] font-bold">
          <h3 className="leading-[150%] font-bold md:font-extrabold text-white">
            Nano Sprints
          </h3>
          <span className="rounded-full bg-[#049796] h-8 flex items-center justify-center px-4 text-sm font-medium">
            Active
          </span>
        </header>
        <p className="w-full leading-[170%] font-medium text-[14px] md:text-[20px]">
          One day sessions designed to spark interest and build aspiration.
        </p>
        <div className="flex flex-row items-center gap-2">
          <figure className="w-11 h-8">
            <Image src="./homepage/reshot-icon-time-YEDR7WZV2Q.svg" alt="Icon" />
          </figure>
          <p className="leading-[170%] font-medium  text-[14px] md:text-[20px]">
            1 Day (3 hours)
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <figure className="w-[44px] h-[32px]">
            <Image
              src="./homepage/reshot-icon-student-DRC3YF56MU.svg"
              alt="Student icon"
            />
          </figure>
          <p className="leading-[170%] font-medium  text-[14px] md:text-[20px]">
            30 to 40 students per session
          </p>
        </div>
        <div>
          <button
            className="rounded-full bg-white text-[#29458c] px-4 py-1 md:px-8 md:py-2.5 text-lg font-bold"
            onClick={handleBookSessionClick}
          >
            Book a Session
          </button>
        </div>
      </div>
      
    </section>

    <aside className="w-full lg:w-[30%] flex flex-col gap-6 min-h-[80vh] lg:min-h-[calc(100vh-14.5rem)]">
      <article className="w-full bg-[#cdeaea] flex flex-col items-start p-12 gap-6 h-full">
        <header className="flex flex-row items-center justify-start gap-4 text-2xl font-bold">
          <h3 className="leading-[1.5] font-extrabold text-[#29458c]">
            Mini Sprints
          </h3>
          <span className="rounded-full bg-[#f55c38] h-8 flex items-center justify-center px-4 text-sm text-white font-medium">
            Upcoming
          </span>
        </header>
        <p className="leading-[170%] font-medium text-[#3a3a3a]  text-[14px] md:text-[20px]">
          Multi-day workshops focusing on specific STEM topics.
        </p>
        <button
          className="flex flex-row items-center text-[#f55c38]"
          onClick={handleLearnMoreMiniClick}
        >
          <p className="leading-[170%] font-medium">Learn More</p>
          <Image
            className="w-6 h-6 ml-1"
            alt="Chevron"
            src="./homepage/chevron_right.svg"
          />
        </button>
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
        <p className="leading-[170%] font-medium text-[#3a3a3a]  text-[14px] md:text-[20px]">
          Comprehensive Programs Leading to Exciting Competitive Robotics
          Challenges.
        </p>
        <button
          className="flex flex-row items-center text-[#f55c38]"
          onClick={handleLearnMoreMegaClick}
        >
          <p className="leading-[170%] font-medium">Learn More</p>
          <Image
            className="w-6 h-6 ml-1"
            alt="Chevron"
            src="./homepage/chevron_right.svg"
          />
        </button>
      </article>
    </aside>
  </div>
</section> */}
      <section className="relative w-full flex flex-col items-start justify-start gap-12 text-[#29458c] px-4 mt-16 mb-16 md:px-12">
        <article className="w-full max-w-screen-lg flex flex-col items-start justify-start gap-6">
          {/* <h2 className="w-full leading-[150%] font-extrabold text-5xl md:text-[25px]"> */}
          <h2 className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold">
            Programs at AFE Makerspace
          </h2>
          {/* <p className="w-full md:w-1/2 lg:w-3/4 relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
      Teachers can easily schedule lab sessions and integrate Maker's Space into
      their lesson plans/ Curriculum. Pick a program and embark on a
      transformative STEM journey with your students.
    </p> */}
        </article>

        <div className="w-full flex flex-col lg:flex-row items-stretch justify-start gap-6 text-[18px] text-white font-[Amazon Ember]">
          <section className="flex-1 bg-[#29458c] flex flex-col items-start justify-start p-4 md:p-12 relative gap-8 lg:min-h-[calc(100vh-14.5rem)] rounded-md">
            <div className="w-full max-w-screen-md flex flex-col items-start justify-start gap-4 z-0">
              <header className="flex flex-row items-center justify-start gap-4 text-[17px] font-bold">
                {/* <h3 className="leading-[150%] font-bold md:font-extrabold text-white"> */}
                <h3 className="leading-[150%] text-subHeading1 md:text-heading6 font-heading5-bold">
                  Nano Sprints
                </h3>
                <span className="rounded-full bg-[#049796] h-8 flex items-center justify-center px-4 text-sm font-medium leading-[170%] text-body2">
                  Active
                </span>
              </header>
              {/* <p className="w-full leading-[170%] font-medium text-[14px] md:text-[20px]"> */}
              <p className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember']">
                The Nano Sprint Program offers a quick and engaging introduction
                into the world of Robotics and AI
              </p>
              <div className="flex flex-row items-center gap-4 mb-[8px] md:mb-[16px]">
                <figure className="w-11 h-8">
                  <Image
                    src="./homepage/reshot-icon-time-YEDR7WZV2Q.svg"
                    alt="Icon"
                    width={44}
                    height={32}
                  />
                </figure>
                {/* <p className="leading-[170%] font-medium text-[14px] md:text-[20px]"> */}
                <p className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember']">
                  1 Day (3 hours)
                </p>
              </div>
              <div className="flex flex-row items-center gap-4 mb-[16px]">
                <figure className="w-[44px] h-[32px]">
                  <Image
                    src="./homepage/reshot-icon-student-DRC3YF56MU.svg"
                    alt="Student icon"
                    width={44}
                    height={32}
                  />
                </figure>
                {/* <p className="leading-[170%] font-medium text-[14px] md:text-[20px]"> */}
                <p className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember']">
                  30 to 40 students per session
                </p>
              </div>
              {/* <p className="w-full leading-[170%] font-medium text-[14px] md:text-[20px]"> */}
              <p className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember']">
                Registrations are open!
              </p>
              <div>
                <button
                  className="w-[82vw] md:w-auto rounded-full bg-white text-[#f55c38] px-8 py-4 text-lg font-bold mt-8"
                  onClick={handleBookSessionClick}
                >
                  Book a Session
                </button>
              </div>
            </div>
            <img className="hidden md:block absolute m-0 top-[33.5rem] left-[52rem] max-w-full h-[8rem] z-0" src="/homepage/Frame 31749.svg" alt="Coding Symbols 2" />
            <img className="md:hidden block absolute m-0 top-[0.2px] left-[16.9rem] max-w-full h-[4rem] z-0" src="/homepage/Frame 31750.svg" alt="Coding Symbols 2" />
          </section>

          <aside className="w-full lg:w-[30%] flex flex-col gap-6 lg:min-h-[calc(100vh-14.5rem)]">
            <article className="w-full bg-[#cdeaea] flex flex-col items-start p-4 md:p-12 gap-6 h-full rounded-md">
              <header className="flex flex-row items-center justify-start gap-4 text-2xl font-bold">
                {/* <h3 className="leading-[1.5] font-extrabold text-[#29458c]"> */}
                <h3 className="leading-[150%] text-subHeading1 md:text-heading6 font-heading5-bold text-[#29458c]">
                  Mini Sprints
                </h3>
                <span className="rounded-full bg-[#ffad33] h-8 flex items-center justify-center px-4 text-sm text-white font-medium">
                  Upcoming
                </span>
              </header>
              {/* <p className="leading-[170%] font-medium text-[#3a3a3a] text-[14px] md:text-[20px]"> */}
              <p className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
                Multi-day skill building workshops
              </p>
              <button
                className="w-[82vw] md:w-auto rounded-full bg-white text-[#f55c38] px-8 py-4 text-lg font-bold md:mt-8"
                // onClick = {handleLearnMoreMiniClick}
                onClick={() => handleLearnMoreClick("mini")}
              >
                <p className="leading-[170%] font-medium">Learn More</p>
                {/* <Image
            className="w-6 h-6 ml-1"
            alt="Chevron"
            src="./homepage/chevron_right.svg"
          /> */}
              </button>
            </article>

            <article className="w-full bg-[#fdded7] flex flex-col items-start p-4 md:p-12 gap-6 h-full rounded-md">
              <header className="flex flex-row items-center justify-start gap-4 text-2xl font-bold">
                {/* <h3 className="leading-[150%] font-extrabold text-[#29458c]"> */}
                <h3 className="leading-[150%] text-subHeading1 md:text-heading6 font-heading5-bold text-[#29458c]">
                  Mega Sprints
                </h3>
                <span className="rounded-full bg-[#ffad33] h-8 flex items-center justify-center px-4 text-sm text-white font-medium">
                  Upcoming
                </span>
              </header>
              {/* <p className="leading-[170%] font-medium text-[#3a3a3a]  text-[14px] md:text-[20px]"> */}
              <p className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
                Comprehensive programs leading to exciting competitive robotics
                challenges
              </p>
              <button
                className="w-[82vw] md:w-auto rounded-full bg-white text-[#f55c38] px-8 py-4 text-lg font-bold md:mt-8"
                // onClick = {handleLearnMoreMiniClick}
                onClick={() => handleLearnMoreClick("mega")}
              >
                <p className="leading-[170%] font-medium">Learn More</p>
                {/* <Image
            className="w-6 h-6 ml-1"
            alt="Chevron"
            src="./homepage/chevron_right.svg"
          /> */}
              </button>
            </article>
          </aside>
        </div>
      </section>

      {/* Fifth Section */}
      <section
        id="virtual-tour"
        className="relative h-[60vh] md:h-screen text-left text-white flex items-start overflow-hidden mx-4 md:mx-12"
      >
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50 rounded-lg"
          alt="Background video"
          // src="./homepage/video 2.svg"
          src="/homepage/Video image.jpeg"
          width={1920} 
          height={1080}
        />

        <div className="relative z-10 flex flex-col items-start justify-start gap-8 px-4 md:px-8 py-8 lg:mx-6">
          {/* <h2 className="leading-[150%] text-5xl md:text-[25px] font-extrabold leading-tight"> */}
          <h2 className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold leading-tight">
            Take a Sneak Peak at AFE Makerspace
          </h2>

          <a
            href="#"
            className="w-full md:w-auto rounded-full bg-white h-12 md:h-16 flex items-center justify-center px-6 py-3 text-lg text-[#f55c38] font-[Amazon Ember] hover:bg-gray-100 transition-colors duration-300"
          >
            <span className="font-medium">Take Virtual Tour</span>
          </a>
        </div>
      </section>
      {/* Sixth Section */}
      {/* <section className="relative mx-4 md:mt-12 lg:mx-12 flex flex-col items-start justify-start gap-8 text-[#29458c]">
        <header className="w-full text-5xl md:text-[25px] font-extrabold leading-[150%]">
          Latest From AFE Makerspace
        </header>

        <div className="w-full flex items-center justify-between relative">
          <button className="w-12 h-12 flex items-center justify-center overflow-hidden">
            <Image
              className="object-cover"
              alt="Previous"
              src="./homepage/chevron_left.svg"
            />
          </button>

          <div className="flex flex-grow overflow-hidden gap-4">
            <figure className="flex-grow relative overflow-hidden">
              <Image
                className="object-cover w-full h-full"
                alt="Innovation Hub Image 1"
                src="./homepage/Rectangle-new1.svg"
              />
            </figure>
            <figure className="flex-grow relative overflow-hidden">
              <Image
                className="object-cover w-full h-full"
                alt="Innovation Hub Image 2"
                src="./homepage/Rectangle-new2.svg"
              />
            </figure>
            <figure className="flex-grow relative overflow-hidden">
              <Image
                className="object-cover w-full h-full"
                alt="Innovation Hub Image 3"
                src="./homepage/Rectangle-new3.svg"
              />
            </figure>
          </div>

          <button className="w-12 h-12 flex items-center justify-center overflow-hidden">
            <Image
              className="object-cover"
              alt="Next"
              src="./homepage/chevron_right_black.svg"
            />
          </button>
        </div>
      </section> */}
      {/* <section className="relative mx-4 mt-8 md:mt-12 md:mx-12 flex flex-col items-start justify-start gap-8 text-[#29458c]">
  <header className="w-full text-5xl md:text-[25px] font-extrabold leading-[150%]">
    Latest From AFE Makerspace
  </header>

  <div className="w-full flex items-center justify-between relative">
    <button className="w-12 h-12 flex items-center justify-center overflow-hidden hidden sm:flex">
      <Image
        className="object-cover"
        alt="Previous"
        src="./homepage/chevron_left.svg"
      />
    </button>

    <div className="w-full overflow-x-auto flex flex-row items-start justify-start gap-4 px-4">
      <figure className="flex-none w-[calc(100vw-80px)] h-[calc((100vw-32px)*0.6)] md:w-[32%] md:h-[calc((100vw-32px)*0.22)]">
        <Image
          className="object-cover w-full h-full"
          alt="Innovation Hub Image 1"
          src="./homepage/Rectangle-new1.svg"
        />
      </figure>
      <figure className="flex-none w-[calc(100vw-80px)] h-[calc((100vw-32px)*0.6)] md:w-[33%] md:h-[calc((100vw-32px)*0.22)]">
        <Image
          className="object-cover w-full h-full"
          alt="Innovation Hub Image 2"
          src="./homepage/Rectangle-new2.svg"
        />
      </figure>
      <figure className="flex-none w-[calc(100vw-80px)] h-[calc((100vw-32px)*0.6)] md:w-[32%] md:h-[calc((100vw-32px)*0.22)]">
        <Image
          className="object-cover w-full h-full"
          alt="Innovation Hub Image 3"
          src="./homepage/Rectangle-new3.svg"
        />
      </figure>
    </div>

    <button className="w-12 h-12 flex items-center justify-center overflow-hidden hidden sm:flex">
      <Image
        className="object-cover"
        alt="Next"
        src="./homepage/chevron_right_black.svg"
      />
    </button>
  </div>
</section> */}

      <section className="relative mx-4 md:mx-12 flex flex-col items-start justify-start gap-4 text-[#29458c] py-8 md:py-16">
        {/* <h2 className="w-full text-5xl font-extrabold leading-[150%] md:text-[25px]"> */}
        <h2 className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold">
          Have Questions or Want to Book a Session?
        </h2>
        {/* <p className="text-base leading-[170%] font-[Amazon Ember] text-[#3a3a3a] md:text-[20px]"> */}
        <p className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
          <strong>
            {/* <span>Reach out to us at </span>
            <a href="mailto:afeinnovation@ihub.com" className="text-[#f55c38]">
              afeinnovation@ihub.com
            </a>
            */}
            <span> Call or Whatsapp us on </span>
            <a href="tel:+919875466343" className="text-[#f55c38]">
              +916366969292
            </a>
          </strong>
        </p>
      </section>
      <Footer handleOfflineBooking={handleOfflineBooking} />
      <CallPopup
        offlinePopup={offlinePopup}
        handleOfflineBookingClose={handleOfflineBookingClose}
        // openSecondPopup={openSecondPopup}
        handleClose={handleClose}
      />
      {openSecondPopup && <SecondPopup />}
    </div>
  );
};

export default HomePage;

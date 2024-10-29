"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ErrorBookingPopup from "../booking/_components/ErrorBookingPopup";
import CallPopup from "../sprintPages/nanopage/_component/CallPopup";
import SecondPopup from "../sprintPages/nanopage/_component/SecondPopup";
import CreateAClass from "./CreateAClass";
import SmartImage from "@/components/SmartImage";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import type { NextPage } from "next";

import { useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { useAppState } from "@/context/AppContext";

const HomePage: NextPage = () => {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isHelpDeskPopupOpen, setIsHelpDeskPopupOpen] = useState(false);
  const [offlinePopup, setOfflinePopup] = useState<boolean>(false);
  const [openSecondPopup, setOpenSecondPopup] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isLanguageEnglish } = useAppState(); // Access language state

  // Array of images
  const images = [
    {
      src: "/homepage/Rectangle4-3.jpeg",
      alt: "AFE Hub SmartImage 1",
      width: 480,
      height: 288,
    },
    {
      src: "/homepage/Rectangle3-3.jpeg",
      alt: "AFE Hub SmartImage 2",
      width: 640,
      height: 360,
    },
    {
      src: "/homepage/Rectangle5-3.jpeg",
      alt: "AFE Hub SmartImage 3",
      width: 480,
      height: 288,
    },
  ];

  // Function to handle next and previous image navigation
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

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
          // const headerHeight = 120;
          const isMobile = window.innerWidth <= 425;
          const headerHeight = isMobile ? 180 : 120;
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

  const handleLearnMoreClick = (type: any) => {
    // const loginData = localStorage.getItem("loginData");
    // if (loginData) {
    const cookieData = Cookies.get("loginData");
    if (cookieData) {
      if (type === "mini") {
        router.push("/sprintPages/minipage");
      } else if (type === "mega") {
        router.push("/sprintPages/megapage");
      }
    } else {
      // alert("Please login to continue");
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

  const whatsappMessage = encodeURIComponent("Hello! I am a teacher interested in learning more about the AFE Makerspace and booking a session for my students. Please share the next steps. Thank you!");
  const whatsappLink = `https://wa.me/6366969292?text=${whatsappMessage}`;

  const [copied, setCopied] = useState(false);

  const phoneNumber = " +91 63669-69292";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        setCopied(true); // Show "Copied!" message

        // Reset the message after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

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

      <section className="relative w-full h-[920px] md:h-auto md:min-h-screen overflow-hidden">
        <video
          // src="/amazon/makerspace-blr/homepage/video-m.mp4"
          src="/amazon/makerspace-blr/homepage/AFE Lab website banner.mp4"
          className="absolute inset-0 top-0 left-0 w-full h-full object-cover brightness-50 bg-black-600"
          autoPlay
          muted
          loop
          preload="metadata"
        ></video>

        <header className="absolute top-[208px] md:top-[168px] left-0 max-w-[1000px] mx-auto flex flex-col gap-6 items-start text-left px-4 md:px-12">
          <div className="w-full flex flex-col gap-4 items-start pb-6 md:pb-8">
            {/* <div className="h-[126px] w-[800px]"> */}
            {/* <div className="text-white text-[42px] font-extrabold font-['Amazon Ember Display'] leading-[63px]"> */}
            {/* <div className="text-[#f0f0f0] md:text-web-light-background-default text-heading5 md:text-heading4 font-heading4-bold leading-[150%]">
              {isLanguageEnglish
                ? "Come build the future with us at the Amazon Future Engineer Makerspace"
                : "ಅಮೆಜಾನ್ ಫ್ಯೂಚರ್ ಎಂಜಿನಿಯರ್ ಮೇಕರ್‌ಸ್ಪೇಸ್‌ನಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸಿ"}
            </div> */}
            <div className="text-[#f0f0f0] md:text-web-light-background-default text-heading5 md:text-heading4 font-heading4-bold leading-[150%]">
              {/* Come build the future with us at the Amazon Future Engineer
              Makerspace */}
              {isLanguageEnglish
                ? "Come build the future with us at the Amazon Future Engineer Makerspace"
                : "ಬನ್ನಿ ಅಮೆಜಾನ್ ಫ್ಯೂಚರ್ ಇಂಜಿನಿಯರ್ ಮೇಕರ್‌ಸ್ಪೇಸ್‌ನಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ನಿಮ್ಮ ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸಿ."}

            </div>

            {/* </div> */}
            {/* <div className="w-[800px] h-[72px]"> */}
            {/* <div className="w-full relative text-[1.5rem] leading-[150%] font-extrabold text-white text-left inline-block font-['Amazon Ember Display']"> */}
            <div className="flex gap-4 items-center mb-4">
              <div className="text-[#f0f0f0] md:text-web-light-background-default text-heading6 font-heading6-bold leading-[150%] w-[100%]">
                {isLanguageEnglish ? "Operated by " : "ನಿರ್ವಹಿಸುತ್ತದೆ"}
              </div>
              <SmartImage
                className="object-cover w-[100%] h-[56px] relative"
                alt="TIS Logo"
                src="/login/Logo TIS 1.svg"
                width={24}
                height={24}
              />
            </div>
            <div className="text-[#f0f0f0] md:text-web-light-background-default text-heading6 font-heading6-bold leading-[150%]">
              {/* <span>
                {" "}
                A one-of-a-kind Robotics and AI Lab for students and educators
                in
              </span> */}
              <span>
                {isLanguageEnglish
                  ? "A one-of-a-kind Robotics and AI Lab for students and educators"
                  : "ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಶಿಕ್ಷಕರಿಗಾಗಿ ಒಂದೇ ರೀತಿಯ ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು ಎಐ ಲ್ಯಾಬ್"}
              </span>
              <br />
              {/* <span>Bangalore</span> */}
              <span>
                {isLanguageEnglish ? "Bangalore" : "ಬೆಂಗಳೂರು"}
              </span>
            </div>

            {/* </div> */}
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            {/* <Button variant="proceed" onClick={handleBookSessionClick}>
              Book a Session Online
            </Button> */}
            <Button variant="proceed" onClick={handleBookSessionClick}>
              {isLanguageEnglish
                ? "Book a Session"
                : "ಆನ್‌ಲೈನ್ ಸೆಷನ್‌ನ್ನು ಬುಕ್ ಮಾಡಿ"}
            </Button>

            <Button variant="proceedWhite" onClick={handleOfflineBooking}>
              <div className="flex gap-3 items-center">
                <SmartImage
                  alt="Helpdesk Icon"
                  src="/nanopage/reshot-icon-phone-XZTUCW7SFA 1.svg"
                  width={24}
                  height={24}
                  sizes="(min-width: 640px) 32px"
                />
                {/* <span className="relative font-medium leading-[170%]">
                  Call Us
                </span> */}
                <span className="relative font-medium leading-[170%]">
                  {isLanguageEnglish
                    ? "Call Us"
                    : "ನಮ್ಮನ್ನು ಕರೆ ಮಾಡಿ"}
                </span>
              </div>
            </Button>

            {/* <Button variant="proceedWhite">
              <a href="#virtual-tour">
                Take Virtual Tour
              </a>
            </Button> */}
          </div>
        </header>
      </section>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <CreateAClass closePopup={closePopup} />
          {/* <ErrorBookingPopup closePopup={closePopup} /> */}
        </div>
      )}

      <section className="relative w-full overflow-visible text-center text-xl text-midnight-blue-main py-4 mt-12 md:py-12 md:mt-16 pb-12 md:pb-16">
        <article className="w-full flex flex-col items-center justify-center gap-4 px-4 md:px-12 mb-6 md:mb-8">
          {/* <h2 className="relative leading-[150%] text-5xl md:text-[25px] font-extrabold"> */}
          {/* <h2 className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold">
            What is the AFE Makerspace?
          </h2> */}
          <h2 className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold">
            {isLanguageEnglish
              ? "What is the Amazon Future Engineer Makerspace?"
              : "AFE ಮೇಕರ್‌ಸ್ಪೇಸ್ ಏನು?"}
          </h2>
          <div className="flex flex-col items-center justify-center">
            {/* <p className="w-full md:w-1/2 relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3A3A3A] font-['Amazon Ember']"> */}
            {/* <p className="w-full md:w-1/2 relative text-bodyM md:text-body1 leading-[170%] font-body1-regular text-darkslategray">
              At the AFE Makerspace, we provide exciting learning opportunities
              in robotics and computer science for students. Our goal is to give
              them a glimpse into the careers of the future, encouraging them to
              think big while exploring and creating
            </p> */}
            <p className="w-full md:w-3/4 relative text-bodyM md:text-body1 leading-[170%] font-body1-regular text-darkslategray">
              {isLanguageEnglish
                ? "The Amazon Future Engineer Makerspace is a Robotics and AI lab built by AFE and operated by our partner, The Innovation Story (TIS). At the AFE Makerspace, we provide exciting learning opportunities in robotics and computer science, offering students a glimpse into future careers while encouraging them to think big as they explore and create"
                : "AFE ಮೇಕರ್‌ಸ್ಪೇಸ್‌ನಲ್ಲಿ, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್‌ನಲ್ಲಿ ರೋಚಕವಾದ ಕಲಿಕೆ ಸಾಧ್ಯತಗಳನ್ನು ನೀಡುತ್ತೇವೆ. ಅವರ ಭವಿಷ್ಯದ ವೃತ್ತಿಪರ ಬದುಕಿಗೆ ಒಂದು ಚಿಕ್ಕ ನೋಟವನ್ನು ನೀಡುವುದು ನಮ್ಮ ಉದ್ದೇಶ, ಅವರು ಅನ್ವೇಷಣೆ ಮತ್ತು ಸೃಷ್ಟಿಯ ಮೂಲಕ ದೊಡ್ಡದಾಗಿ ಯೋಚಿಸಲು ಪ್ರೇರೇಪಿಸುತ್ತೇವೆ."}
            </p>
            {/* <p className="w-full md:w-1/2 relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3A3A3A] font-['Amazon Ember'] mt-4"> */}
            {/* <p className="w-full md:w-1/2 relative text-bodyM md:text-body1 leading-[170%] font-body1-regular text-darkslategray mt-4">
              By prioritizing government school students, we ensure equitable
              access and support diverse talent in shaping the future of
              technology
            </p> */}

            <p className="w-full md:w-3/4 relative text-bodyM md:text-body1 leading-[170%] font-body1-regular text-darkslategray mt-4">
              {isLanguageEnglish
                ? "By prioritizing government school students, we ensure equitable access and support diverse talent in shaping the future of technology."
                : "ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಆದ್ಯತೆ ನೀಡುವ ಮೂಲಕ, ನಾವು ತಾರತಮ್ಯವಿಲ್ಲದ ಪ್ರವೇಶವನ್ನು ಖಚಿತಪಡಿಸುತ್ತೇವೆ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸುವಲ್ಲಿ ವೈವಿಧ್ಯಮಯ ಪ್ರತಿಭೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತೇವೆ."}
            </p>

            {/* <img className="md:block hidden absolute m-0 top-[7.5rem] left-[63.3rem] max-w-full h-[18.369rem] z-0" src="./homepage/Frame 31751.svg" alt="Coding symbols 1" /> */}
            {/* <SmartImage
              className="hidden md:block absolute top-[7.5vw] left-[59.8vw] w-[30vw] h-auto max-w-full z-0"
              src="./homepage/Frame 31751.svg"
              alt="Coding symbols 1"
              height={288}
              width={480}
            /> */}
          </div>
        </article>

        <div className="relative w-full overflow-hidden flex flex-row items-start justify-start gap-4 px-4 md:px-12">
          {/* Figures for medium and large screens */}
          <figure className="hidden md:block flex-none w-[calc(100vw-64px)] h-[calc((100vw-32px)*0.6)] md:w-[25%] md:h-[360px]">
            <SmartImage
              className="object-cover w-full h-full rounded-md"
              alt={images[0].alt}
              src={images[0].src}
              width={images[0].width}
              height={images[0].height}
            />
          </figure>
          <figure className="hidden md:block flex-none w-[calc(100vw-32px)] h-[calc((100vw-32px)*0.6)] md:w-[48%] md:h-[360px] z-10">
            <SmartImage
              className="object-cover w-full h-full rounded-md"
              alt={images[1].alt}
              src={images[1].src}
              width={images[1].width}
              height={images[1].height}
            />
          </figure>
          <figure className="hidden md:block flex-none w-[calc(100vw-64px)] h-[calc((100vw-32px)*0.6)] md:w-[25%] md:h-[360px] z-10">
            <SmartImage
              className="object-cover w-full h-full rounded-md"
              alt={images[2].alt}
              src={images[2].src}
              width={images[2].width}
              height={images[2].height}
            />
          </figure>

          {/* SmartImage Carousel for Small Screens */}
          <div className="block md:hidden w-full h-[calc((100vw-32px)*0.6)] relative">
            <figure className="flex-none w-full h-full">
              <SmartImage
                className="object-cover w-full h-full rounded-md"
                alt={images[currentIndex].alt}
                src={images[currentIndex].src}
                width={images[currentIndex].width}
                height={images[currentIndex].height}
              />
            </figure>

            {/* Left arrow */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full bg-midnight-blue-dark"
              onClick={prevImage}
            >
              &#60;
            </button>

            {/* Right arrow */}
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full bg-midnight-blue-dark"
              onClick={nextImage}
            >
              &#62;
            </button>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#d4dae8] flex flex-col items-center justify-center py-12 md:py-16 px-4 md:px-12 gap-[0px] text-white">
        <header className="w-full flex flex-col items-center justify-start gap-[16px]">
          {/* <div className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold">
            Are You a Government School Teacher in or around Bengaluru?
          </div> */}
          <div className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold text-midnight-blue-main">
            {isLanguageEnglish
              ? "Are You a Government School Teacher?"
              : "ನೀವು ಬೆಂಗಳೂರು ಅಥವಾ ಅದ್ಭುತ ಪ್ರದೇಶದ ಸರ್ಕಾರಿ ಶಾಲಾ ಶಿಕ್ಷಕರಾ?"}
          </div>

          {/* <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular">
            Help inspire the next generation of tech leaders by registering your
            students to visit the AFE Makerspace in a few simple steps:
          </div> */}
          <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular text-darkslategray">
            {isLanguageEnglish
              ? "Help inspire the next generation of tech leaders by registering your students to visit the AFE Makerspace in a few simple steps:"
              : "ತಾಂತ್ರಿಕ ನಾಯಕರ ಮುಂದಿನ ತಲೆಮಾರನ್ನು ಪ್ರೇರೇಪಿಸಲು, ಕೆಲವು ಸರಳ ಹಂತಗಳಲ್ಲಿ ನಿಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು AFE ಮೇಕರ್‌ಸ್ಪೇಸ್‌ ಗೆ ನೋಂದಾಯಿಸಿ:"}
          </div>
        </header>

        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-6 md:gap-8 md:mt-8 mt-6 w-full">
            <article className="flex flex-col items-center w-full md:w-1/4">
              <SmartImage
                alt="Step 1"
                // src="/homepage/reshot-icon-family-visit-95EYAPUK63.svg"
                src="/homepage/AFE Labs Icons_Visit AFE Makerspace Virtually 02 1.svg"
                width={64}
                height={64}
              />
              <div>
                {/* <div className="text-bodyM2 md:text-subTitle1 leading-[170%] font-subTitle1-bold text-center mt-4 mb-2">
                  Visit AFE Makerspace Virtually
                </div> */}
                <div className="text-bodyM2 md:text-subTitle1 leading-[170%] font-subTitle1-bold text-center mt-4 mb-2 text-midnight-blue-main">
                  {isLanguageEnglish
                    ? "Visit AFE Makerspace Virtually"
                    : "AFE ಮೇಕರ್‌ಸ್ಪೇಸ್‌ಗೆ ವರ್ಚುವಲ್ ಭೇಟಿ ನೀಡಿರಿ"}
                </div>
                <div className="text-bodyM md:text-body1 leading-[170%] text-center inline-block text-white font-body1-regular">
                  {/* <span className="font-medium">{`Take a look at the lab through the `}</span> */}
                  <span className="font-medium text-darkslategray">
                    {isLanguageEnglish
                      ? "Take a "
                      : "ಲೇಬ್ನಲ್ಲಿ ನೋಡಿ "}
                  </span>
                  {/* <b className="text-tomato">virtual tour</b> */}
                  {/* <a href="#virtual-tour" className="text-tomato">virtual tour</a> */}
                  <a href="#virtual-tour" className="text-tomato">
                    {isLanguageEnglish ? "virtual tour" : "ವರ್ಚುವಲ್ ಟೂರ್"}
                  </a>
                  <span className="font-medium text-darkslategray">
                    {isLanguageEnglish
                      ? " to explore our lab"
                      : "ಲೇಬ್ನಲ್ಲಿ ನೋಡಿ "}
                  </span>
                </div>
              </div>
            </article>

            <article className="flex flex-col items-center w-full md:w-1/4">
              <SmartImage
                alt="Step 2"
                // src="/homepage/reshot-icon-sprinting-68QMTNKEPC.svg"
                src="/homepage/AFE Labs Icons_Discover Our Programs 02 1.svg"
                width={64}
                height={64}
              />
              <div>
                {/* <div className="text-bodyM2 md:text-subTitle1 leading-[170%] font-subTitle1-bold text-center mt-4 mb-2">
                  Discover Our Programs
                </div> */}
                <div className="text-bodyM2 md:text-subTitle1 leading-[170%] font-subTitle1-bold text-center mt-4 mb-2 text-midnight-blue-main">
                  {isLanguageEnglish
                    ? "Discover Our Programs"
                    : "ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಅನ್ವೇಷಿಸಿ"}
                </div>

                {/* <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular text-center">
                  We offer three programs: Nano, Mini, and Mega sprints. Choose
                  the one that best fit your classrooms learning goals.
                </div> */}
                <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular text-center text-darkslategray">
                  {isLanguageEnglish
                    ? "Choose Nano, Mini, or Mega based on your classroom's goals"
                    : "ನಾವು ಮೂರು ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ: ನಾನೊ, ಮಿನಿ ಮತ್ತು ಮೆಗಾ ಸ್ಪ್ರಿಂಟ್ಸ್. ನಿಮ್ಮ ವರ್ಗದ ಶಿಕ್ಷಣ ಗುರಿಗಳಿಗೆ ಒಪ್ಪುವ ಒಂದನ್ನು ಆಯ್ಕೆ ಮಾಡಿ."}
                </div>
              </div>
            </article>

            <article className="flex flex-col items-center w-full md:w-1/4">
              <SmartImage
                alt="Step 3"
                // src="/homepage/reshot-icon-shape-click-UR7J3LH2YE.svg"
                src="/homepage/AFE Labs Icons_Book Your Session 02 1.svg"
                width={64}
                height={64}
              />
              <div>
                {/* <div className="text-bodyM2 md:text-subTitle1 leading-[170%] font-subTitle1-bold text-center mt-4 mb-2">
                  Book Your Session
                </div> */}
                <div className="text-bodyM2 md:text-subTitle1 leading-[170%] font-subTitle1-bold text-center mt-4 mb-2 text-midnight-blue-main">
                  {isLanguageEnglish
                    ? "Book Your Session"
                    : "ನಿಮ್ಮ ಸೆಷನ್ ಅನ್ನು ಬುಕ್ ಮಾಡಿ"}
                </div>
                {/* <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular text-center">
                  Select a time slot and book your session through our online
                  system or by calling us on
                  <a
                    href={whatsappLink}
                    target="_blank"
                    className="text-[#f55c38] cursor-pointer"
                  >
                    {" "}
                    +9163669-69292
                  </a>
                  . Currently, we are only taking bookings for Nano sprints.
                </div> */}
                <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular text-center text-darkslategray">
                  {isLanguageEnglish
                    ? "Pick a time slot and book online or call"
                    : "ನೀವು ಆಸಕ್ತಿಯ ಸಮಯವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ನಮ್ಮ ಆನ್‌ಲೈನ್ ವ್ಯವಸ್ಥೆ ಮೂಲಕ ಅಥವಾ ನಮಗೆ ಕರೆ ಮಾಡುವ ಮೂಲಕ ನಿಮ್ಮ ಸೆಷನ್ ಅನ್ನು ಬುಕ್ ಮಾಡಿ"}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    className="text-[#f55c38] cursor-pointer"
                  >
                    {" "}
                    {isLanguageEnglish ? "+9163669-69292" : "+9163669-69292"}
                  </a>
                  {isLanguageEnglish
                    ? ". Nano Sprints available now"
                    : ". ಪ್ರಸ್ತುತ, ನಾವು ಕೇವಲ ನಾನೊ ಸ್ಪ್ರಿಂಟ್ಗಳಿಗಾಗಿ ಬುಕ್ಕಿಂಗ್‌ಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತೇವೆ."}
                </div>
              </div>
            </article>

            <article className="flex flex-col items-center w-full md:w-1/4">
              <SmartImage
                alt="Step 4"
                // src="/homepage/reshot-icon-deep-learning-UY68HJABWD.svg"
                src="/homepage/AFE Labs Icons_Visit and Start Learning 02 1.svg"
                width={64}
                height={64}
              />
              <div>
                {/* <div className="text-bodyM2 md:text-subTitle1 leading-[170%] font-subTitle1-bold text-center mt-4 mb-2">
                  Visit and Start Learning
                </div>
                <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular text-center">
                  Bring your students to AFE Makerspace and enjoy a hands-on
                  experience with robotics and AI!
                </div> */}
                <div className="text-bodyM2 md:text-subTitle1 leading-[170%] font-subTitle1-bold text-center mt-4 mb-2 text-midnight-blue-main">
                  {isLanguageEnglish
                    ? "Visit and Start Learning"
                    : "ಬೇಟಿ ನೀಡಿ ಮತ್ತು ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ"}
                </div>
                <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular text-center text-darkslategray">
                  {isLanguageEnglish
                    ? "Bring your students and enjoy a hands-on experience with robotics and AI"
                    : "ನಿಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು AFE ಮೇಕರ್‌ಸ್ಪೇಸ್‌ ಗೆ ಕೊಂಡೊಯ್ಯಿರಿ ಮತ್ತು ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು AI ಯೊಂದಿಗೆ ಕೈಪಿಡಿ ಅನುಭವವನ್ನು ಆನಂದಿಸಿ!"}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-start justify-start gap-6 md:gap-8 text-[#29458c] my-12 md:my-16 md:w-3/4 mx-4 md:mx-auto">
        <article className="w-full flex flex-col items-center justify-start">
          {/* <h2 className="w-full leading-[150%] font-extrabold text-5xl md:text-[25px]"> */}
          {/* <div className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold">
            Programs at AFE Makerspace
          </div> */}
          <div className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold">
            {isLanguageEnglish
              ? "Programs at Amazon Future Engineer Makerspace"
              : "AFE ಮೇಕರ್‌ಸ್ಪೇಸ್‌ನಲ್ಲಿ ಕಾರ್ಯಕ್ರಮಗಳು"}
          </div>
        </article>

        <div className="w-full flex flex-col lg:flex-row items-stretch justify-start gap-6 md:gap-8 text-[#fff]">
          <section className="flex-1 bg-[#29458c] flex flex-col items-start justify-start p-4 md:p-8 relative gap-8 lg:min-h-full rounded-md">
            <div className="w-full max-w-screen-md flex flex-col items-start justify-start gap-6 md:gap-4 z-0">
              <header className="flex flex-row items-center justify-start gap-4 text-[17px] font-bold">
                {/* <h3 className="leading-[150%] font-bold md:font-extrabold text-white"> */}
                {/* <div className="leading-[150%] text-subHeading1 md:text-heading6 font-heading5-bold">
                  Nano Sprints
                </div> */}
                <div className="leading-[150%] text-subHeading1 md:text-heading6 font-heading5-bold">
                  {isLanguageEnglish
                    ? "Nano Sprints"
                    : "ನಾನೊ ಸ್ಪ್ರಿಂಟ್ಸ್"}
                </div>
                {/* <span className="rounded-full bg-[#049796] h-8 flex items-center justify-center px-4 text-sm font-medium leading-[170%] text-body2">
                  Active
                </span> */}
                <span className="rounded-full bg-[#049796] h-8 flex items-center justify-center px-4 text-sm font-medium leading-[170%] text-body2">
                  {isLanguageEnglish ? "Active" : " ಸಕ್ರಿಯ"}
                </span>
              </header>
              {/* <p className="w-full leading-[170%] font-medium text-[14px] md:text-[20px]"> */}
              {/* <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular">
                The Nano Sprint Program offers a quick and engaging introduction
                into the world of Robotics and AI
              </div> */}
              <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular">
                {isLanguageEnglish
                  ? "The Nano Sprint Program offers a quick and engaging introduction into the world of Robotics and AI."
                  : "ನಾನೊ ಸ್ಪ್ರಿಂಟ್ ಕಾರ್ಯಕ್ರಮವು ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು AI ಯ ಜಗತ್ತಿಗೆ ತ್ವರಿತ ಮತ್ತು ಆಕರ್ಷಕ ಪರಿಚಯವನ್ನು ನೀಡುತ್ತದೆ."}
              </div>
              <div className="flex flex-row items-center gap-4 mb-[8px] md:mb-[16px]">
                <figure className="w-11 h-8 flex items-center">
                  <SmartImage
                    src="./homepage/reshot-icon-time-YEDR7WZV2Q.svg"
                    alt="Icon"
                    width={44}
                    height={32}
                  />
                </figure>
                {/* <p className="leading-[170%] font-medium text-[14px] md:text-[20px]"> */}
                {/* <p className="text-bodyM md:text-body1 leading-[170%] font-body1-regular">
                  1 Day (3 hours)
                </p> */}
                <p className="text-bodyM md:text-body1 leading-[170%] font-body1-regular">
                  {isLanguageEnglish
                    ? "1 day session (3 hours)"
                    : "1 ದಿನ (3 ಗಂಟೆಗಳು)"}
                </p>
              </div>
              <div className="flex flex-row items-center gap-4 mb-[8px] md:mb-[16px]">
                <figure className="w-11 h-8 flex items-center">
                  <SmartImage
                    src="./homepage/reshot-icon-student-DRC3YF56MU.svg"
                    alt="Student icon"
                    width={44}
                    height={32}
                  />
                </figure>
                {/* <p className="leading-[170%] font-medium text-[14px] md:text-[20px]"> */}
                {/* <p className="text-bodyM md:text-body1 leading-[170%] font-body1-regular">
                  30 to 40 students per session
                </p> */}
                <p className="text-bodyM md:text-body1 leading-[170%] font-body1-regular">
                  {isLanguageEnglish
                    ? "30 to 40 Students per session"
                    : "ಒಂದು ಸೆಷನ್‌ಗೆ 30 ರಿಂದ 40 ವಿದ್ಯಾರ್ಥಿಗಳು"}
                </p>
              </div>
              <div className="flex flex-row items-center gap-4 mb-[8px] md:mb-[16px]">
                <figure className="w-11 h-8 flex items-center">
                  <SmartImage
                    src="./homepage/reshot-icon-student-class-JAMNVGK56B 1.svg"
                    alt="Student icon"
                    width={44}
                    height={32}
                  />
                </figure>
                {/* <p className="leading-[170%] font-medium text-[14px] md:text-[20px]"> */}
                {/* <p className="text-bodyM md:text-body1 leading-[170%] font-body1-regular">
                  30 to 40 students per session
                </p> */}
                <p className="text-bodyM md:text-body1 leading-[170%] font-body1-regular">
                  {isLanguageEnglish ? "Grades " : "ಗ್ರೇಡ್ಸ್ "}
                  {isLanguageEnglish ? "6 to 12" : "6 ರಿಂದ 12"}
                </p>
              </div>
              {/* <p className="w-full leading-[170%] font-medium text-[14px] md:text-[20px]"> */}
              {/* <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular">
                Registrations are open!
              </div> */}
              <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular">
                {isLanguageEnglish
                  ? "Registrations are open!"
                  : " ನೋಂದಣಿಗಳು ಓಪನ್ ಆಗಿವೆ!"}
              </div>
              <div className="w-full flex justify-between items-end">
                {/* <Button
                  variant='proceedWhite'
                  onClick={handleBookSessionClick}
                >
                  Book a Session
                </Button> */}
                <Button className="lg:absolute bottom-8 left-8" variant='proceedWhite' onClick={handleBookSessionClick}>
                  {isLanguageEnglish ? "Book a Session" : "ಆನ್‌ಲೈನ್ ಸೆಷನ್‌ನ್ನು ಬುಕ್ ಮಾಡಿ"}
                </Button>
                <SmartImage 
                className="absolute hidden md:block right-8 bottom-8"
                src="/homepage/AFE Labs Icons_NANO SPRINT - AFE Labs (White) 1.svg"
                alt="Mini Sprints"
                width={160}
              height={160}
                />
              </div>
            </div>

            {/* 
              // SmartImage for larger screens *
            <SmartImage
              className="hidden md:block absolute bottom-0 right-[10%] h-[8rem] z-0"
              src="/homepage/Frame 31749.svg"
              alt="Coding Symbols 2"
              width={76}
                    height={114}
           
            />
            //  SmartImage for smaller screens 
            <SmartImage
              className="md:hidden block absolute top-0 right-0 h-[4rem] z-0"
              src="/homepage/Frame 31750.svg"
              alt="Coding Symbols 2"
              width={76}
              height={114}

            />
            */}
          </section>

          <aside className="w-full lg:w-[40%] flex flex-col gap-6 md:gap-8 lg:min-h-full">
            <article className="w-full bg-[#049796] flex flex-col items-start p-4 md:p-8 gap-4 h-auto rounded-md">
              <header className="flex flex-row items-center justify-start gap-4 text-2xl font-bold">
                {/* <h3 className="leading-[1.5] font-extrabold text-[#29458c]"> */}
                {/* <div className="leading-[150%] text-subHeading1 md:text-heading6 font-heading5-bold text-[#29458c]">
                  Mini Sprints
                </div> */}
                <div className="leading-[150%] text-subHeading1 md:text-heading6 font-heading5-bold text-[#fff]">
                  {isLanguageEnglish ? "Mini Sprints" : "ಮಿನಿ ಸ್ಪ್ರಿಂಟ್ಸ್"}
                </div>
                {/* <span className="rounded-full bg-[#ffad33] h-8 flex items-center justify-center px-4 text-sm text-white font-medium">
                  Upcoming
                </span> */}
                <span className="rounded-full bg-[#29458c] h-8 flex items-center justify-center px-4 text-sm text-white font-medium">
                  {isLanguageEnglish ? "Upcoming" : "ಬರುವಿಕೆಯಲ್ಲಿ"}
                </span>
              </header>
              {/* <p className="leading-[170%] font-medium text-[#3a3a3a] text-[14px] md:text-[20px]"> */}
              {/* <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular text-darkslategray">
                Multi-day skill building workshops
              </div> */}
              <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular text-[#fff]">
                {isLanguageEnglish
                  ? "Multi-day skill building workshops"
                  : "ಬಹುದಿನಗಳ ಕೌಶಲ್ಯ ವೃದ್ಧಿ ಕಾರ್ಯಾಗಾರಗಳು"}
              </div>

              {/* <div className="pt-6 md:pt-8 w-full md:w-auto"> */}
              <div className="w-full flex justify-between items-end">
                {/* <Button
                  variant='proceedWhite'
                  // onClick = {handleLearnMoreMiniClick}
                  onClick={() => handleLearnMoreClick("mini")}
                // onClick={handleBookSessionClick}
                >
                  Learn More

                </Button> */}
                  <Button
                  variant='proceedWhite'
                  onClick={() => handleLearnMoreClick("mini")}
                >
                  {isLanguageEnglish ? "Learn More" : "ಹೆಚ್ಚು ತಿಳಿಯಿರಿ"}
                </Button>
                <SmartImage
                className="relative hidden md:block"
                src="/homepage/AFE Labs Icons_MINI SPRINT - AFE Labs (White) 1.svg"
                alt="Mini Sprints"
                width={64}
              height={64}
                />
              </div>
            </article>

            <article className="w-full bg-[#ffad33] flex flex-col items-start p-4 md:p-8 gap-4 h-auto rounded-md">
              <header className="flex flex-row items-center justify-start gap-4 text-2xl font-bold">
                {/* <h3 className="leading-[150%] font-extrabold text-[#29458c]"> */}
                {/* <h3 className="leading-[150%] text-subHeading1 md:text-heading6 font-heading5-bold text-[#29458c]">
                  Mega Sprints
                </h3> */}
                <h3 className="leading-[150%] text-subHeading1 md:text-heading6 font-heading5-bold text-[#fff]">
                  {isLanguageEnglish ? "Mega Sprints" : "ಮೆಗಾ ಸ್ಪ್ರಿಂಟ್ಸ್"}
                </h3>

                {/* <span className="rounded-full bg-[#ffad33] h-8 flex items-center justify-center px-4 text-sm text-white font-medium">
                  Upcoming
                </span> */}
                <span className="rounded-full bg-[#29458c] h-8 flex items-center justify-center px-4 text-sm text-white font-medium">
                  {isLanguageEnglish ? "Upcoming" : "ಬರುವಿಕೆಯಲ್ಲಿ"}
                </span>

              </header>
              {/* <p className="leading-[170%] font-medium text-[#3a3a3a]  text-[14px] md:text-[20px]"> */}
              {/* <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular text-darkslategray">
                Comprehensive programs leading to exciting competitive robotics
                challenges
              </div> */}
              <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular text-[#fff]">
                {isLanguageEnglish
                  ? "Comprehensive programs leading to exciting competitive robotics challenges"
                  : "ಆಕರ್ಷಕ ಸ್ಪರ್ಧಾತ್ಮಕ ರೋಬೋಟಿಕ್ಸ್ ಚಾಲೆಂಜ್‌ಗಳಿಗೆ ಬೆಳೆಸುವ ಸಮಗ್ರ ಕಾರ್ಯಕ್ರಮಗಳು"}
              </div>
              <div className="w-full flex justify-between items-end">
                <Button
                  variant='proceedWhite'
                  // onClick = {handleLearnMoreMiniClick}
                  onClick={() => handleLearnMoreClick("mega")}
                // onClick={handleBookSessionClick}
                >
                  {/* Learn More */}
                  {isLanguageEnglish ? "Learn More" : "ಹೆಚ್ಚು ತಿಳಿಯಿರಿ"}

                </Button>
                <SmartImage
                className="relative hidden md:block"
                src="/homepage/Mega Sprint - AFE Labs Icon (White) 1.svg"
                alt="Mega Sprints"
                width={64}
              height={64}
                />
              </div>
            </article>
          </aside>
        </div>
      </section>

      {/* Fifth Section */}
      <section
        id="virtual-tour"
        // className="relative h-[60vh] md:h-screen text-left text-white flex items-start overflow-hidden mx-4 md:mx-12"
        className="relative h-[60vh] md:h-screen text-white flex justify-center overflow-hidden md:w-3/4 mx-4 md:mx-auto"
      >
        <SmartImage
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50 rounded-lg"
          alt="Background video"
          // src="./homepage/video 2.svg"
          src="/homepage/Video image.jpeg"
          width={1920}
          height={1080}
        />

        <div className="relative z-10 flex flex-col items-start justify-start gap-4 px-4 md:px-8 pl-4 py-6 md:py-12 lg:mx-6">
          {/* <h2 className="leading-[150%] text-5xl md:text-[25px] font-extrabold leading-tight"> */}
          {/* <div className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold leading-tight">
            Take a Sneak Peak at AFE Makerspace
          </div> */}
          <div className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold leading-tight">
            {isLanguageEnglish
              ? "Take a Sneak Peak at Amazon Future Engineer Makerspace"
              : "AFE ಮಾರ್ಕರ್ಸ್‌ಪೇಸ್‌ನಲ್ಲಿ ಒಂದು ಸುಳಿವು ಪಡೆಯಿರಿ"}
          </div>
          <div className="w-full md:w-auto">

            {/* <a
            href="#"
          > */}
            {/* <Button variant="proceedWhite" >Take Virtual Tour</Button> */}
            {/* <Button variant="proceedWhite">
              {isLanguageEnglish ? "Take Virtual Tour" : "ವಿರ್ಚುವಲ್ ಟೂರ್ನ್ನು ಕೈಗೊಳ್ಳಿ"}
            </Button> */}
            {/* </a> */}
          </div>
        </div>
      </section>

      <section className="relative mx-4 md:mx-12 flex flex-col items-center justify-start gap-4 text-[#29458c] py-8 md:py-16">
        {/* <h2 className="w-full text-5xl font-extrabold leading-[150%] md:text-[25px]"> */}
        {/* <div className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold">
          Have Questions or Want to Book a Session?
        </div> */}
        <div className="leading-[150%] text-heading6 md:text-heading5 font-heading5-bold">
          {isLanguageEnglish
            ? "Have Questions or Want to Book a Session?"
            : "ನಿಮ್ಮಿಗೆ ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ ಅಥವಾ ಒಂದು ಸೆಷನ್ ಬುಕ್ ಮಾಡಬೇಕೆಂದು ಬೇಕಾದರೆ?"}
        </div>
        {/* <p className="text-base leading-[170%] font-[Amazon Ember] text-[#3a3a3a] md:text-[20px]"> */}
        {/* <div className="text-bodyM md:text-body1 leading-[170%] font-body1-regular text-darkslategray"> */}
        <div className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
          <p>
            {/* <span> Call or Whatsapp us on </span> */}
            <span>
              {isLanguageEnglish
                ? "Call or Whatsapp us on "
                : "ನಮ್ಮನ್ನು ಕರೆ ಮಾಡಿರಿ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ"}
            </span>
            {/* <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">
              +9163669-69292
            </a> */}
            <strong className="inline-flex items-center">
              <a
                href={whatsappLink}
                target="_blank"
                className="text-tomato font-extrabold"
              >
                +91 63669-69292
              </a>
              <button
                className="hidden md:inline-flex px-4 py-2 ml-4 rounded-full border border-[#F55C38] justify-center items-center leading-[170%] flex gap-2 w-[89px] h-[40px]"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <SmartImage
                      src="/userDashboard/checkmark_icon.png"
                      alt="Check Icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-[#F55C38] text-base md:text-body2 font-body2-regular">
                      Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <SmartImage
                      src="/userDashboard/content_copy.svg"
                      alt="Copy Icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-[#F55C38] text-base md:text-body2 font-body2-regular">
                      Copy
                    </span>
                  </>
                )}
              </button>
            </strong>
          </p>
        </div>
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

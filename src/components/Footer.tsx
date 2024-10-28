"use client";

import { Button } from "./ui/button";
import type { NextPage } from "next";
import SmartImage from "@/components/SmartImage";;
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAppState } from "@/context/AppContext";

// import router from "next/router";

interface FooterProps {
  handleOfflineBooking: () => void;
}

const Footer: NextPage<FooterProps> = ({ handleOfflineBooking }) => {
  const { isLanguageEnglish } = useAppState(); // Access language state
  const router = useRouter();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const onReshotIconClick = () => {
    router.push("/");
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whatsappLink = `https://wa.me/${6366969292}`;

  return (
    <div className="w-full bg-[#ecf0f3] h-auto text-center text-lg text-gray-800 font-amazon-ember  px-4 py-12 md:py-8 md:px-12 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center h-full gap-6 md:gap-0">
        {/* Logo Section */}
        <div className="">
          <div className="hidden md:flex">
            <SmartImage
              className="object-contain cursor-pointer"
              alt="Reshot Icon"
              // src="/login/afe_subbrand_logo_horizontal_blue.svg"
              src="/login/AFE Makerspace_Blue_Horizontal 2.svg"
              // onClick={onReshotIconClick}
              width={254}
              height={40}
            />
          </div>
          <div className="md:hidden">
            <SmartImage
              className="object-contain cursor-pointer"
              alt="Reshot Icon"
              src="/login/Group(12).svg"
              // onClick={onReshotIconClick}
              width={120}
              height={40}
            />
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="flex justify-center w-full md:w-auto text-body1 font-body1-regular text-darkslategray">
          Privacy Policy
        </div>

        {/* Helpdesk Section */}
        {/* Helpdesk Section */}
        <div className="flex gap-4 w-full md:w-auto">
          {/* <Button
            variant="proceedWhite"
            onClick={handleOfflineBooking}
            className="flex-grow flex justify-center items-center gap-3 px-4 py-2"
          >
            <SmartImage
              alt="Helpdesk Icon"
              src="/nanopage/reshot-icon-phone-XZTUCW7SFA 1.svg"
              width={24}
              height={24}
            />
            <span className="relative font-medium leading-[170%] text-base">
              Call Us
            </span>
          </Button> */}
          <SmartImage
            className="object-cover w-[100%] max-w-[100%]"
            alt="TIS Logo"
            src="/login/Logo TIS 1.svg"
            width={24}
            height={24}
          />

          {isMobile && (
            // <Button
            //   variant="proceedWhite"
            //   // onClick={handleOfflineBooking}
            //   className="flex-grow flex justify-center items-center gap-3 px-4 py-2"
            // >
            //   <SmartImage
            //     alt="WhatsApp Icon"
            //     src="/login/reshot-icon-whatsapp-UANBKF398R 1.svg"
            //     width={24}
            //     height={24}
            //   />
            //   <a href={whatsappLink} target="_blank" className="relative font-medium leading-[170%] text-base text-darkslategray">
            //     Chat with Us
            //   </a>
            // </Button>
            <Button
              variant="proceedWhite"
              className="flex-grow flex justify-center items-center gap-3 px-4 py-2"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <SmartImage
                alt="WhatsApp Icon"
                src="/login/reshot-icon-whatsapp-UANBKF398R 1.svg"
                width={24}
                height={24}
              />
              <span className="relative font-medium leading-[170%] text-base text-darkslategray">
                {/* Chat with Us */}
                <span>
                  {isLanguageEnglish ? "Chat with Us" : "ನಮ್ಮೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ"}
                </span>
              </span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;

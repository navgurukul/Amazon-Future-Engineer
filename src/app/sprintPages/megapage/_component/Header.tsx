"use client";

// import Popup from "@/app/homePages/_components/Popup";
import Popup from "./Popup";
import CreateAClass from "@/app/homePages/CreateAClass";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

interface HeaderProps {
  isLoggedIn: boolean;
  handleOfflineBooking: () => void;
  offlinePopup: boolean;
  openSecondPopup: boolean;
}
const Header: NextPage<HeaderProps> = ({
  isLoggedIn,
  handleOfflineBooking,
  offlinePopup,
  openSecondPopup,
}) => {
  const router = useRouter();
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isHelpDeskPopupOpen, setIsHelpDeskPopupOpen] = useState(false);
  // const [zIndex,setZIndex] = useState(1000);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setHasShadow(true);
      // setZIndex(1000);
    } else {
      setHasShadow(false);
      // setZIndex(1000)
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  const onReshotIconMoleculesYBNSDClick = () => {
    router.push("/");
  };
  const handleLoginClick = useCallback(() => {
    setIsLoginPopupOpen(true);
  }, []);
  const closeLoginPopup = useCallback(() => {
    setIsLoginPopupOpen(false);
  }, []);
  const handleHelpdeskClick = useCallback(() => {
    setIsHelpDeskPopupOpen(true);
  }, []);
  const closeHelpDeskPopup = useCallback(() => {
    setIsHelpDeskPopupOpen(false);
  }, []);
  return (
    <div
      className={`fixed w-full h-[104px] ${
        isLoggedIn ? "bg-white" : "bg-black bg-opacity-30"
      } text-center text-[14px] text-white transition-shadow duration-300 ${
        hasShadow
          ? "shadow-[0_1px_2px_rgba(0,0,0,0.06),0_2px_1px_rgba(0,0,0,0.04),0_1px_5px_rgba(0,0,0,0.08)]"
          : ""
      } z-${offlinePopup || openSecondPopup ? 0 : 50} px-4 sm:px-8 md:px-12`}
    >
      <Image
        className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden cursor-pointer"
        alt="Reshot Icon"
        src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg"
        onClick={onReshotIconMoleculesYBNSDClick}
        width={48}
        height={48}
      />
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center gap-4 sm:gap-8">
        <div
          className={`flex items-center h-10 sm:h-12 rounded-full p-1 sm:p-2 gap-1 sm:gap-2 ${
            isLoggedIn ? "bg-[#FDDED7]" : "bg-[#F0F0F0]"
          }`}
        >
          <div
            className={`flex items-center justify-center rounded-full h-8 px-3 py-2 ${
              isLoggedIn ? "bg-[#F55C38] text-white" : "text-white bg-[#F55C38]"
            }`}
          >
            <div className="text-sm sm:text-base font-medium cursor-pointer">
              Eng
            </div>
          </div>
          <div
            className={`flex items-center justify-center rounded-full h-8 px-3 py-2 ${
              isLoggedIn ? "text-[#3A3A3A]" : "text-[#F55C38]"
            }`}
          >
            <div className="text-sm sm:text-base font-medium cursor-pointer">
              ಅಇಈ
            </div>
          </div>
        </div>
        <div
          className={`flex items-center justify-center h-12 rounded-full p-2 px-4 sm:px-8 gap-2 sm:gap-3 text-base sm:text-lg ${
            isLoggedIn
              ? "bg-[#FDDED7] text-[#F55C38] cursor-pointer"
              : "bg-[#FFF] text-[#F55C38] cursor-pointer"
          }`}
          onClick={handleOfflineBooking}
        >
          <Image
            className="w-6 h-6 sm:w-8 sm:h-8 overflow-hidden"
            alt="Helpdesk Icon"
            src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg"
            width={32}
            height={32}
          />
          <div className="font-medium leading-[170%]">Call Us</div>
        </div>
        {isLoggedIn ? (
          <Image
            className="w-10 h-10 sm:w-14 sm:h-14 object-cover rounded-full"
            alt="User Avatar"
            src="/nanopage/Ellipse 1.svg"
            width={40}
            height={40}
          />
        ) : (
          <nav
            className="flex items-center justify-center h-12 bg-[#FFF] rounded-full p-2 px-4 sm:px-8 gap-2 sm:gap-3 text-base sm:text-lg text-[#F55C38] cursor-pointer"
            onClick={handleLoginClick}
          >
            <span className="relative font-medium leading-[170%]">Login</span>
          </nav>
        )}
      </div>
      {isLoginPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <CreateAClass closePopup={closeLoginPopup} />
        </div>
      )}
      {/*  {isHelpDeskPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Popup closeHelpDeskPopup={closeHelpDeskPopup}  />
        </div>
      )}
      */}
    </div>
  );
};
export default Header;

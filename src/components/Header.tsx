"use client";

import { Button } from "./ui/button";
import Cookies from "js-cookie";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import LogoutSuccess from "./LogoutSuccess";

interface HeaderProps {
  bgColor: string;
  handleOfflineBooking: () => void;
  offlinePopup: boolean;
  openSecondPopup: boolean;
  bookingPopup: boolean;
  handleBookSessionClick: () => void;
}

const Header: NextPage<HeaderProps> = ({
  handleOfflineBooking,
  offlinePopup,
  openSecondPopup,
  bgColor,
  bookingPopup,
  handleBookSessionClick,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [headerBgColor, setHeaderBgColor] = useState<string>("transparent");
  const [currentLang, setCurrentLang] = useState<"en" | "kn">("en");
  const [showBothButtons, setShowBothButtons] = useState<boolean>(false);
  const [logoutSuccess, setLogoutSuccess] = useState<boolean>(false);

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
    useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);


  const isLandingPage = pathname === "/";

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const open = localStorage.getItem("loginData");
    const parsedOpen = open ? JSON.parse(open) : null;
    if (open) {
      setProfileOpen(parsedOpen.status);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }

    if (isLandingPage) {
      if (scrollPosition > windowHeight) {
        setHeaderBgColor("bg-white");
        setShowBothButtons(true);
      } else {
        setHeaderBgColor("transparent");
        setShowBothButtons(false);
      }
    } else {
      setHeaderBgColor("bg-white");
      setShowBothButtons(true);
    }
  }, [isLandingPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const onReshotIconClick = () => {
    router.push("/");
  };

  // const googleTranslateBaseURL = "https://translate.google.com/translate?hl=";
  // const redirectToGoogleTranslator = (targetLang: string) => {
  //   const currentUrl = window.location.href;
  //   const translatedUrl = `${googleTranslateBaseURL}${targetLang}&sl=auto&tl=${targetLang}&u=${encodeURIComponent(
  //     currentUrl
  //   )}`;
  //   window.location.href = translatedUrl;
  // };

  const handleLanguageToggle = () => {
    if (currentLang === "en") {
      setCurrentLang("kn");
      // redirectToGoogleTranslator("kn");
    } else {
      setCurrentLang("en");
      // redirectToGoogleTranslator("en");
    }
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleDoubleClickProfile = () => {
    setIsProfileDropdownOpen(false); 
  };


  const handleDashboardClick = () => {
    router.push("/userdashboard");
    setIsProfileDropdownOpen(false);
  };

  const handleLogoutClick = () => {
    Cookies.remove("loginData");
    localStorage.removeItem("loginData");
    setProfileOpen(null);
    setIsProfileDropdownOpen(false);
    router.push("/");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsProfileDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const whatsappLink = `https://wa.me/${6366969292}`;

  return (
    <>
          <LogoutSuccess show={logoutSuccess} />

      <div
        className={`fixed z-50 w-full ${isDropdownOpen || bgColor !== "home" ? "bg-white" : headerBgColor
          } text-center text-[14px] text-white transition-shadow duration-300 ${hasShadow && !isDropdownOpen
            ? "shadow-[0_1px_2px_rgba(0,0,0,0.06),0_2px_1px_rgba(0,0,0,0.04),0_1px_5px_rgba(0,0,0,0.08)]"
            : ""
          } z-${offlinePopup || openSecondPopup || bookingPopup ? 0 : 50
          } px-4 sm:px-8 md:px-12 py-6`}
      >
        <div className="mx-auto flex justify-between items-center h-full">
          {/* Reshot Icon */}
          <div className="hidden md:flex items-center gap-[5px]">
            <div className="hidden md:flex">
              <Image
                className="object-contain cursor-pointer"
                alt="Reshot Icon"
                src={
                  headerBgColor == "transparent" && bgColor === "home"
                    ? "/login/afe_subbrand_logo_horizontal_white.svg"
                    : "/login/afe_subbrand_logo_horizontal_blue.svg"
                }
                onClick={onReshotIconClick}
                width={254}
                height={40}
              />
            </div>
          </div>
          <div className="md:hidden">
            <Image
              className="object-contain cursor-pointer"
              alt="Reshot Icon"
              src={`/login/Group(${headerBgColor === "transparent" &&
                  bgColor === "home" &&
                  !isDropdownOpen
                  ? "11"
                  : "12"
                }).svg`}
              onClick={onReshotIconClick}
              // width={120}
              // height={40}
              width={100}
              height={30}
            />
          </div>
          {/* Right side buttons */}
          <div className="flex items-center md:gap-4 gap-8">
            {isMobile ? (
              <>
                {/* Hamburger icon */}
                <div
                  className="h-[32px] flex flex-col items-end justify-center p-2 px-1 gap-[6px] cursor-pointer text-darkslategray"
                  onClick={toggleDropdown}
                >
                  {isDropdownOpen ? (
                    <Image
                      src="/login/close.svg"
                      alt="Close"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <>
                      {bgColor == "home" ? (
                        <>
                          <div
                            className={`w-[24px] h-[2px] relative rounded-full ${headerBgColor === "transparent" && !isDropdownOpen
                                ? "bg-white"
                                : "bg-black"
                              }`}
                          />
                          <div
                            className={`w-[16px] h-[2px] relative rounded-full ${headerBgColor === "transparent" && !isDropdownOpen
                                ? "bg-white"
                                : "bg-black"
                              }`}
                          />
                          <div
                            className={`w-[8px] h-[2px] relative rounded-full ${headerBgColor === "transparent" && !isDropdownOpen
                                ? "bg-white"
                                : "bg-black"
                              }`}
                          />
                        </>
                      ) : (
                        <div className="flex gap-4 justify-center items-center">
                          <div
                            className="w-auto mx-auto p-2 h-[48px] flex items-center rounded-full md:gap-1 gap-2  bg-incandescent-light"
                          >
                            <Button
                              variant={
                                currentLang === "en"
                                  ? "proceed"
                                  : "proceedWhite"
                              }
                              className={`${currentLang !== "en" &&
                                "text-black bg-transparent"
                                } h-8 py-2 px-3`}
                              onClick={handleLanguageToggle}
                            >
                              Eng
                            </Button>
                            <Button
                              variant={
                                currentLang !== "en"
                                  ? "proceed"
                                  : "proceedWhite"
                              }
                              className={`${currentLang === "en" &&
                                "text-black bg-transparent"
                                } h-8 py-2 px-3`}
                              onClick={handleLanguageToggle}
                            >
                              ಅಇಈ
                            </Button>
                          </div>
                          <Image
                            className="object-cover rounded-full cursor-pointer"
                            alt="User Avatar"
                            src="/login/avatarIcon.svg"
                            width={48}
                            height={48}
                            onClick={handleProfileClick}
                            onDoubleClick={handleDoubleClickProfile}
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Language Selector for desktop */}
                <div

                  className={` p-2  h-[48px] flex items-center rounded-full md:gap-1 gap-2  bg-${headerBgColor !== "transparent" || bgColor != "home"
                      ? "incandescent-light"
                      : "white"
                    }`}
                >
                  <Button
                    variant={currentLang === "en" ? "proceed" : "proceedWhite"}
                    className={`${currentLang !== "en" && "text-black bg-transparent"
                      } h-8 py-2 px-3`}
                    onClick={handleLanguageToggle}
                  >
                    Eng
                  </Button>
                  <Button
                    variant={currentLang !== "en" ? "proceed" : "proceedWhite"}
                    className={`${currentLang === "en" && "text-black bg-transparent"
                      } h-8 py-2 px-3`}
                    onClick={handleLanguageToggle}
                  >
                    ಅಇಈ
                  </Button>
                </div>

                {/* Helpdesk Section */}
                {(headerBgColor === "bg-white" || bgColor !== "home") && (
                  <Button
                    variant="proceedWhite"
                    onClick={handleOfflineBooking}
                    className="flex-grow flex justify-center items-center gap-3 px-4 py-2 border-2 border-[#F55C38] "
                  >
                    <Image
                      alt="Helpdesk Icon"
                      src="/nanopage/reshot-icon-phone-XZTUCW7SFA 1.svg"
                      width={24}
                      height={24}
                    />
                    <span className="relative font-medium leading-[170%] text-base">
                      Call Us
                    </span>
                  </Button>
                )}

                {profileOpen ? (
                  <div className="relative">
                    <Image
                      className="object-cover rounded-full cursor-pointer"
                      alt="User Avatar"
                      src="/login/avatarIcon.svg"
                      width={56}
                      height={56}
                      onClick={handleProfileClick}
                      // onDoubleClick={handleDoubleClickProfile}
                    />
                    {isProfileDropdownOpen && (
                      <div ref={dropdownRef}
                        className={`absolute right-0 mt-2 ${isMobile ? "w-screen" : "w-48"
                          } bg-white rounded-md shadow-lg z-50`}
                      >
                        <div className="py-2">
                          <button
                            onClick={handleDashboardClick}
                            className="block w-full text-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                          >
                            <div className="relative text-base leading-[170%] font-medium font-mobiletypestyles-buttonlarge text-text-primary text-center">
                              Dashboard
                            </div>
                          </button>
                          <button
                            onClick={handleLogoutClick}
                            className="block w-full text-center px-4 py-3 text-sm text-red-600 hover:bg-gray-100 transition duration-150 ease-in-out"
                          >
                            <div className="relative text-base leading-[170%] font-medium font-mobiletypestyles-buttonlarge text-incandescent-main text-center">
                              Logout
                            </div>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Button
                    variant={
                      headerBgColor === "transparent"
                        ? "proceedWhite"
                        : "proceed"
                    }
                    onClick={handleBookSessionClick}
                  >
                    Login
                  </Button>
                )}
              </>
            )}
          </div>
          {isMobile && isDropdownOpen && (
            <div className="fixed w-full top-[104px] bg-[#FFF] left-0 shadow-lg z-40 rounded-b-2xl">
              {bgColor !== "home" ? (
                <div
                  className={`absolute right-0 mt-2 ${isMobile ? "w-screen" : "w-48"
                    } bg-white rounded-md shadow-lg z-50`}
                >
                  <div className="h-[2px] bg-gray-300 mx-4"></div>
                  <div className="py-2">
                    <button
                      onClick={handleDashboardClick}
                      className="block w-full text-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                    >
                      <div className="relative text-base leading-[170%] font-medium font-mobiletypestyles-buttonlarge text-text-primary text-center">
                        Dashboard
                      </div>
                    </button>
                    <button
                      onClick={handleLogoutClick}
                      className="block w-full text-center px-4 py-3 text-sm text-red-600 hover:bg-gray-100 transition duration-150 ease-in-out"
                    >
                      <div className="relative text-base leading-[170%] font-medium font-mobiletypestyles-buttonlarge text-incandescent-main text-center">
                        Logout
                      </div>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 flex flex-col items-center gap-4">
                  {profileOpen ? (
                    <Image
                      className="w-10 h-10 object-cover rounded-full"
                      alt="User Avatar"
                      src="/login/avatarIcon.svg"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <Button variant="proceed" onClick={handleBookSessionClick}>
                      Login
                    </Button>
                  )}
                  <div

                    className="w-auto mx-auto p-2 h-[48px] flex items-center rounded-full md:gap-1 gap-2  bg-incandescent-light"
                  >
                    <Button
                      variant={
                        currentLang === "en" ? "proceed" : "proceedWhite"
                      }
                      className={`${currentLang !== "en" && "text-black bg-transparent"
                        } h-8 px-8 py-3`}
                      onClick={handleLanguageToggle}
                    >
                      Eng
                    </Button>
                    <Button
                      variant={
                        currentLang !== "en" ? "proceed" : "proceedWhite"
                      }
                      className={`${currentLang === "en" && "text-black bg-transparent"
                        } h-8 px-8 py-3`}
                      onClick={handleLanguageToggle}
                    >
                      ಅಇಈ
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {/* chat with us and call us button for small screens*/}
        {isMobile && !isDropdownOpen && (
          <div
            className={`fixed w-full left-0 right-0 ${headerBgColor} ${hasShadow ? "shadow-md" : ""
              }`}
            style={{ top: "104px" }}
          >
            <div className="flex justify-between px-4 space-x-2 py-2">
              {(headerBgColor === "bg-white" || bgColor !== "home") && (
                <Button
                  variant="proceedWhite"
                  onClick={handleOfflineBooking}
                  className="flex-1 flex-grow flex justify-center items-center gap-3 px-4 py-2 border-2 border-[#F55C38] "
                >
                  <Image
                    alt="Helpdesk Icon"
                    src="/nanopage/reshot-icon-phone-XZTUCW7SFA 1.svg"
                    width={24}
                    height={24}
                  />
                  <span className="relative font-medium leading-[170%] text-base">
                    Call Us
                  </span>
                </Button>
              )}

              {/* <Button
                variant="proceedWhite"
                // onClick={handleOfflineBooking}
                className="flex-1  flex-grow flex justify-center items-center gap-3 px-4 py-2 border-text-primary border-[1px] border-solid box-border"
              >
                <Image
                  alt="WhatsApp Icon"
                  src="/login/reshot-icon-whatsapp-UANBKF398R 1.svg"
                  width={24}
                  height={24}
                />
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="relative font-medium leading-[170%] text-base text-darkslategray"
                >
                  Chat with Us
                </a>
              </Button> */}
              <Button
                variant="proceedWhite"
                className="flex-1 flex-grow flex justify-center items-center gap-3 px-4 py-2 border-text-primary border-[1px] border-solid box-border"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <Image
                  alt="WhatsApp Icon"
                  src="/login/reshot-icon-whatsapp-UANBKF398R 1.svg"
                  width={24}
                  height={24}
                />
                <span className="relative font-medium leading-[170%] text-base text-darkslategray">
                  Chat with Us
                </span>
              </Button>

            </div>
          </div>
        )}
      </div>

      {/* Added conditional rendering for spacing */}
      {isMobile && bgColor !== "home" && <div className="h-[64px]"></div>}
    </>
  );
};

export default Header;



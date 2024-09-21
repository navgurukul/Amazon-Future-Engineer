import type { NextPage } from "next";
import { useState, useEffect, useCallback } from "react";
import CreateAClass from "@/app/homePages/CreateAClass";
import Popup from "@/app/homePages/_components/Popup";

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: NextPage<HeaderProps> = ({ isLoggedIn }) => {
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isHelpDeskPopupOpen, setIsHelpDeskPopupOpen] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const onReshotIconMoleculesYBNSDClick = useCallback(() => {
    // Add your code here
  }, []);

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
      }`}
      style={{ zIndex: 1000 }}
    >
      <img
        className="absolute top-[calc(50%_-_32px)] left-12 w-16 h-16 overflow-hidden cursor-pointer"
        alt="Reshot Icon"
        src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg"
        onClick={onReshotIconMoleculesYBNSDClick}
      />
      <div className="absolute top-[calc(50%_-_28px)] right-12 flex items-center justify-start gap-8">
        <div className={`flex items-center justify-center h-12 rounded-full p-2 gap-1 ${isLoggedIn ? "bg-[#fdded7]" : "bg-[#F0F0F0] 72%"}`}>
          <div className={`flex items-center justify-center rounded-full h-8 px-3 py-2 ${isLoggedIn ? "bg-[#f55c38] text-white" : "text-white bg-[#f55c38]"}`}>
            <div className="text-base font-medium cursor-pointer">Eng</div>
          </div>
          <div className={`flex items-center justify-center rounded-full h-8 px-3 py-2 ${isLoggedIn ? "text-[#3a3a3a]" : "text-[#f55c38]"}`}>
            <div className="text-base font-medium cursor-pointer">ಅಇಈ</div>
          </div>
        </div>

        <div
          className={`flex items-center justify-center h-14 rounded-full p-2 px-8 gap-3 text-lg ${
            isLoggedIn ? "bg-[#fdded7] text-[#f55c38] cursor-pointer" : "bg-[#FFF] text-[#f55c38] cursor-pointer"
          }`}
          onClick={handleHelpdeskClick}
        >
          <img
            className="w-8 h-8 overflow-hidden"
            alt="Helpdesk Icon"
            src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg"
          />
          <div className="font-medium leading-[170%]">Helpdesk</div>
        </div>

        {isLoggedIn ? (
          <img
            className="w-14 h-14 object-cover rounded-full"
            alt="User Avatar"
            src="/nanopage/Ellipse 1.svg"
          />
        ) : (
          <nav
            className="flex items-center justify-center h-14 bg-[#FFF] rounded-full p-2 px-8 gap-3 text-lg text-[#f55c38] cursor-pointer"
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

      {isHelpDeskPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Popup closeHelpDeskPopup={closeHelpDeskPopup} />
        </div>
      )}
    </div>
  );
};

export default Header;

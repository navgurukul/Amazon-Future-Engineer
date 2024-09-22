// import styles from './index.module.css';
// import type { NextPage } from 'next';
// import { useCallback } from 'react';

// const Header:NextPage = () => {

//   	const onReshotIconMoleculesYBNSDClick = useCallback(() => {
//     		// Add your code here
//   	}, []);

//   	return (
//     		<div className={styles.header}>
//       			<img className={styles.reshotIconMoleculesYbnsd562} alt="" src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg" onClick={onReshotIconMoleculesYBNSDClick} />
//       			<div className={styles.frameParent}>
//         				<div className={styles.frameGroup}>
//           					<div className={styles.engWrapper}>
//             						<div className={styles.eng}>Eng</div>
//           					</div>
//           					<div className={styles.wrapper}>
//             						<div className={styles.eng}>ಅಇಈ</div>
//           					</div>
//         				</div>
//         				<div className={styles.reshotIconFriendlyCustomerParent}>
//           					<img className={styles.reshotIconFriendlyCustomer} alt="" src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg" />
//           					<div className={styles.callHelpdesk}>Call Helpdesk</div>
//         				</div>
//         				<img className={styles.frameChild} alt="" src="/nanopage/Ellipse 1.svg" />
//       			</div>
//     		</div>
// 			);
// };

// export default Header;

import Popup from "./Popup";
import { useState, useEffect, useCallback } from "react";

const Header = ({ offlinePopup, handleOfflineBookingClose, handleClose}) => {
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const [zIndex, setZIndex] = useState<number>(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setHasShadow(true);
      setZIndex(1000);
    } else {
      setHasShadow(false);
      setZIndex(0);
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

  return (
    <div
      className={`fixed w-full h-[104px] bg-white text-center text-[14px] text-white transition-shadow duration-300 ${
        hasShadow
          ? "shadow-[0_1px_2px_rgba(0,0,0,0.06),0_2px_1px_rgba(0,0,0,0.04),0_1px_5px_rgba(0,0,0,0.08)]"
          : ""
      }`}
      style={{ zIndex }}
    >
      <img
        className="absolute top-[calc(50%_-_32px)] left-12 w-16 h-16 overflow-hidden cursor-pointer"
        alt=""
        src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg"
        onClick={onReshotIconMoleculesYBNSDClick}
      />
      <div className="absolute top-[calc(50%_-_28px)] right-12 flex items-center justify-start gap-8">
        <div className="flex items-center justify-center h-12 bg-[#fdded7] rounded-full p-2 gap-1">
          <div className="bg-[#f55c38] flex items-center justify-center rounded-full h-8 px-3 py-2">
            <div className="text-base font-medium">Eng</div>
          </div>
          <div className="flex items-center justify-center rounded-full h-8 px-3 py-2 text-[#3a3a3a]">
            <div className="text-base font-medium">ಅಇಈ</div>
          </div>
        </div>
        <div className="flex items-center justify-center h-14 bg-[#fdded7] rounded-full p-2 px-8 gap-3 text-lg text-[#f55c38]">
          <img
            className="w-8 h-8 overflow-hidden"
            alt=""
            src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg"
          />
          <div className="font-medium leading-[170%]">Call Helpdesk</div>
        </div>
        <img
          className="w-14 h-14 object-cover rounded-full"
          alt=""
          src="/nanopage/Ellipse 1.svg"
        />
      </div>
      <Popup
        offlinePopup={offlinePopup}
        handleOfflineBookingClose={handleOfflineBookingClose}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Header;

"use client";

import { NextPage } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import React, { useState } from "react";


const Page: NextPage = () => {
    const [offlinePopup, setOfflinePopup] = useState<boolean>(false);
    const [openSecondPopup, setOpenSecondPopup] = useState<boolean>(false);
    const [bookingPopup, setBookingPopup] = useState<boolean>(false)


    const handleBooking: () => void = () => {
        setBookingPopup(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        // document.body.classList.add("overflow-hidden");
    };

    const handleOfflineBooking: () => void = () => {
        setOfflinePopup(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        // document.body.classList.add("overflow-hidden");
    };

    const handleOfflineBookingClose = () => {
        setBookingPopup(false);
        setOpenSecondPopup(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        // document.body.classList.add("overflow-hidden");
    };

    const handleClose = () => {
        setOfflinePopup(false);
        setBookingPopup(false);
        setOpenSecondPopup(false);
        document.body.classList.remove("overflow-hidden");
    };

    const handleBookSessionClick = () => {
        console.log("hello")
    }

    return (
        <>
            <Header
                handleOfflineBooking={handleOfflineBooking}
                offlinePopup={offlinePopup}
                openSecondPopup={openSecondPopup}
                bookingPopup={bookingPopup}
                bgColor=""
                handleBookSessionClick={handleBookSessionClick}
            />
            <div className="flex justify-center items-center min-h-screen bg-white px-4">
                <div className="w-full max-w-[360px] md:max-w-[592px] rounded-lg flex-col justify-center items-center gap-6 md:gap-8 inline-flex md:px-8">
                    <div className="w-[160px] h-[160px] relative">
                        <Image
                            src="/login/Bad Connection 3 1.svg"
                            alt="Network Error"
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className="text-center text-[#3a3a3a] text-bodyM md:text-body1 font-body1-regular gap-6 md:gap-8 leading-[170%] max-w-[328px] md:max-w-[592px] ">
                        Unable to connect to the network. Please check your internet connection and try again.
                    </div>
                    <button
                        className="w-full md:w-auto h-14 px-8 py-2 rounded-full border border-[#f55c38] text-[#f55c38] text-bodyM md:text-button1 font-button1-bold leading-[170%] cursor-pointer"
                    >
                        Refresh Page
                    </button>
                </div>
            </div>

        </>
    );
};

export default Page;
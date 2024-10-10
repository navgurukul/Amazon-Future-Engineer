"use client";

import type { NextPage } from 'next';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const SecondPopup: NextPage = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);

    const whatsappLink = `https://wa.me/${6366969292}`;

    const handleGoToSprints = () => {
        router.push("/sprintPages/nanopage");
        console.log('Go to Sprints button clicked');
        setIsOpen(false); // Close the popup when button is clicked
        // document.body.classList.remove("overflow-hidden");
    };

    const handleClose = () => {
        setIsOpen(false);
        // document.body.classList.remove("overflow-hidden");
    };

    // if (!isOpen) return null;

    useEffect(() => {
        console.log('isOpen state:', isOpen);
        if (isOpen) {
            // Prevent scrolling when popup is open
            document.body.classList.add("overflow-hidden");
        } else {
            // Allow scrolling when popup is closed
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]); // Watch isOpen changes

    // Stop rendering the popup if isOpen is false
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

            {/* Popup Dialog */}
            <div
                className="fixed w-full md:w-1/3 bg-white z-50 p-6 md:p-8 gap-4 shadow-lg rounded-lg text-left text-gray-500 font-nunito-sans
        flex flex-col items-center justify-center 
        bottom-0 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
            >
                <div className="flex flex-col items-center justify-start text-lg text-gray-full font-body-body-reg">
                    <div className="w-full flex flex-col items-center justify-start gap-2">
                        <div className="flex items-center justify-between text-lg font-amazon-ember w-full">
                            <div className="font-extrabold text-[#3a3a3a] leading-9 text-xl md:text-2xl lg:text-3xl md:leading-10 lg:leading-[40px]">
                                Call Us
                            </div>

                            <Image
                                className="w-5 h-5 cursor-pointer"
                                alt="close"
                                src="/userDashboard/close.svg"
                                width={20}
                                height={20}
                                onClick={handleClose}
                            />
                        </div>

                        <div className="w-full max-w-[592px] h-auto mt-6 flex items-center justify-between px-4 relative md:text-center">
                            <Image src="/symbols/Vector (8).svg" alt="Image 1" width={30} height={30} className="rounded-full self-start mt-4" />
                            <div className="flex items-center self-center">
                                <Image src="/symbols/Vector (7).svg" alt="Arrow Left" width={20} height={20} className="mt-2" />
                                <Image src="/symbols/Vector (4).svg" alt="Arrow Right" width={20} height={20} className="ml-1 mt-4" />
                            </div>
                            <Image src="/symbols/Vector (2).svg" alt="Image 2" width={32} height={32} className="self-end md:hidden" />
                            <Image src="/symbols/Vector (5).svg" alt="Image 3" width={30} height={30} className="self-center" />
                            <div className="items-center self-start mt-2 hidden md:flex">
                                <Image src="/symbols/Vector (9).svg" alt="Arrow Left" width={16} height={16} className="mt-2" />
                                <Image src="/symbols/Vector (6).svg" alt="Arrow Right" width={16} height={16} className="ml-1 mt-4" />
                            </div>
                        </div>

                        <div className="relative leading-[30.60px] w-full text-left md:text-center text-lg text-[#3a3a3a] font-medium mt-8 gap-8">
                            Thanks for requesting a callback. We will reach out to you shortly to confirm your booking plans.
                        </div>
                        <div className="self-stretch bg-gainsboro" />
                        <div className="w-full relative text-left md:text-center inline-block text-lg leading-[30.60px]">
                            <span className="text-[#3a3a3a] text-lg font-medium ">In the meantime, feel free to call or Whatsapp on </span>
                            {/* <span className="text-[#f55c38] text-lg font-extrabold  whitespace-nowrap md:whitespace-normal ">+916366969292</span> */}
                            <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">
                +916366969292
              </a>
                        </div>
                    </div>
                    <button
                        className="h-14 px-8 py-2 rounded-full border border-[#f55c38] flex justify-center items-center mt-8 gap-8 w-full md:w-auto"
                        onClick={handleGoToSprints}
                    >
                        <span className="text-[#f55c38] text-lg font-medium">Go to Sprints</span>
                    </button>

                </div>
            </div>
        </>
    );
};

export default SecondPopup;
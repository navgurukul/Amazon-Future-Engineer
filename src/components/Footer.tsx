"use client"
import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
// import router from "next/router";

interface FooterProps {
  handleOfflineBooking: () => void;
}

const Footer: NextPage<FooterProps> = ({ handleOfflineBooking }) => {
  const router = useRouter();

  const onReshotIconClick = () => {
    router.push("/");
  };

  return (
    <div className="w-full bg-[#ffad33] h-auto text-center text-lg text-gray-800 font-amazon-ember py-4">
      <div className="flex flex-col md:flex-row justify-between items-center h-full px-6">
        {/* Logo Section */}
        <div className="flex flex-row items-center gap-4 text-xl font-amazon-ember-display">
          <div className="hidden md:flex items-center gap-[5px]">
            <Image
              className="object-contain cursor-pointer mt-2"
              alt="Reshot Icon"
              src="/login/Group (2).svg"
              onClick={onReshotIconClick}
              width={64}
              height={64}
            />
            <Image
              className="object-contain cursor-pointer"
              alt="Reshot Icon"
              src="/login/Group (3).svg"
              onClick={onReshotIconClick}
              width={150}
              height={70}
            />
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="mt-4 md:mt-0 font-medium leading-[170%] order-2 md:order-none">
          Privacy Policy
        </div>

        {/* Helpdesk Section */}
        <div
          className="flex flex-row items-center justify-center gap-2 px-6 py-2 mt-4 md:mt-0 rounded-full bg-gray-200 text-orange-600 order-3 md:order-none cursor-pointer"
          onClick={handleOfflineBooking}
        >
          <Image
            className="w-8 h-8 object-cover"
            alt="Helpdesk Icon"
            src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg"
            width={354}
            height={40}
          />
          <div className="font-medium leading-[170%]">Call Us</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


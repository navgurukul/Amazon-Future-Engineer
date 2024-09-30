"use client";

import type { NextPage } from "next";
import React from "react";
import PhoneNumberVerification from "./_components/PhoneNumberVerification";

const Page: NextPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen bg-white text-black">
      <div
        className="hidden md:block h-full bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url("/login/Rectangle 5.svg")',
          backgroundSize: "cover",
        }}
      ></div>

      <PhoneNumberVerification />
      
    </div>
  );
};

export default Page;


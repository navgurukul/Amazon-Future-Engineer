"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import MainContent from "./_component/MainContent";

const Page = () => {
  return (
    <div className="min-h-screen">
      {" "}
      {/* Ensure the page takes at least the full height of the screen */}
      <Header />
        <MainContent/>
      <Footer />
    </div>
  );
};

export default Page;

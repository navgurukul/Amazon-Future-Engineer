"use client";

import MainContent from "./_component/MainContent";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Top from "./_component/MainContents/Top/top"
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <MainContent />
      {/* <Top /> */}
      <Footer />
    </div>
  );
};

export default Page;

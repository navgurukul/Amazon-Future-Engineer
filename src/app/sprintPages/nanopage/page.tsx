"use client";

import MainContent from "./_component/MainContent";
import Footer from "./_component/Footer";
import Header from "./_component/Header";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header isLoggedIn={true}/>
      <MainContent />
      <Footer />
    </div>
  );
};

export default Page;

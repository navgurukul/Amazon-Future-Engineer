import Calendar from "./_components/Calendar";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
          {/* <div className="w-[301px] text-center relative text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left inline-block">Book a Nano Sprint</div>*/}
        <Calendar />
    </div>
  );
};

export default Home;

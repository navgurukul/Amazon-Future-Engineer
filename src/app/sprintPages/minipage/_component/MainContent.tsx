import Booking from "./Booking";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const MainContent = ({ handleOfflineBooking }) => {
  const router = useRouter()
  const [page, setPage] = useState({
    nano: "",
    mini: "mini",
    mega: "",
  });

  const handleChange = (name:string) => {
    console.log(name)
    if (name === "nano") {
      router.push("/sprintPages/nanopage")
      setPage({
        nano: "nano",
        mini: "",
        mega: "",
      });
    } else if (name === "mini") {
      router.push("/sprintPages/minipage")
      setPage({
        nano: "",
        mini: "mini",
        mega: "",
      });
    } else if (name === "mega") {
      router.push("/sprintPages/megapage")
      setPage({
        nano: "",
        mini: "",
        mega: "mega",
      });
    }
  };
  return (
    <div className="pt-[104px] py-16 max-w-[70%] mx-auto flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-center justify-start gap-8 md:gap-16 text-xl md:text-2xl lg:text-3xl">
        <div className="text-sm md:text-lg leading-[150%] text-left inline-block">
          <span className="text-darkslateblue text-[#29458c]">
            <b className="font-amazon-ember">Home</b>
          </span>
          <span className="font-medium font-amazon-ember">
            <span className="text-darkslateblue">{` / `}</span>
            <span className="text-darkslategray">Sprints</span>
          </span>
        </div>
      </div>

      {/* Adjusted sprint images */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-left text-lg md:text-2xl lg:text-3xl text-text-primary font-webtypestyles-h6">
        <div
          className="w-full sm:w-[110px] flex flex-col items-center justify-start gap-4"
          onClick={() => handleChange("nano")}
        >
          <Image
          className={`w-full h-auto object-cover rounded-md ${page.nano? '' :"mix-blend-luminosity"}`}
            alt="Nano Sprints"
            src={
              !page.nano ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"
            }
            width={110}
            height={110}
          />
          <div className={page.nano? "leading-[150%] font-extrabold text-[#29458c]" :"leading-[150%]"}>Nano Sprints</div>
        </div>
        <div
          className="w-full sm:w-[110px] flex flex-col items-center justify-start gap-4 cursor-pointer"
          onClick={() => handleChange("mini")}
        >
          <Image
          className={`w-full h-auto object-cover rounded-md ${page.mini ? '' :"mix-blend-luminosity"}`}
            alt="Mini Sprints"
            src =  {!page.mini ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"}
            width={110}
            height={110}
          />
          <div className={page.mini? "leading-[150%] font-extrabold text-[#29458c]" :"leading-[150%]"}>Mini Sprints</div>
        </div>
        <div
          className="w-full sm:w-[110px] flex flex-col items-center justify-start gap-4 cursor-pointer"
          onClick={() => handleChange("mega")}
        >
          <Image
            className={`w-full h-auto object-cover rounded-md ${page.mega ? '' :"mix-blend-luminosity"}`}
            alt="Mega Sprints"
            src =  {!page.mega ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"}
            width={110}
            height={110}
          />
          <div className={page.mega? "leading-[150%] font-extrabold text-[#29458c]" :"leading-[150%]"}>Mega Sprints</div>
        </div>
      </div>

      {/* Increased heading size */}
      <div className="md:max-w-[70%] text-2xl md:text-13xl lg:text-4xl leading-[150%] font-extrabold font-webtypestyles-h5 text-[#29458c] text-left mt-6 md:mt-10">
      Multi-Day Skill-Building Workshops on specific STEM Topics
      </div>

      {/* First two images in the same row */}
      <div className="flex flex-col sm:flex-row gap-6 justify-between">
        <img
          src="/nanopage/Rectangle 4.jpeg"
          className="w-full sm:w-[48%] h-auto rounded-md"
          alt="First Image"
        />
        <img
          src="/nanopage/Rectangle 32.jpeg"
          className="w-full sm:w-[48%] h-auto rounded-md"
          alt="Second Image"
        />
      </div>

      {/* Last three images in the same row */}
      <div className="flex flex-col sm:flex-row gap-6 justify-between">
        <img
          src="/nanopage/Rectangle 4.jpeg"
          className="w-full sm:w-[32%] h-auto rounded-md"
          alt="First Image"
        />
        <img
          src="/nanopage/Rectangle 32.jpeg"
          className="w-full sm:w-[32%] h-auto rounded-md"
          alt="Second Image"
        />
        <img
          src="/nanopage/Rectangle 32.jpeg"
          className="w-full sm:w-[32%] h-auto rounded-md"
          alt="Third Image"
        />
      </div>

      <Booking handleOfflineBooking={handleOfflineBooking} />
    </div>
  );
};

export default MainContent;

import Booking from "./Booking";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const MainContent = ({ handleOfflineBooking }) => {
  const router = useRouter()
  const [page, setPage] = useState({
    nano: "",
    mini: "",
    mega: "mega",
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
    <main className="pt-[104px] py-16 w-[90%] md:max-w-[70%] mx-auto flex flex-col gap-8">
      <header className="flex flex-col md:flex-row justify-start gap-8 md:gap-16 text-xl md:text-2xl lg:text-3xl">
        <nav className="text-sm md:text-lg leading-[150%] text-left inline-block">
          <span className="text-darkslateblue text-[#29458c]">
            <b>Home</b>
          </span>
          <span className="font-medium">
            <span className="text-darkslateblue">{` / `}</span>
            <span className="text-darkslategray">Sprints</span>
          </span>
        </nav>
      </header>

      {/* Adjusted sprint images */}
      <section className="w-full flex flex-row items-center justify-center md:justify-center gap-8 md:gap-12 text-left text-lg md:text-2xl lg:text-3xl overflow-x-auto no-scrollbar pl-40">
        <article
          className="flex-shrink-0 w-[36vw] sm:w-[45vw] md:w-[118px] flex flex-col items-center justify-start gap-4 cursor-pointer"
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
          <p className={page.nano? "leading-[150%] font-extrabold text-[#29458c]" :"leading-[150%]"}>Nano Sprints</p>
        </article>
        <article
          className="flex-shrink-0 w-[36vw] sm:w-[45vw] md:w-[118px] flex flex-col items-center justify-start gap-4 cursor-pointer"
          onClick={() => handleChange("mini")}
        >
          <Image
          className={`w-full h-auto object-cover rounded-md ${page.mini ? '' :"mix-blend-luminosity"}`}
            alt="Mini Sprints"
            src =  {!page.mini ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"}
            width={110}
            height={110}
          />
          <p className={page.mini? "leading-[150%] font-extrabold text-[#29458c]" :"leading-[150%]"}>Mini Sprints</p>
        </article>
        <article
          className="flex-shrink-0 w-[36vw] sm:w-[45vw] md:w-[118px] flex flex-col items-center justify-start gap-4"
          onClick={() => handleChange("mega")}
        >
          <Image
            className={`w-full h-auto object-cover rounded-md ${page.mega ? '' :"mix-blend-luminosity"}`}
            alt="Mega Sprints"
            src =  {!page.mega ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"}
            width={110}
            height={110}
          />
          <p className={page.mega? "leading-[150%] font-extrabold text-[#29458c]" :"leading-[150%]"}>Mega Sprints</p>
        </article>
      </section>

      {/* Increased heading size */}
      <section className="md:max-w-[70%] text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold font-['Amazon Ember'] text-[#29458c] text-left mt-6 md:mt-10">
      Mega Sprints: Comprehensive Programs Leading to Exciting Competitive Robotics Challenges
      </section>

      {/* First two images in the same row */}
      {/* <div className="flex flex-col sm:flex-row gap-6 justify-between">
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
      </div> */}

      {/* Last three images in the same row */}
      {/* <div className="flex flex-col sm:flex-row gap-6 justify-between">
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
      </div> */}


      <section className="hidden sm:flex flex-col gap-6">
  <div className="flex flex-row gap-6 justify-between">
    <figure className="w-full sm:w-[48%] h-auto rounded-md">
      <img src="/nanopage/Rectangle 4.jpeg" alt="First Image" />
    </figure>
    <figure className="w-full sm:w-[48%] h-auto rounded-md">
      <img src="/nanopage/Rectangle 32.jpeg" alt="Second Image" />
    </figure>
  </div>
  <div className="flex flex-row gap-6 justify-between">
    <figure className="w-full sm:w-[32%] h-auto rounded-md">
      <img src="/nanopage/Rectangle 4.jpeg" alt="Third Image" />
    </figure>
    <figure className="w-full sm:w-[32%] h-auto rounded-md">
      <img src="/nanopage/Rectangle 32.jpeg" alt="Fourth Image" />
    </figure>
    <figure className="w-full sm:w-[32%] h-auto rounded-md">
      <img src="/nanopage/Rectangle 32.jpeg" alt="Fifth Image" />
    </figure>
  </div>
</section>
<section className="flex sm:hidden overflow-x-auto no-scrollbar">
  <div className="flex flex-row gap-6">
    <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
      <img src="/nanopage/Rectangle 4.jpeg" alt="First Image" />
    </figure>
    <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
      <img src="/nanopage/Rectangle 32.jpeg" alt="Second Image" />
    </figure>
    <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
      <img src="/nanopage/Rectangle 4.jpeg" alt="Third Image" />
    </figure>
    <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
      <img src="/nanopage/Rectangle 32.jpeg" alt="Fourth Image" />
    </figure>
    <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
      <img src="/nanopage/Rectangle 32.jpeg" alt="Fifth Image" />
    </figure>
  </div>
</section>

      <Booking handleOfflineBooking={handleOfflineBooking} />
    </main>
  );
};

export default MainContent;

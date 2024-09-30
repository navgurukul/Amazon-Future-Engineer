import Booking from "./Booking";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


const MainContent = ({ handleOfflineBooking }) => {
  const router = useRouter();
  const [page, setPage] = useState({
    nano: "nano",
    mini: "",
    mega: "",
  });

  const handleChange = (name: string) => {
    if (name === "nano") {
      router.push("/sprintPages/nanopage");
      setPage({
        nano: "nano",
        mini: "",
        mega: "",
      });
    } else if (name === "mini") {
      router.push("/sprintPages/minipage");
      setPage({
        nano: "",
        mini: "mini",
        mega: "",
      });
    } else if (name === "mega") {
      router.push("/sprintPages/megapage");
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
{/* First Section */}
      {/* <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-left text-lg md:text-2xl lg:text-3xl text-text-primary font-webtypestyles-h6">
        <article
          className="w-full sm:w-[110px] flex flex-col items-center justify-start gap-4"
          onClick={() => handleChange("nano")}
        >
          <Image
            className={`w-full h-auto object-cover rounded-md ${
              page.nano ? "" : "mix-blend-luminosity"
            }`}
            alt="Nano Sprints"
            src={!page.nano ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"}
            width={110}
            height={110}
          />
          <p
            className={page.nano ? "leading-[150%] font-extrabold text-[#29458c]" : "leading-[150%]"}
          >
            Nano Sprints
          </p>
        </article>

        <article
          className="w-full sm:w-[110px] flex flex-col items-center justify-start gap-4 cursor-pointer"
          onClick={() => handleChange("mini")}
        >
          <Image
            className={`w-full h-auto object-cover rounded-md ${
              page.mini ? "" : "mix-blend-luminosity"
            }`}
            alt="Mini Sprints"
            src={!page.mini ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"}
            width={110}
            height={110}
          />
          <p
            className={page.mini ? "leading-[150%] font-extrabold text-[#29458c]" : "leading-[150%]"}
          >
            Mini Sprints
          </p>
        </article>

        <article
          className="w-full sm:w-[110px] flex flex-col items-center justify-start gap-4 cursor-pointer"
          onClick={() => handleChange("mega")}
        >
          <Image
            className={`w-full h-auto object-cover rounded-md ${
              page.mega ? "" : "mix-blend-luminosity"
            }`}
            alt="Mega Sprints"
            src={!page.mega ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"}
            width={110}
            height={110}
          />
          <p
            className={page.mega ? "leading-[150%] font-extrabold text-[#29458c]" : "leading-[150%]"}
          >
            Mega Sprints
          </p>
        </article>
      </section> */}
<section className="w-full flex flex-row items-center justify-center gap-8 md:gap-12 text-left text-lg md:text-2xl lg:text-3xl overflow-x-auto no-scrollbar pl-40 md:pl-0">
  {/* Article for Nano Sprints */}
  <article
    className="flex-shrink-0 w-[36vw] sm:w-[45vw] md:w-[118px] flex flex-col items-center justify-start gap-4"
    onClick={() => handleChange("nano")}
  >
    <Image
      className={`w-[50%] h-auto object-cover rounded-md ${
        page.nano ? "" : "mix-blend-luminosity"
      }`}
      alt="Nano Sprints"
      // src={!page.nano ? "/nanopage/Vector (1).svg" : "/nanopage/Vector.svg"}
      src={!page.nano ? "/nanopage/reshot-icon-triangle-puzzle-block-A4BNSTCJ6D 1(1).svg" : "/nanopage/reshot-icon-triangle-puzzle-block-A4BNSTCJ6D 1.svg"}
      width={110}
      height={110}
    />
    <p className={page.nano ? "leading-[150%] font-extrabold text-[#29458c]" : "leading-[150%] font-extrabold text-[#bdbdbd]"}>
      Nano Sprints
    </p>
  </article>

  {/* Article for Mini Sprints */}
  <article
    className="flex-shrink-0 w-[36vw] sm:w-[45vw] md:w-[118px] flex flex-col items-center justify-start gap-4 cursor-pointer"
    onClick={() => handleChange("mini")}
  >
    <Image
      className={`w-[50%] h-auto object-cover rounded-md ${
        page.mini ? "" : "mix-blend-luminosity"
      }`}
      alt="Mini Sprints"
      src={!page.mini ? "/nanopage/reshot-icon-block-stacking-tower-4TBWAMFDY8 1(1).svg" : "/nanopage/reshot-icon-block-stacking-tower-4TBWAMFDY8 1.svg"}
      width={110}
      height={110}
    />
    <p className={page.mini ? "leading-[150%] font-extrabold text-[#29458c]" : "leading-[150%] font-extrabold text-[#bdbdbd]"}>
      Mini Sprints
    </p>
  </article>

  {/* Article for Mega Sprints */}
  <article
    className="flex-shrink-0 w-[36vw] sm:w-[45vw] md:w-[118px] flex flex-col items-center justify-start gap-4 cursor-pointer"
    onClick={() => handleChange("mega")}
  >
    <Image
      className={`w-[50%] h-auto object-cover rounded-md ${
        page.mega ? "" : "mix-blend-luminosity"
      }`}
      alt="Mega Sprints"
      src={!page.mega ? "/nanopage/reshot-icon-3x3x3-puzzle-block-PUT9QD5ZER 1(1).svg" : "/nanopage/reshot-icon-3x3x3-puzzle-block-PUT9QD5ZER 1.svg"}
      width={110}
      height={110}
    />
    <p className={page.mega ? "leading-[150%] font-extrabold text-[#29458c]" : "leading-[150%] font-extrabold text-[#bdbdbd]"}>
      Mega Sprints
    </p>
  </article>
</section>




{/* Second Section */}
      <section className="md:max-w-[100%] text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold font-['Amazon Ember'] text-[#29458c] text-left mt-6 md:mt-10">
        Nano Sprints: One-day experiential learning sessions to ignite interest and aspirations in Robotics and AI
      </section>

{/* Third Section */}
      {/* <section className="flex flex-col sm:flex-row gap-6 justify-between">
        <figure className="w-full sm:w-[48%] h-auto rounded-md">
          <img src="/nanopage/Rectangle 4.jpeg" alt="First Image" />
        </figure>
        <figure className="w-full sm:w-[48%] h-auto rounded-md">
          <img src="/nanopage/Rectangle 32.jpeg" alt="Second Image" />
        </figure>
      </section>
      <section className="flex flex-col sm:flex-row gap-6 justify-between">
        <figure className="w-full sm:w-[32%] h-auto rounded-md">
          <img src="/nanopage/Rectangle 4.jpeg" alt="First Image" />
        </figure>
        <figure className="w-full sm:w-[32%] h-auto rounded-md">
          <img src="/nanopage/Rectangle 32.jpeg" alt="Second Image" />
        </figure>
        <figure className="w-full sm:w-[32%] h-auto rounded-md">
          <img src="/nanopage/Rectangle 32.jpeg" alt="Third Image" />
        </figure>
      </section> */}
<section className="hidden md:flex flex-col gap-6">
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
<section className="flex md:hidden overflow-x-auto no-scrollbar">
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
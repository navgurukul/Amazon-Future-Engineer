import { NextPage } from "next";
import Booking from "./Booking";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


const MainContent:NextPage  = () => {
  const router = useRouter();
  const [page, setPage] = useState({
    nano: "",
    mini: "mini",
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
    <main className="pt-[150px] md:pb-16 pb-12 w-[90%] md:max-w-[70%] mx-auto flex flex-col gap-8">
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
      <section className="w-full flex flex-row md:items-center md:justify-center gap-2 md:gap-12 text-left text-lg md:text-2xl lg:text-3xl overflow-x-auto no-scrollbar">
        <article
          className="flex-shrink-0 w-[36vw] md:w-[118px] flex flex-col items-center justify-start gap-4 cursor-pointer"
          onClick={() => handleChange("nano")}
        >
          <Image
            className={`w-[25%] md:w-[50%] h-auto object-cover rounded-md ${
              page.nano ? "" : "mix-blend-luminosity"
            }`}
            alt="Nano Sprints"
            src={
              !page.nano
                ? "/nanopage/reshot-icon-triangle-puzzle-block-A4BNSTCJ6D 1(1).svg"
                : "/nanopage/reshot-icon-triangle-puzzle-block-A4BNSTCJ6D 1.svg"
            }
            width={110}
            height={110}
          />
          <p
            className={
              page.nano
                ? "leading-[150%] font-extrabold text-[#29458c]"
                : "leading-[150%]  font-extrabold text-[#bdbdbd]"
            }
          >
            Nano Sprints
          </p>
        </article>
        <article
          className="flex-shrink-0 w-[36vw] md:w-[118px] flex flex-col items-center justify-start gap-4"
          onClick={() => handleChange("mini")}
        >
          <Image
            className={`w-[25%] md:w-[50%] h-auto object-cover rounded-md ${
              page.mini ? "" : "mix-blend-luminosity"
            }`}
            alt="Mini Sprints"
            src={
              !page.mini
                ? "/nanopage/reshot-icon-block-stacking-tower-4TBWAMFDY8 1(1).svg"
                : "/nanopage/reshot-icon-block-stacking-tower-4TBWAMFDY8 1.svg"
            }
            width={110}
            height={110}
          />
          <p
            className={
              page.mini
                ? "leading-[150%] font-extrabold text-[#29458c]"
                : "leading-[150%] font-extrabold text-[#bdbdbd]"
            }
          >
            Mini Sprints
          </p>
        </article>
        <article
          className="flex-shrink-0 w-[36vw] md:w-[118px] flex flex-col items-center justify-start gap-4 cursor-pointer"
          onClick={() => handleChange("mega")}
        >
          <Image
            className={`w-[25%] md:w-[50%] h-auto object-cover rounded-md ${
              page.mega ? "" : "mix-blend-luminosity"
            }`}
            alt="Mega Sprints"
            src={
              !page.mega
                ? "/nanopage/reshot-icon-3x3x3-puzzle-block-PUT9QD5ZER 1(1).svg"
                : "/nanopage/reshot-icon-3x3x3-puzzle-block-PUT9QD5ZER 1.svg"
            }
            width={110}
            height={110}
          />
          <p
            className={
              page.mega
                ? "leading-[150%] font-extrabold text-[#29458c]"
                : "leading-[150%] font-extrabold text-[#bdbdbd]"
            }
          >
            Mega Sprints
          </p>
        </article>
      </section>

      {/* Increased heading size */}
      {/* <section className="md:max-w-[100%] text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold font-['Amazon Ember'] text-[#29458c] text-left mt-6 md:mt-10">
        Mini Sprints: Multi-Day Skill Building Workshops on Robotics and AI
      </section> */}
      <h2 className="md:max-w-[100%] text-[#29458c] leading-[150%] text-heading6 md:text-heading5 font-['Amazon Ember'] text-left mt-6 md:mt-10">Mini Sprints: Multi-Day Skill Building Workshops on Robotics and AI</h2>

      {/* First two images in the same row */}
      {/* <div className="flex flex-col sm:flex-row gap-6 justify-between">
        <Image
          src="/nanopage/Rectangle 4.jpeg"
          className="w-full sm:w-[48%] h-auto rounded-md"
          alt="First Image"
        />
        <Image
          src="/nanopage/Rectangle 32.jpeg"
          className="w-full sm:w-[48%] h-auto rounded-md"
          alt="Second Image"
        />
      </div> */}
      {/* Last three images in the same row */}
      {/* <div className="flex flex-col sm:flex-row gap-6 justify-between">
        <Image
          src="/nanopage/Rectangle 4.jpeg"
          className="w-full sm:w-[32%] h-auto rounded-md"
          alt="First Image"
        />
        <Image
          src="/nanopage/Rectangle 32.jpeg"
          className="w-full sm:w-[32%] h-auto rounded-md"
          alt="Second Image"
        />
        <Image
          src="/nanopage/Rectangle 32.jpeg"
          className="w-full sm:w-[32%] h-auto rounded-md"
          alt="Third Image"
        />
      </div> */}
      {/* <section className="hidden md:flex flex-col gap-6">
        <div className="flex flex-row gap-6 justify-between">
          <figure className="w-full sm:w-[48%] h-auto rounded-md">
            <Image src="/nanopage/Rectangle 4.jpeg" alt="First Image" 
            width={600} 
            height={400}/>
          </figure>
          <figure className="w-full sm:w-[48%] h-auto rounded-md">
            <Image src="/nanopage/Rectangle 32.jpeg" alt="Second Image" 
            width={600} 
            height={400}/>
          </figure>
        </div>
        <div className="flex flex-row gap-6 justify-between">
          <figure className="w-full sm:w-[32%] h-auto rounded-md">
            <Image src="/nanopage/Rectangle 4.jpeg" alt="Third Image" 
            width={350} 
            height={250}/>
          </figure>
          <figure className="w-full sm:w-[32%] h-auto rounded-md">
            <Image src="/nanopage/Rectangle 32.jpeg" alt="Fourth Image" 
            width={350} 
            height={250}/>
          </figure>
          <figure className="w-full sm:w-[32%] h-auto rounded-md">
            <Image src="/nanopage/Rectangle 32.jpeg" alt="Fifth Image" 
            width={350} 
            height={250}/>
          </figure>
        </div>
      </section>
      <section className="flex md:hidden overflow-x-auto no-scrollbar">
        <div className="flex flex-row gap-6">
          <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
            <Image src="/nanopage/Rectangle 4.jpeg" alt="First Image" 
            width={500}
            height={300}/>
          </figure>
          <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
            <Image src="/nanopage/Rectangle 32.jpeg" alt="Second Image" 
            width={500}
            height={300}/>
          </figure>
          <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
            <Image src="/nanopage/Rectangle 4.jpeg" alt="Third Image" 
            width={500}
            height={300}/>
          </figure>
          <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
            <Image src="/nanopage/Rectangle 32.jpeg" alt="Fourth Image" 
            width={500}
            height={300}/>
          </figure>
          <figure className="w-[80%] h-auto flex-shrink-0 rounded-md">
            <Image src="/nanopage/Rectangle 32.jpeg" alt="Fifth Image"
            width={500}
            height={300} />
          </figure>
        </div>
      </section> */}
      <section className="hidden md:flex flex-col gap-6">
        <div className="flex flex-row gap-6 justify-between">
          <figure className="w-full sm:w-[50%] h-auto">
            <img className="rounded-md w-full h-full object-cover" src="/nanopage/Rectangle 4.jpeg" alt="First Image" />
          </figure>
          <figure className="w-full sm:w-[50%] h-auto z-10">
            <img className="rounded-md w-full h-full object-cover" src="/nanopage/Rectangle 32.jpeg" alt="Second Image" />
          </figure>
          <img className="hidden md:block w-full absolute m-0 max-w-[100%] top-[27rem] left-[38.1rem] h-[6rem] z-0" src="/nanopage/brackets.svg" alt="brackets" />
        </div>
        <div className="flex flex-row gap-6 justify-between">
          <figure className="w-full sm:w-[33.33%] h-auto z-10">
            <img className="rounded-md w-full h-full object-cover" src="/nanopage/Rectangle 4.jpeg" alt="Third Image" />
          </figure>
          <figure className="w-full sm:w-[33.33%] h-auto">
            <img className="rounded-md w-full h-full object-cover" src="/nanopage/Rectangle 32.jpeg" alt="Fourth Image" />
          </figure>
          <figure className="w-full sm:w-[33.33%] h-auto">
            <img className="rounded-md w-full h-full object-cover" src="/nanopage/Rectangle 32.jpeg" alt="Fifth Image" />
          </figure>
          <img className="hidden md:block w-full absolute m-0 max-w-[100%] top-[58rem] left-[-38.8rem] h-[6rem] z-0" src="/nanopage/colon.svg" alt="colon" />
        </div>
      </section>
      <section className="flex md:hidden overflow-x-auto no-scrollbar">
        <div className="flex flex-row gap-6">
          <figure className="w-[80%] h-auto flex-shrink-0">
            <img className="rounded-md w-full h-full object-cover" src="/nanopage/Rectangle 4.jpeg" alt="First Image" />
          </figure>
          <figure className="w-[80%] h-auto flex-shrink-0">
            <img className="rounded-md w-full h-full object-cover" src="/nanopage/Rectangle 32.jpeg" alt="Second Image" />
          </figure>
          <figure className="w-[80%] h-auto flex-shrink-0">
            <img className="rounded-md w-full h-full object-cover" src="/nanopage/Rectangle 4.jpeg" alt="Third Image" />
          </figure>
          <figure className="w-[80%] h-auto flex-shrink-0">
            <img className="rounded-md w-full h-full object-cover" src="/nanopage/Rectangle 32.jpeg" alt="Fourth Image" />
          </figure>
          <figure className="w-[80%] h-auto flex-shrink-0">
            <img className="rounded-md w-full h-full object-cover" src="/nanopage/Rectangle 32.jpeg" alt="Fifth Image" />
          </figure>
        </div>
      </section>

      <Booking/>
    </main>
  );
};

export default MainContent;

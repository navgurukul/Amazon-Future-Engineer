import React from "react";

const LastPart = () => {
  return (
    <div className="flex flex-col gap-8 mt-20 max-w-full sm:max-w-[70%]">
      <div className="w-full">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left">
          Why Schedule a Mini Sprint?{" "}
        </div>
        <div className="text-base sm:text-lg md:text-xl leading-[170%] font-medium font-webtypestyles-body1 text-text-primary text-left mt-2">
        Mini Sprints offer a rich, multi-day experience that allows students to develop and strengthen their skills in key STEM areas. With hands-on projects and expert guidance, this program is ideal for schools and teachers looking to provide students with a more in-depth and engaging learning experience. 
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left">
        Ready to Elevate Student Skills?{" "}
        </div>
        <div className="text-base sm:text-lg md:text-xl leading-[170%] font-medium font-webtypestyles-body1 text-text-primary text-left mt-2">
        Book a Mini Sprint today and provide your students with the opportunity to dive deeper into the world of technology. Contact us now to schedule your session and embark on an enriching STEM adventure!{" "}
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left">
          Have Any Questions?
        </div>
        <b className="text-base sm:text-lg md:text-xl leading-[170%] font-webtypestyles-subtitle1 text-left text-darkslategray mt-2">
          <span>{`Reach out to us at `}</span>
          <span className="text-tomato">afeinnovation@ihub.com</span>
        </b>
      </div>
    </div>
  );
};

export default LastPart;
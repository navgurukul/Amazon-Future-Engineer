import React from "react";

const LastPart = () => {
  return (
    <div className="flex flex-col gap-8 mt-10">
      <div>
        <div className="w-full relative text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left inline-block">
          Why Schedule a Nano Sprint?{" "}
        </div>
        <div className="w-full relative text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-primary text-left inline-block">
          Nano Sprints are designed to fuel students' curiosity and enthusiasm.
          They provide an engaging and hands-on introduction to robotics and AI.
          This program is an excellent way for schools and teachers to enrich
          their STEM curriculum and inspire the next generation of innovators.{" "}
        </div>
      </div>
      <div>
        <div className="w-full relative text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left inline-block">
          Ready to Inspire?{" "}
        </div>
        <div className="w-full relative text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-primary text-left inline-block">
          Book a Nano Sprint today and give your students an exciting glimpse
          into the future of technology. Contact us now to schedule your session
          and start a transformative STEM journey!{" "}
        </div>
      </div>
      <div>
        <div className="w-full relative text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left inline-block">
          Have Any Questions?
        </div>
        <b className="w-full relative text-lg leading-[170%] inline-block font-webtypestyles-subtitle1 text-left text-darkslategray">
          <span>{`Reach out to us at `}</span>
          <span className="text-tomato">afeinnovation@ihub.com</span>
        </b>
      </div>
    </div>
  );
};

export default LastPart;

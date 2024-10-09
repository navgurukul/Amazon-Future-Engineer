import React from "react";


const LastPart = () => {
  const whatsappLink = `https://wa.me/${6366969292}`;
  return (
    <div className="flex flex-col mt-8 max-w-full sm:max-w-[70%]">
      {/* <div className="w-full">
        <div className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left">
          Why Schedule a Mini Sprint?{" "}
        </div>
        <div className="w-full relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
        Mini Sprints offer a rich, multi-day experience that allows students to develop and strengthen their skills in key STEM areas. With hands-on projects and expert guidance, this program is ideal for schools and teachers looking to provide students with a more in-depth and engaging learning experience.{" "}
        </div>
      </div> */}
      {/* <div className="w-full mt-4">
        <div className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left">
        Ready to Elevate Student Skills?{" "}
        </div>
        <div className="w-full relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
        Book a Mini Sprint today and provide your students with the opportunity to dive deeper into the world of technology. Contact us now to schedule your session and embark on an enriching STEM adventure!{" "}
        </div>
      </div> */}
      <div className="flex flex-col w-full gap-4">
        {/* <h1 className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left"> */}
        <h1 className="leading-[150%] text-subHeading1 md:text-heading6 font-['Amazon Ember'] text-midnight-blue-main text-left">
          Have Questions?
        </h1>
        {/* <p className="w-full relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']"> */}
        <p className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
          <span>{`Call Us or Whatsapp on `}</span>
          <a href={whatsappLink} target="_blank" className="text-tomato">+916366969292</a>
        </p>
      </div>
    </div>
  );
};

export default LastPart;
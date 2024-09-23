import type { NextPage } from 'next';

const SecondPopup: NextPage = () => {
  return (
    <>
      {/* Backdrop Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      {/* Popup Dialog */}
      <div
        className="fixed w-full md:w-1/3 bg-white z-50 p-8 gap-4 shadow-lg rounded-lg text-left text-gray-500 font-nunito-sans
        flex flex-col items-center justify-center 
        md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
      >
        <div className="flex flex-col items-center justify-start text-lg text-gray-full font-body-body-reg">
          <div className="w-full flex flex-col items-center justify-start gap-2">
            <img className="w-60 relative max-h-full" alt="Line Decoration" src="/nanopage/Rectangle 2933.svg"/>
            <div className="relative leading-[170%] font-medium text-center">
            Thanks for requesting a callback. We will reach out to you shortly to confirm your booking plans.
          </div>
          <div className="self-stretch bg-gainsboro h-[5px]"/>
          </div>

          <div className="self-stretch leading-[170%] font-medium font-webtypestyles-body1 text-center text-text-primary mt-4">
            <p className="m-0">{`Redirecting to Sprint Information page in 5 seconds or `}</p>
            <p className="m-0 text-tomato">Go to Sprint Information manually</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPopup;




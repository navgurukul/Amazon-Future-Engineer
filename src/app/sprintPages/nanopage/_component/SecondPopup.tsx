// import type { NextPage } from 'next';

// const SecondPopup: NextPage = () => {
//   return (
//     <>
//       <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
//       <div
//         className="fixed w-full md:w-1/3 bg-white z-50 p-8 gap-4 shadow-lg rounded-lg text-left text-gray-500 font-nunito-sans
//         flex flex-col items-center justify-center 
//         md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
//       >
//         <div className="flex flex-col items-center justify-start text-lg text-gray-full font-body-body-reg">
//           <div className="w-full flex flex-col items-center justify-start gap-2">
//             <img className="w-60 relative max-h-full" alt="Line Decoration" src="/nanopage/Rectangle 2933.svg"/>
//             <div className="relative leading-[170%] font-medium text-center">
//             Thanks for requesting a callback. We will reach out to you shortly to confirm your booking plans.
//           </div>
//           <div className="self-stretch bg-gainsboro h-[5px]"/>
//           </div>

//           <div className="self-stretch leading-[170%] font-medium font-webtypestyles-body1 text-center text-text-primary mt-4">
//             <p className="m-0">{`Redirecting to Sprint Information page in 5 seconds or `}</p>
//             <p className="m-0 text-tomato">Go to Sprint Information manually</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SecondPopup;

import type { NextPage } from 'next';


const SecondPopup: NextPage = () => {
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      {/* Popup Container */}
      <div
        className="fixed h-[400px]  w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-lg bg-white z-50 p-6 md:p-8 gap-4 shadow-lg rounded-lg text-left text-gray-500 font-nunito-sans
        flex flex-col items-center justify-center
        bottom-0 sm:bottom-0 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
      >
        {/* Popup Content */}
        <div className=" flex flex-col items-center justify-start text-lg text-gray-700 font-body-body-reg">
          <div className="w-full flex flex-col items-center justify-start gap-4">
            <img
              className="w-32 sm:w-40 md:w-48 lg:w-60 relative max-h-full"
              alt="Line Decoration"
              src="/nanopage/Rectangle 2933.svg"
            />
            <div className="relative leading-relaxed font-medium text-center text-gray-800 max-w-full">
              Thanks for requesting a callback. We will reach out to you shortly to confirm your booking plans.
            </div>
            <div className="self-stretch bg-gray-300 h-[5px]" />
          </div>

          {/* Redirect Information */}
          <div className="self-stretch leading-relaxed font-medium text-center text-gray-700 mt-4">
            <p className="m-0">
              Redirecting to Sprint Information page in 5 seconds or
            </p>
            <p className="m-0 text-red-500 cursor-pointer">
              Go to Sprint Information manually
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPopup;
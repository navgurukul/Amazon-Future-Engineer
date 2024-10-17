"use client"
import React from 'react'
import Content from "./_components/content"

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* <div className="w-full max-w-[90vw]"> */}
      <div className="w-full">
        <Content />
      </div>
    </div>
  )
}

export default page


// "use client";

// import SprintDetailsPage from "./_components/sprint-details";
// import React from "react";
// import Footer from "./_components/Footer";

// const page = () => {
//   return (
//     <div>
//       <SprintDetailsPage />
//       <Footer />
//     </div>
//   );
// };

// export default page;
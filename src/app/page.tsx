// "use client";
// import { useEffect } from "react";
// import Cookies from "js-cookie";
// import HomePage from "./homePages/page";
// import { useRouter } from "next/navigation";
// import {getProgramData} from "@/utils/api"

// export default function Home() {
//   const router = useRouter();

//   const fetchProgramData = async () => {
//     const programId:number = 2; 
//       const programData = await getProgramData(programId);
//       localStorage.setItem("programData", JSON.stringify(programData));

//   };

//   useEffect(() => {
//     // Cookies.remove('loginData')
//     fetchProgramData();
//     const localStorageData = localStorage.getItem("loginData");
//     const cookieData = Cookies.get("loginData");

//     if (!localStorageData && cookieData) {
//       localStorage.setItem("loginData", cookieData || "");
//       router.push("/sprintPages/nanopage");
//     }
//   }, []);
  
//   return (
//     <HomePage/>
//   );
// }



// "use client";
// import { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import HomePage from "./homePages/page";
// import { useRouter } from "next/navigation";
// import { getProgramData } from "@/utils/api";
// import NetworkError from "./networkerror/page";

// export default function Home() {
//   const router = useRouter();
//   const [isOnline, setIsOnline] = useState(true); 

//   const fetchProgramData = async () => {
//     const programId: number = 2;
//     const programData = await getProgramData(programId);
//     localStorage.setItem("programData", JSON.stringify(programData));
//   };

//   useEffect(() => {
//     fetchProgramData();
//     const localStorageData = localStorage.getItem("loginData");
//     const cookieData = Cookies.get("loginData");

//     if (!localStorageData && cookieData) {
//       localStorage.setItem("loginData", cookieData || "");
//       router.push("/sprintPages/nanopage");
//     }

//     setIsOnline(navigator.onLine);

//     const handleOnline = () => setIsOnline(true);
//     const handleOffline = () => setIsOnline(false);

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

//   return (
//     <>
//       {isOnline ? (
//         <HomePage /> 
//       ) : (
//         <NetworkError /> 
//       )}
//     </>
//   );
// }




"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import HomePage from "./homePages/page"; // Import your main Home Page component
import { useRouter } from "next/navigation";
import { getProgramData } from "@/utils/api";
import NetworkErrorPage from "./networkerror/page"; // Correct import for Network Error Page

export default function Home() {
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(true); // State to track network status

  const fetchProgramData = async () => {
    const programId: number = 2; 
    const programData = await getProgramData(programId);
    localStorage.setItem("programData", JSON.stringify(programData));
  };

  useEffect(() => {
    fetchProgramData();

    const localStorageData = localStorage.getItem("loginData");
    const cookieData = Cookies.get("loginData");

    if (!localStorageData && cookieData) {
      localStorage.setItem("loginData", cookieData || "");
      router.push("/sprintPages/nanopage");
    }

    // Track the initial online/offline state
    setIsOnline(navigator.onLine);

    // Add event listeners for network changes
    const handleOnline = () => {
      setIsOnline(true); // Set state to online
      console.log("Back online");
    };

    const handleOffline = () => {
      setIsOnline(false); // Set state to offline
      console.log("Lost internet connection");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [router]);

  return (
    <>
      {isOnline ? (
        <HomePage /> // Render HomePage if online
      ) : (
        <NetworkErrorPage /> // Render NetworkErrorPage if offline
      )}
    </>
  );
}

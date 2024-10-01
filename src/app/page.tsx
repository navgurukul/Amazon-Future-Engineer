"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";
import HomePage from "./homePages/page";
import { useRouter } from "next/navigation";
import {getProgramData} from "@/utils/api"

export default function Home() {
  const router = useRouter();

  const fetchProgramData = async () => {
    const programId:number = 2; 
      const programData = await getProgramData(programId);
      localStorage.setItem("programData", JSON.stringify(programData));

  };

  useEffect(() => {
    // Cookies.remove('loginData')
    fetchProgramData();
    const localStorageData = localStorage.getItem("loginData");
    const cookieData = Cookies.get("loginData");

    if (!localStorageData && cookieData) {
      localStorage.setItem("loginData", cookieData || "");
      router.push("/sprintPages/nanopage");
    }
  }, []);
  return (
      <HomePage offlinePopup={false} handleOfflineBookingClose={function (): void {
        throw new Error("Function not implemented.");
      } } handleClose={function (): void {
        throw new Error("Function not implemented.");
      } } />
  );
}
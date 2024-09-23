"use client";

import HomePage from "./homePages/page";

export default function Home() {
  return (
    <>
      <HomePage offlinePopup={false} handleOfflineBookingClose={function (): void {
        throw new Error("Function not implemented.");
      } } handleClose={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </>
  );
}
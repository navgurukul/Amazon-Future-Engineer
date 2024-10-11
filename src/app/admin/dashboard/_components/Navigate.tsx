"use client"
import React from 'react'
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";


const Navigate = () => {
    const pathname = usePathname();
    const router = useRouter();
    const isActive = (route: string) => pathname === route;
    const  handleNavigate = (routeId:string)=>{
      if(routeId === "upcoming-bookings" || routeId===pathname){
          router.push("/admin/dashboard/upcomingBookings")
      }
      else if(routeId === "calendar-view"){
          router.push("/admin/dashboard/calendar-view")
      }
      else if(routeId === "all-users"){
          router.push("/all-users")
      }
    }
  return (
    <div>
      {/* Navigation Buttons */}
      <div className="mt-[120px] flex-1 flex justify-center space-x-4">
        <Button
          variant="admin"
          className={`${isActive("/upcoming-bookings") ? "bg-red" : ""}`}
          onClick={() => {
            handleNavigate("upcoming-bookings");
          }}
        >
          Upcoming Bookings
        </Button>
        <Button
          variant="admin"
          className={`${isActive("/calendar-view") ? "bg-red" : ""}`}
          onClick={() => {
            handleNavigate("calendar-view");
          }}
        >
          Calendar View
        </Button>
        <Button
          variant="admin"
          className={`${isActive("/all-users") ? "bg-red" : ""}`}
          onClick={() => {
            handleNavigate("all-users");
          }}
        >
          All Users
        </Button>
      </div>
    </div>
  )
}

export default Navigate;
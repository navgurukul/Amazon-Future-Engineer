"use client"
import React from 'react'
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navigate = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (route: string) => pathname.includes(route);

  const handleNavigate = (routeId: string) => {
    if (routeId === "upcoming-bookings") {
      router.push("/admin/dashboard/upcomingBookings")
    } else if (routeId === "calendar-view") {
      router.push("/admin/dashboard/calendar")
    } else if (routeId === "all-users") {
      router.push("/all-users")
    }
  }

  return (
    <div>
      {/* Navigation Buttons */}
      <div className="mt-[140px] flex-1 flex justify-center space-x-4">
        <Button
          variant="admin"
          className={`${isActive("/admin/dashboard/upcomingBookings") ? "bg-incandescent-light text-incandescent-main" : ""}`}
          onClick={() => handleNavigate("upcoming-bookings")}
        >
          Upcoming Bookings
        </Button>
        <Button
          variant="admin"
          className={`${isActive("/admin/dashboard/calendar-view") ? "bg-incandescent-light text-incandescent-main" : ""}`}
          onClick={() => handleNavigate("calendar-view")}
        >
          Calendar View
        </Button>
        <Button
          variant="admin"
          className={`${isActive("/all-users") ? "bg-incandescent-light text-incandescent-main" : ""}`}
          onClick={() => handleNavigate("all-users")}
        >
          All Users
        </Button>
      </div>
    </div>
  )
}

export default Navigate;
import CombinedBookingPage from "./bookingPage";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";


const bookings = [
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 30,
    dateOfRequest: "12 Oct 2024",
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
    status: "Booking Requested",
  },
  {
    name: "Rahul Prakash",
    program: "Mini Sprint",
    phone: "+918975574567",
    students: "-",
    dateOfRequest: "12 Oct 2024",
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
    status: "Joined Waitlist",
  },
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 30,
    dateOfRequest: "12 Oct 2024",
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
    status: "Confirmed",
  },
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 30,
    dateOfRequest: "12 Oct 2024",
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
    status: "Confirmed",
  },
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 30,
    dateOfRequest: "12 Oct 2024",
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
    status: "Callback Requested",
  },
];

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [sprintProgram, setSprintProgram] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [status, setStatus] = useState("");
  const [showBookingPage, setShowBookingPage] = useState(false);

  const handleManageBookingClick = () => {
    setShowBookingPage(true); // Show the CombinedBookingPage when clicked
  };

  const totalItems = bookings.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const filteredBookings = bookings.filter((booking) => {
    const normalizedSearchQuery = searchQuery.toLowerCase();
    return (
      booking.name.toLowerCase().includes(normalizedSearchQuery) ||
      booking.phone.includes(searchQuery) ||
      booking.location.toLowerCase().includes(normalizedSearchQuery) ||
      booking.program.toLowerCase().includes(normalizedSearchQuery) ||
      booking.timeSlot.toLowerCase().includes(normalizedSearchQuery)
    );
  });

  const displayedBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
    {!showBookingPage ? (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6 space-y-8">
        <h1 className="text-13xl leading-[150%] font-extrabold text-midnight-blue-main">
          All Users
        </h1>
        <div className="relative flex items-center gap-4 w-full">
          <Image
            className="absolute left-4 z-10"
            src="/admin/search.svg"
            width={24}
            height={24}
            alt={"search img"}
          />
          <Input
            className="max-w-md pl-12"
            type="text"
            placeholder="Search by Name, Phone Number, Location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/admin/filter_list.svg"
              width={24}
              height={24}
              alt={"Filters icon"}
            />
            <span className="font-semibold">Filters</span>
          </div>
          {/* Sprint Program Select */}
          <div className="relative flex items-center w-1/4">
            <Select onValueChange={setSprintProgram} value={sprintProgram}>
              <SelectTrigger className="w-full border rounded-full px-4 py-6 flex justify-between items-center">
                <SelectValue placeholder="Sprint Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value=" ">Sprint Program</SelectItem>
                <SelectItem value="Nano Sprint">Nano Sprint</SelectItem>
                <SelectItem value="Mini Sprint">Mini Sprint</SelectItem>
                <SelectItem value="Mega Sprint">Mega Sprint</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date Range Input with Calendar Icon */}
          <div className="relative flex items-center w-1/4">
            <input
              type="text"
              placeholder="Date Range"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full border rounded-full px-4 py-3 pl-10"
            />
            <span className="absolute left-3">
              {/* <CalendarIcon size={18} /> */}
            </span>
          </div>

          {/* Status Select */}
          <div className="relative flex items-center w-1/4">
            <Select onValueChange={setStatus} value={status}>
              <SelectTrigger className="w-full border rounded-full px-4 py-6 flex justify-between items-center">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value=" ">Status</SelectItem>
                <SelectItem value="Confirmed">Confirmed</SelectItem>
                <SelectItem value="Booking Requested">
                  Booking Requested
                </SelectItem>
                <SelectItem value="Joined Waitlist">Joined Waitlist</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-black">Name</TableHead>
                <TableHead className="font-bold text-black">Program</TableHead>
                <TableHead className="font-bold text-black">Phone Number</TableHead>
                <TableHead className="font-bold text-black">No. of Students</TableHead>
                <TableHead className="font-bold text-black">Date of Request</TableHead>
                <TableHead className="font-bold text-black">Time Slot</TableHead>
                <TableHead className="font-bold text-black">Location</TableHead>
                <TableHead className="font-bold text-black">Status</TableHead>
                <TableHead className="font-bold text-black"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border-b border-grey-300 gap-8 font-body2-regular text-body2 leading-[170%]">
              {displayedBookings.map((booking, index) => (
                <TableRow
                  key={index}
                  className="border-t border-b border-transparent"
                >
                  <TableCell className="border-0">{booking.name}</TableCell>
                  <TableCell className="border-0">{booking.program}</TableCell>
                  <TableCell className="border-0">{booking.phone}</TableCell>
                  <TableCell className="border-0 text-center">
                    {booking.students}
                  </TableCell>
                  <TableCell className="border-0">
                    {booking.dateOfRequest}
                  </TableCell>
                  <TableCell className="border-0">{booking.timeSlot}</TableCell>
                  <TableCell className="border-0">{booking.location}</TableCell>
                  <TableCell className="border-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          booking.status === "Booking Requested"
                            ? "bg-orange-500"
                            : booking.status === "Joined Waitlist"
                            ? "bg-yellow-500"
                            : booking.status === "Confirmed"
                            ? "bg-green-500"
                            : booking.status === "Callback Requested"
                            ? "bg-red-500"
                            : booking.status === "Reschedule Requested"
                            ? "bg-pink-500"
                            : booking.status === "Cancelled"
                            ? "bg-red-500"
                            : "bg-gray-500"
                        }`}
                      ></span>
                      {booking.status}
                    </div>
                  </TableCell>
                  <TableCell className="border-0">
                    <a
                      href="#"
                      onClick={handleManageBookingClick}
                      className="text-incandescent-main hover:text-incandescent-dark"
                    >
                      Manage Booking
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="w-full relative flex flex-row items-center justify-end gap-4 text-left text-sm text-text-secondary font-webtypestyles-body2">
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="relative leading-[170%]">Rows per page:</div>
            <div className="flex flex-row items-center justify-start">
              <Select
                defaultValue="10"
                onValueChange={handleItemsPerPageChange}
              >
                <SelectTrigger className="relative flex items-center gap-2 leading-[170%]">
                  <SelectValue placeholder={itemsPerPage.toString()} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="relative leading-[170%]">
            {(currentPage - 1) * itemsPerPage + 1} -{" "}
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <ChevronLeft
              className={`w-6 h-6 cursor-pointer ${
                currentPage === 1
                  ? "text-gray-400 opacity-50 cursor-not-allowed"
                  : "text-black"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
            />
            <ChevronRight
              className={`w-6 h-6 cursor-pointer ${
                currentPage === totalPages
                  ? "text-gray-400 opacity-50 cursor-not-allowed"
                  : "text-black"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </div>
        </div>
      </div>
    </div>
    ) : (
        <CombinedBookingPage />
      )}
    </>
  );
};

export default Dashboard;
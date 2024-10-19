import SprintDetailsPage from "./sprint-details";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { fetchBookings } from "@/utils/api";
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useMemo, useState, useEffect } from "react";


// const bookings = [
//   {
//     name: "Rahul Prakash",
//     program: "Nano Sprint",
//     phone: "+918975574567",
//     students: 30,
//     dateOfRequest: "12 Oct 2024",
//     timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
//     location: "Bengaluru",
//     status: "Booking Requested",
//   },
//   {
//     name: "Rahul Prakash",
//     program: "Mini Sprint",
//     phone: "+918975574567",
//     students: "-",
//     dateOfRequest: "12 Oct 2024",
//     timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
//     location: "Bengaluru",
//     status: "Joined Waitlist",
//   },
//   {
//     name: "Rahul Prakash",
//     program: "Nano Sprint",
//     phone: "+918975574567",
//     students: 30,
//     dateOfRequest: "12 Oct 2024",
//     timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
//     location: "Bengaluru",
//     status: "Confirmed",
//   },
//   {
//     name: "Rahul Prakash",
//     program: "Mini Sprint",
//     phone: "+918975574567",
//     students: 30,
//     dateOfRequest: "12 Oct 2024",
//     timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
//     location: "Bengaluru",
//     status: "Confirmed",
//   },
//   {
//     name: "Mahij Prakash",
//     program: "Mini Sprint",
//     phone: "+918975574567",
//     students: 30,
//     dateOfRequest: "12 Oct 2024",
//     timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
//     location: "Bengaluru",
//     status: "Callback Requested",
//   },
//   {
//     name: "John Doe",
//     program: "Nano Sprint",
//     phone: "+918975574567",
//     students: 30,
//     dateOfRequest: "12 Oct 2024",
//     timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
//     location: "Bengaluru",
//     status: "Confirmed",
//   },
//   {
//     name: "Mayank Doe",
//     program: "Nano Sprint",
//     phone: "+918975574567",
//     students: 30,
//     dateOfRequest: "12 Oct 2024",
//     timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
//     location: "Bengaluru",
//     status: "Confirmed",
//   },
//   {
//     name: "Alice Smith",
//     program: "Nano Sprint",
//     phone: "+918975574567",
//     students: 30,
//     dateOfRequest: "12 Oct 2024",
//     timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
//     location: "Bengaluru",
//     status: "Callback Requested",
//   },
//   {
//     name: "Bob Johnson",
//     program: "Nano Sprint",
//     phone: "+918975574567",
//     students: 30,
//     dateOfRequest: "12 Oct 2024",
//     timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
//     location: "Bengaluru",
//     status: "Confirmed",
//   },
//   {
//     name: "Eve Williams",
//     program: "Nano Sprint",
//     phone: "+918975574567",
//     students: 30,
//     dateOfRequest: "12 Oct 2024",
//     timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
//     location: "Bengaluru",
//     status: "Confirmed",
//   },
//   {
//     name: "David Brown",
//     program: "Nano Sprint",
//     phone: "+918975574567",
//     students: 30,
//     dateOfRequest: "12 Oct 2024",
//     timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
//     location: "Bengaluru",
//     status: "Callback Requested",
//   },
// ];

const Dashboard: React.FC = () => {
  interface Booking {
    id: string;
    user: {
      name: string;
      phone: string;
    };
    slot: {
      venue: {
        city: string;
      };
      program: {
        title: string;
      };
    };
    booking_for: string;
    start_time: string;
    end_time: string;
    booking_batch_size: number;
    created_at: string;
    status: string;
  }

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [sprintProgram, setSprintProgram] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [status, setStatus] = useState("");
  const [showSprintPage, setShowSprintPage] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const loadBookings = async () => {
      const fetchedBookings = await fetchBookings();
      setBookings(fetchedBookings);
    };
    loadBookings();
  }, []);

  const totalItems = bookings.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // const handleManageBookingClick = () => {
  //   setShowSprintPage(true); // Show the SprintDetailsPage when clicked
  // };

  const handleSprintProgramChange = (value: string) => {
    setSprintProgram(value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
    setCurrentPage(1); // Reset to first page when filter change
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const handleSelectBooking = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowSprintPage(true);
  };

  const handleLogin = () => {
    window.open("/login", "_blank");
  }


  // const filteredBookings = useMemo(() => {
  //   return bookings.filter((booking) => {
  //     const matchesSearch = 
  //       booking.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       booking.phone.includes(searchQuery) ||
  //       booking.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       booking.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       booking.timeSlot.toLowerCase().includes(searchQuery.toLowerCase());

  //     const matchesProgram = sprintProgram === "" || sprintProgram === " " || booking.program === sprintProgram;
  //     const matchesStatus = status === "" || status === " " || booking.status === status;

  //     return matchesSearch && matchesProgram && matchesStatus;
  //   });
  // }, [searchQuery, sprintProgram, status]);

  const filteredBookings = bookings.filter((booking) => {
    const normalizedSearchQuery = searchQuery.toLowerCase();
    return (
      booking?.user?.name?.toLowerCase().includes(normalizedSearchQuery) ||
      booking?.user?.phone?.includes(searchQuery) ||
      booking?.slot?.venue?.city
        ?.toLowerCase()
        .includes(normalizedSearchQuery) ||
      booking?.slot?.program?.title
        ?.toLowerCase()
        .includes(normalizedSearchQuery) ||
      `${booking.booking_for} | ${booking.start_time} to ${booking.end_time}`
        .toLowerCase()
        .includes(normalizedSearchQuery)
    );
  });

  const displayedBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "d MMM yyyy");
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 10), parseInt(minutes, 10));
    return date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <>
    {!showSprintPage ? (
    <div className="min-h-screen bg-white mt-[79px] mx-[48px]">
      <div className="container mx-auto px-6 space-y-8">
        <h1 className="text-heading5 font-heading5-bold leading-[150%] font-extrabold text-midnight-blue-main">
          All Users
        </h1>
        <div className="flex">
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
          <Button className="rounded-full" variant="proceed" onClick={handleLogin}>
            Create User Profile
          </Button>
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
            <Select onValueChange={handleSprintProgramChange} value={sprintProgram}>
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
            <Select onValueChange={handleStatusChange} value={status}>
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
                <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Name</TableHead>
                <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Program</TableHead>
                <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">
                  Phone Number
                </TableHead>
                <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">
                  No. of Students
                </TableHead>
                <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">
                  Date of Request
                </TableHead>
                <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">
                  Time Slot
                </TableHead>
                <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Location</TableHead>
                <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Status</TableHead>
                <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border-b border-grey-300 gap-8 p font-body2-regular text-body2 leading-[170%]">
              {displayedBookings.map((booking, index) => (
                <TableRow
                  key={index}
                  className="border-t border-b border-transparent"
                >
                  {/* <TableCell className="border-0">{booking.name}</TableCell>
                  <TableCell className="border-0">{booking.program}</TableCell>
                  <TableCell className="border-0">{booking.phone}</TableCell>
                  <TableCell className="border-0 text-center">
                    {booking.students}
                  </TableCell>
                  <TableCell className="border-0">
                    {booking.dateOfRequest}
                  </TableCell>
                  <TableCell className="border-0">{booking.timeSlot}</TableCell>
                  <TableCell className="border-0">{booking.location}</TableCell> */}
                  <TableCell className="border-0">{booking.user.name || "N/A"}</TableCell>
                      <TableCell className="border-0">{booking.slot.program.title}</TableCell>
                      <TableCell className="border-0">{booking.user.phone}</TableCell>
                      <TableCell className="border-0 text-center">{booking.booking_batch_size}</TableCell>
                      <TableCell className="border-0">{`${formatDate(booking.created_at)}`}</TableCell>
                      <TableCell className="border-0">
                        {`${formatDate(booking.booking_for)} | ${formatTime(booking.start_time)} to ${formatTime(booking.end_time)}`}
                      </TableCell>
                      <TableCell className="border-0">{booking.slot.venue.city}</TableCell>
                  <TableCell className="border-0">
                    {/* <div className="flex items-center gap-2">
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
                    </div> */}
                    {booking.status}
                  </TableCell>
                  <TableCell className="border-0">
                    <a
                      href="#"
                      onClick={() => handleSelectBooking(booking)}
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
        <SprintDetailsPage booking={selectedBooking} />
      )}
    </>
  );
};

export default Dashboard;
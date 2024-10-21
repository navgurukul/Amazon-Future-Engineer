import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { fetchBookings } from "@/utils/api";
import { format } from 'date-fns';
import BookingDetails from './singleUserData';


const Dashboard = () => {
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
  }

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedBooking, setSelectedBooking] = useState<Booking | any>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false); // State to toggle details view

  useEffect(() => {
    const loadBookings = async () => {
      const fetchedBookings = await fetchBookings();
      setBookings(fetchedBookings);
    };
    loadBookings();
  }, []);

  const totalItems = bookings.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (value: any) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const filteredBookings = bookings.filter((booking) => {
    const normalizedSearchQuery = searchQuery.toLowerCase();
    return (
      booking?.user?.name?.toLowerCase().includes(normalizedSearchQuery) ||
      booking?.user?.phone?.includes(searchQuery) ||
      booking?.slot?.venue?.city?.toLowerCase().includes(normalizedSearchQuery) ||
      booking?.slot?.program?.title?.toLowerCase().includes(normalizedSearchQuery) ||
      `${booking.booking_for} | ${booking.start_time} to ${booking.end_time}`.toLowerCase().includes(normalizedSearchQuery)
    );
  });

  const displayedBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelectBooking = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowDetails(true);
  };

  // const handleGoBack = (): void => {
  //   setShowDetails(false); 
  //   setSelectedBooking(null);
  // };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'd MMM yyyy');
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10), parseInt(minutes, 10));
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
  };


  return (
    <div className="min-h-screen bg-white mt-[79px] mx-[48px]">
      <div className="container mx-auto px-6 space-y-8">
        {!showDetails ? ( // Conditionally render based on the state
          <>
            <h1 className="text-heading5 font-heading5-bold leading-[150%] font-extrabold text-midnight-blue-main">
              Upcoming Bookings
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

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Name</TableHead>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Program</TableHead>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Phone Number</TableHead>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">No. of Students</TableHead>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%] ">Time Slot</TableHead>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Location</TableHead>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="border-b border-grey-300 gap-8 p font-body2-regular text-body2 leading-[170%]">
                  {displayedBookings.map((booking) => (
                    <TableRow key={booking.id} className="border-t border-b border-transparent">
                      <TableCell className="border-0">{booking.user.name || "N/A"}</TableCell>
                      <TableCell className="border-0">{booking.slot.program.title}</TableCell>
                      <TableCell className="border-0">{booking.user.phone}</TableCell>
                      <TableCell className="border-0 text-center">{booking.booking_batch_size}</TableCell>
                      <TableCell className="border-0">
                        {`${formatDate(booking.booking_for)} | ${formatTime(booking.start_time)} to ${formatTime(booking.end_time)}`}
                      </TableCell>
                      <TableCell className="border-0">{booking.slot.venue.city}</TableCell>
                      <TableCell className="border-0">
                        <button
                          className="text-incandescent-main hover:text-incandescent-dark"
                          onClick={() => handleSelectBooking(booking)} // Handle Manage Booking click
                        >
                          Manage Booking
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination Controls */}
            <div className="w-full relative flex flex-row items-center justify-end gap-4 text-left text-sm text-text-secondary font-webtypestyles-body2">
              <div className="flex flex-row items-center justify-start gap-2">
                <div className="relative leading-[170%]">Rows per page:</div>
                <div className="flex flex-row items-center justify-start">
                  <Select defaultValue="10" onValueChange={handleItemsPerPageChange}>
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
          </>
        ) : (

          <BookingDetails booking={selectedBooking}/>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

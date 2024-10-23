import { SprintDetailsComponent } from "./sprint-details"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getAllUsersAndBookings } from "@/utils/api";
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useMemo, useState, useEffect } from "react";

const Dashboard: React.FC = () => {
  interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    bookings: Booking[];
    query: Query[];
    user: UserData[];
  }

  interface Query {
    id: number;
    user_id: number;
    program_id: number;
    venue_id: number;
    status: string;
    query_type: string;
    created_at: string;
  }

  interface UserData {
    user: never[];
    query: never[];
    bookings: never[];
    id: number;
    name: string;
    email: string;
    phone: string;
    school_id: number;
    profile_url: string | null;
    status: string;
    profile_complete: boolean;
    phone_verified: boolean;
    email_verified: boolean;
    whatsapp_consent: boolean;
    name_in_kannada: string | null;
    created_at: string;
    updated_at: string;
  }

  interface Booking {
    id: number;
    booking_batch_size: number;
    booking_for: string;
    status: string;
    start_time: string;
    end_time: string;
    created_at: string;
    program: {
      id: number;
      title: string;
    };
    venue: {
      city: string;
    };
  }

  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [sprintProgram, setSprintProgram] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [status, setStatus] = useState("all");
  const [showSprintPage, setShowSprintPage] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);


  useEffect(() => {
    const fetchAllBookings = async () => {
      setIsLoading(true);
      console.log(sprintProgram,currentPage,itemsPerPage)
      try {
        const result = await getAllUsersAndBookings(sprintProgram, currentPage, itemsPerPage);
        setUsers(result.data || []);
      } catch (error) {
        console.error("Failed to fetch bookings", error);
        setIsLoading(false);
      }
    };
    fetchAllBookings();
  }, [sprintProgram, currentPage, itemsPerPage]);

  




  const allBookings = useMemo(() => {
  
    // If users array is empty, keep loading true
    if (users.length === 0) {
      console.log("No users available, loading is true.");
      setIsLoading(true);
      return [];
    }
  
    console.log("Current users state:", users);  // Log full users array

    // If users array has data, set loading to false
    setIsLoading(false);
  
    return users.flatMap(user => {
      // Check if the user object contains `bookings`, otherwise skip it
      if (!user?.bookings) {
        console.log("Skipping user, no bookings available:", user);
        return [];  // Skip this user, return an empty array
      }

      console.log("Processing user:", user);  // Log the current user object
      
      // Check for user name and other details
      console.log("User's name:", user?.name || "No name provided");
      console.log("User's phone:", user?.phone || "No phone number provided");
  
      // Process the user's bookings
      return user?.bookings.map(booking => {
        console.log("Processing booking:", booking);  // Log each booking
  
        const processedBooking = {
          ...booking,
          user: {
            name: user.name || "N/A" ,
            phone: user.phone || "N/A"
          }
        };
  
        // Log the booking with attached user info
        console.log("Processed booking with user info:", processedBooking);
  
        return processedBooking;
      });
    });
  }, [users]);
  
  

    


  // const allBookings = useMemo(() => {
  //   console.log("Ram",users)
  //   return users.flatMap(user => 
  //     user.bookings.map(booking => ({
  //       ...booking,
  //       user: {
  //         name: user.name,
  //         phone: user.phone
  //       }
  //     }))
  //   );
  // }, [users]);


  const filteredBookings = allBookings.filter((booking) => {
    const normalizedSearchQuery = searchQuery.toLowerCase();
    const matchesSearch = 
      booking.user.name.toLowerCase().includes(normalizedSearchQuery) ||
      booking.user.phone.includes(searchQuery) ||
      booking.venue.city.toLowerCase().includes(normalizedSearchQuery) ||
      booking.program.title.toLowerCase().includes(normalizedSearchQuery) ||
      `${booking.booking_for} | ${booking.start_time} to ${booking.end_time}`
        .toLowerCase()
        .includes(normalizedSearchQuery);
    
    const matchesStatus = status === "all" || booking.status === status;
    
    return matchesSearch && matchesStatus;
  });

  const totalItems = filteredBookings.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const displayedBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSprintProgramChange = (value: string) => {
    if (value === "all"){
      setSprintProgram("");
    }
    else{
    setSprintProgram(value);
    }
    setCurrentPage(1);
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
    setCurrentPage(1);
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

  const handleSelectBooking = (booking: any) => {
    setSelectedBooking(booking);
    setShowSprintPage(true);
  };

  const handleLogin = () => {
    window.open("/login");
  };

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
              <div className="relative flex items-center w-1/4">
                <Select onValueChange={handleSprintProgramChange} value={sprintProgram}>
                  <SelectTrigger className="w-full border rounded-full px-4 py-6 flex justify-between items-center">
                    <SelectValue placeholder="Sprint Program" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem value="all">All Sprint</SelectItem>
                    <SelectItem value="NANO">Nano Sprint</SelectItem>
                    <SelectItem value="MINI">Mini Sprint</SelectItem>
                    <SelectItem value="MEGA">Mega Sprint</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative flex items-center w-1/4">
                <input
                  type="text"
                  placeholder="Date Range"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full border rounded-full px-4 py-3 pl-10"
                />
              </div>

              <div className="relative flex items-center w-1/4">
                <Select onValueChange={handleStatusChange} value={status}>
                  <SelectTrigger className="w-full border rounded-full px-4 py-6 flex justify-between items-center">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="BookingConfirmed">Booking Confirmed</SelectItem>
                    <SelectItem value="BookingRequested">Booking Requested</SelectItem>
                    <SelectItem value="AwaitingInfo">Joined Waitlist</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                    <SelectItem value="NotInterested">Not Interested</SelectItem>
                    <SelectItem value="RequestedReschedule">Requested Reschedule</SelectItem>
                    <SelectItem value="CallRequested">Call Requested</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
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
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Phone Number</TableHead>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">No. of Students</TableHead>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Date of Request</TableHead>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Time Slot</TableHead>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Location</TableHead>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]">Status</TableHead>
                    <TableHead className="text-subTitle2 font-extrabold font-subTitle2-bold leading-[170%]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="border-b border-grey-300 gap-8 p font-body2-regular text-body2 leading-[170%]">
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8">
                        <div className="flex items-center justify-center gap-2">
                          <Loader2 className="w-6 h-6 animate-spin" />
                          <span>Loading bookings...</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : displayedBookings.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8">
                        No bookings found
                      </TableCell>
                    </TableRow>
                  ) : (
                    displayedBookings.map((booking, index) => (
                      <TableRow key={index} className="border-t border-b border-transparent">
                        <TableCell className="border-0">{booking.user.name}</TableCell>
                        <TableCell className="border-0">{booking.program.title}</TableCell>
                        <TableCell className="border-0">{booking.user.phone}</TableCell>
                        <TableCell className="border-0 text-center">{booking.booking_batch_size}</TableCell>
                        <TableCell className="border-0">{formatDate(booking.created_at)}</TableCell>
                        <TableCell className="border-0">
                          {`${formatDate(booking.booking_for)} | ${formatTime(booking.start_time)} to ${formatTime(booking.end_time)}`}
                        </TableCell>
                        <TableCell className="border-0">{booking.venue.city}</TableCell>
                        <TableCell className="border-0">{booking.status}</TableCell>
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
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {!isLoading && displayedBookings.length > 0 && (
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
                  {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
                </div>
                <div className="flex flex-row items-center justify-start gap-4">
                  <ChevronLeft
                    className={`w-6 h-6 cursor-pointer ${currentPage === 1 ? "text-gray-400 opacity-50 cursor-not-allowed" : "text-black"}`}
                    onClick={() => handlePageChange(currentPage - 1)}
                  />
                  <ChevronRight
                    className={`w-6 h-6 cursor-pointer ${currentPage === totalPages ? "text-gray-400 opacity-50 cursor-not-allowed" : "text-black"}`}
                    onClick={() => handlePageChange(currentPage + 1)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <SprintDetailsComponent booking={selectedBooking} />
      )}
    </>
  );
};

export default Dashboard;






import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
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
import React, { useState } from "react";

const bookings = [
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 30,
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
  },
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 30,
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
  },
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 30,
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
  },
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 20,
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
  },
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 30,
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
  },
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 30,
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
  },
  {
    name: "Tamanna Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 30,
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
  },
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 30,
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
  },
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+918975574567",
    students: 30,
    timeSlot: "16 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
  },
  {
    name: "Rahul Prakash",
    program: "Nano Sprint",
    phone: "+919329786819",
    students: 20,
    timeSlot: "15 Oct 2024 | 4 PM to 6 PM",
    location: "Bengaluru",
  },
];

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState(""); 
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
    // const studentsQuery = Number(searchQuery);
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
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="relative text-13xl leading-[150%] font-extrabold text-midnight-blue-main">
        Upcoming Bookings
      </h1>
      <div className="relative flex items-center gap-4 w-full">
        <Image
          className="absolute left-4 z-40"
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

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Program</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>No. of Students</TableHead>
            <TableHead>Time Slot</TableHead>
            <TableHead>Location</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-b border-grey-300 gap-8 font-body2-regular text-body2 leading-[170%]">
        {displayedBookings.map((booking, index) => (
          <TableRow key={index} className="border-t border-b border-transparent"> {/* Add top and bottom border */}
            <TableCell className="border-0">{booking.name}</TableCell> {/* Remove border from cell */}
            <TableCell className="border-0">{booking.program}</TableCell>
            <TableCell className="border-0">{booking.phone}</TableCell>
            <TableCell className="border-0 text-center">{booking.students}</TableCell>
            <TableCell className="border-0">{booking.timeSlot}</TableCell>
            <TableCell className="border-0">{booking.location}</TableCell>
            <TableCell className="border-0">
              <a
                href="#"
                className="text-incandescent-main hover:text-incandescent-dark"
              >
                Manage Booking
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>      
      </Table>

      {/* Pagination Section */}
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
    </div>
  );
};

export default Dashboard;

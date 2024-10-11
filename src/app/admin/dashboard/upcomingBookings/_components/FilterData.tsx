"use client"
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"; // Import the shadcn pagination components
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const bookings = [
    { name: "Rahul Prakash", program: "Nano Sprint", phone: "+918975574567", students: 30, timeSlot: "16 Oct 2024 | 4 PM to 6 PM", location: "Bengaluru" },
    { name: "Rahul Prakash", program: "Nano Sprint", phone: "+918975574567", students: 30, timeSlot: "16 Oct 2024 | 4 PM to 6 PM", location: "Bengaluru" },
    { name: "Rahul Prakash", program: "Nano Sprint", phone: "+918975574567", students: 30, timeSlot: "16 Oct 2024 | 4 PM to 6 PM", location: "Bengaluru" },
    { name: "Rahul Prakash", program: "Nano Sprint", phone: "+918975574567", students: 30, timeSlot: "16 Oct 2024 | 4 PM to 6 PM", location: "Bengaluru" },
    { name: "Rahul Prakash", program: "Nano Sprint", phone: "+918975574567", students: 30, timeSlot: "16 Oct 2024 | 4 PM to 6 PM", location: "Bengaluru" },
  ];

const ITEMS_PER_PAGE = 5;

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = bookings.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const displayedBookings = bookings.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="relative text-13xl leading-[150%] font-extrabold text-midnight-blue-main">Upcoming Bookings</h1>

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
        <TableBody>
          {displayedBookings.map((booking, index) => (
            <TableRow key={index}>
              <TableCell>{booking.name}</TableCell>
              <TableCell>{booking.program}</TableCell>
              <TableCell>{booking.phone}</TableCell>
              <TableCell>{booking.students}</TableCell>
              <TableCell>{booking.timeSlot}</TableCell>
              <TableCell>{booking.location}</TableCell>
              <TableCell>
                <a href="#" className="text-incandescent-main hover:text-incandescent-dark">
                  Manage Booking
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between py-4">
        <span className="flex items-center gap-1">
          <p>Rows per page:</p>
          <Select defaultValue="5">
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder="5" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </span>

        {/* shadcn Pagination */}
        <Pagination>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            className={currentPage === 1 ? 'disabled' : ''}
          />
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={i + 1 === currentPage}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {totalPages > 5 && <PaginationEllipsis />}
          </PaginationContent>
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            className={currentPage === totalPages ? 'disabled' : ''}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default Dashboard;








import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
  } from "@/components/ui/pagination";

const bookings = [
  { name: "Rahul Prakash", program: "Nano Sprint", phone: "+918975574567", students: 30, timeSlot: "16 Oct 2024 | 4 PM to 6 PM", location: "Bengaluru" },
  { name: "Rahul Prakash", program: "Nano Sprint", phone: "+918975574567", students: 30, timeSlot: "16 Oct 2024 | 4 PM to 6 PM", location: "Bengaluru" },
  { name: "Rahul Prakash", program: "Nano Sprint", phone: "+918975574567", students: 30, timeSlot: "16 Oct 2024 | 4 PM to 6 PM", location: "Bengaluru" },
  { name: "Rahul Prakash", program: "Nano Sprint", phone: "+918975574567", students: 30, timeSlot: "16 Oct 2024 | 4 PM to 6 PM", location: "Bengaluru" },
  { name: "Rahul Prakash", program: "Nano Sprint", phone: "+918975574567", students: 30, timeSlot: "16 Oct 2024 | 4 PM to 6 PM", location: "Bengaluru" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="relative text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left">Upcoming Bookings</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="py-2 px-4 box-border text-left text-sm text-text-primary font-webtypestyles-subtitle2 ">Name</TableHead>
            <TableHead className="py-2 px-4 box-border text-left text-sm text-text-primary font-webtypestyles-subtitle2 ">Program</TableHead>
            <TableHead className="py-2 px-4 box-border text-left text-sm text-text-primary font-webtypestyles-subtitle2 ">Phone Number</TableHead>
            <TableHead className="py-2 px-4 box-border text-left text-sm text-text-primary font-webtypestyles-subtitle2 ">No. of Students</TableHead>
            <TableHead className="py-2 px-4 box-border text-left text-sm text-text-primary font-webtypestyles-subtitle2 ">Time Slot</TableHead>
            <TableHead className="py-2 px-4 box-border text-left text-sm text-text-primary font-webtypestyles-subtitle2 ">Location</TableHead>
            <TableHead className="py-2 px-4 box-border text-left text-sm text-text-primary font-webtypestyles-subtitle2 "></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking, index) => (
            <TableRow key={index}>
              <TableCell>{booking.name}</TableCell>
              <TableCell>{booking.program}</TableCell>
              <TableCell>{booking.phone}</TableCell>
              <TableCell>{booking.students}</TableCell>
              <TableCell>{booking.timeSlot}</TableCell>
              <TableCell>{booking.location}</TableCell>
              <TableCell>
                <Button variant="link" className="text-incandescent-main hover:text-incandescent-dark">
                  Manage Booking
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-end space-x-2 py-4">
        <span className="flex items-center gap-1">
          <p>Rows per page:</p>
          <Select defaultValue="10">
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="40">40</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </span>
        <div>1-5 of 100</div>
        <Button variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" /> 
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" /> 
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;

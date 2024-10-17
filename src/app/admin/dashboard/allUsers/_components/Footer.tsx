import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 w-full shadow-[0px_-2px_2px_rgba(0,0,0,0.04),0px_-1px_5px_rgba(0,0,0,0.08)] bg-white p-6 text-center text-lg text-gray-800 font-amazon-ember">
  <div className="flex flex-row items-center justify-between">
    <nav aria-label="Sprint actions" className="flex flex-row items-start justify-center gap-4">
      <Button
        className="h-14 px-8 border rounded-full text-[#3a3a3a] border-[#3a3a3a] bg-white hover:text-white"
        aria-label="Cancel Sprint"
      >
        Cancel Sprint
      </Button>
      <Button
        className="h-14 px-8 border rounded-full text-[#3a3a3a] border-[#3a3a3a] bg-white hover:text-white"
        aria-label="Mark as Not Interested"
      >
        Mark as Not Interested
      </Button>
    </nav>
    
    <div className="flex flex-row items-start justify-center gap-4">
      <Button
        className="h-14 px-8 bg-blue-800 text-white rounded-full"
        aria-label="Update Sprint Details"
      >
        Update Sprint Details
      </Button>
      <Button
        className="h-14 px-8 bg-gray-400 text-white rounded-full"
        aria-label="Reschedule Sprint"
      >
        Reschedule Sprint
      </Button>
      <Button
        className="h-14 px-8 bg-[#f55c38] text-white rounded-full"
        aria-label="Confirm Booking"
      >
        Confirm Booking
      </Button>
    </div>
  </div>
</footer>

  );
}

import { Button } from "@/components/ui/button";
interface FooterProps {
  programName: string;
}

export default function Footer({ programName }: FooterProps) {
  return (
    <footer className="fixed bottom-0 z-50 w-full shadow-[0px_-2px_2px_rgba(0,0,0,0.04),0px_-1px_5px_rgba(0,0,0,0.08)] bg-white p-6 text-center text-lg text-gray-800 font-amazon-ember">
      <div className="flex flex-row items-center justify-between">
        <nav aria-label="Sprint actions" className="flex flex-row items-start justify-between w-full">
          {/* Left Side Buttons */}
          <div className="flex gap-4">
            {(programName === "Nano Sprint" || programName === "") && (
              <>
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
              </>
            )}
            {(programName === "Mini Sprint" || programName === "Mega Sprint") && (
              <Button
                className="h-14 px-8 border rounded-full text-[#3a3a3a] border-[#3a3a3a] bg-white hover:text-white"
                aria-label="Mark as Not Interested"
              >
                Mark as Not Interested
              </Button>
            )}
          </div>

          {/* Right Side Buttons */}
          <div className="flex gap-4">
            {(programName === "Nano Sprint" || programName === "") && (
              <>
                <Button
                variant="proceed"
                  className="h-14 px-8 bg-blue-800 text-white rounded-full hover:bg-blue-900"
                  aria-label="Update Sprint Details"
                >
                  Update Sprint Details
                </Button>
                <Button
                variant="proceed"
                  className="h-14 px-8 bg-gray-400 text-white rounded-full hover:bg-gray-500"
                  aria-label="Reschedule Sprint"
                >
                  Reschedule Sprint
                </Button>
                <Button
                variant="proceed"
                  className="h-14 px-8 bg-[#f55c38] text-white rounded-full"
                  aria-label="Confirm Booking"
                >
                  Confirm Booking
                </Button>
              </>
            )}
            {(programName === "Mini Sprint" || programName === "Mega Sprint") && (
              <>
                <Button
                variant="proceed"
                  className="h-14 px-8 bg-blue-800 text-white rounded-full hover:bg-blue-900"
                  aria-label="Update Sprint Details"
                >
                  Update Sprint Details
                </Button>
                <Button
                variant="proceed"
                  className="h-14 px-8 bg-[#f55c38] text-white rounded-full"
                  aria-label="Confirm Booking"
                >
                  Go to Dashboard
                </Button>
              </>
            )}
          </div>
        </nav>
      </div>
    </footer>
  );
}
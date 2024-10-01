import type { NextPage } from "next";
import Image from "next/image";


interface FooterProps {
  handleOfflineBooking: () => void; 
}

const Footer:  NextPage<FooterProps> = ({handleOfflineBooking}) => {
  return (
    <div className="w-full bg-[#ffad33] h-auto text-center text-lg text-gray-800 font-amazon-ember py-4">
      <div className="flex flex-col md:flex-row justify-between items-center h-full px-6">
        {/* Logo Section */}
        <div className="flex flex-row items-center gap-4 text-xl font-amazon-ember-display">
          <Image
            className="w-9 h-9 object-cover"
            alt="AFE Makerspace Logo"
            src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg"
            width={36}
            height={36}
          />
          <div className="font-extrabold">AFE Makerspace</div>
        </div>

        {/* Privacy Policy */}
        <div className="mt-4 md:mt-0 font-medium leading-[170%] order-2 md:order-none">
          Privacy Policy
        </div>

        {/* Helpdesk Section */}
        <div className="flex flex-row items-center justify-center gap-2 px-6 py-2 mt-4 md:mt-0 rounded-full bg-gray-200 text-orange-600 order-3 md:order-none cursor-pointer" onClick={handleOfflineBooking}>
          <Image
            className="w-8 h-8 object-cover"
            alt="Helpdesk Icon"
            src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg"
            width={32}
            height={32}
          />
          <div className="font-medium leading-[170%]">Call Us</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
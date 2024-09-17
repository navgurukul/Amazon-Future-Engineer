import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

const Header: NextPage = () => {
  const onReshotIconMoleculesYBNSDClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className="w-full relative bg-bg-surface-default h-[120px] text-center text-sm text-bg-surface-default font-webtypestyles-buttonsmall">
      <div className="flex flex-row justify-between items-center h-full px-4">
        {/* Left Section - Logo */}
        <div className="relative w-[72px] h-[72px] cursor-pointer">
          <Image
            alt="Logo"
            src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg"
            layout="fill" // This makes the image responsive
            objectFit="cover" // Ensure the image covers the area properly
            onClick={onReshotIconMoleculesYBNSDClick}
          />
        </div>

        {/* Right Section - Language Switcher and Avatar */}
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center bg-whitesmoke-200 rounded-full p-2 gap-2">
            {/* English Button */}
            <div className="flex items-center justify-center bg-incandescent-main rounded-full h-8 px-4 py-2">
              <div className="font-medium">Eng</div>
            </div>

            {/* Language Icon */}
            <div className="flex items-center justify-center bg-whitesmoke-100 rounded-full h-8 px-4 py-2 text-text-primary">
              <div className="font-medium">ಅಇಈ</div>
            </div>
          </div>

          {/* Profile Avatar */}
          <div className="relative w-14 h-14 rounded-full">
            <Image
              alt="User Avatar"
              src="/nanopage/Ellipse 1.svg"
              layout="fill" // This ensures the avatar is responsive
              objectFit="cover" // Keeps the aspect ratio of the image
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

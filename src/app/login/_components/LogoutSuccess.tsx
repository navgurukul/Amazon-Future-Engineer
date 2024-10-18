import { useState, useEffect } from "react";

const LogoutSuccess: React.FC<{ show: boolean }> = ({ show }) => {
  return (
    <>
      {show && (
        <div className="fixed top-4 right-4 bg-white shadow-lg rounded-md p-4 flex items-center justify-center border border-green-500 text-center">
          <span className="text-green-500 font-medium">Logout Successfully</span>
        </div>
      )}
    </>
  );
};

export default LogoutSuccess;

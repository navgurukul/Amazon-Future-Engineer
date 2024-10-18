import { useState, useEffect } from "react";

const LoginSuccess: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;
  return (
    <>
      {show && (
        <div className="fixed top-4 right-4 bg-white shadow-lg rounded-md p-4 flex items-center justify-center border border-green-500 text-center">
          <span className="text-green-500 font-medium">Login Success</span>
        </div>
      )}
    </>
  );
};

export default LoginSuccess;

import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      
      {/* Render the page content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;

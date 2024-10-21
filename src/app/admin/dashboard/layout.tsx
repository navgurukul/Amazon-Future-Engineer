import React from 'react';
import Header from '../_components/header';
import Navigate from './_components/Navigate';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Navigate/>
      
      {/* Render the page content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;

// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/navbar'; 

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer';

const BrowseTasksLayout = () => {
    
    return (
      <div>
        <div className="bg-black">
          <Navbar></Navbar>
        </div>

        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default BrowseTasksLayout;
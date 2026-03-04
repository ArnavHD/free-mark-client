import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const BrowseTasksLayout = () => {
    
    return (
      <div>
        <div className="bg-black">
          <Navbar></Navbar>
        </div>

        <Outlet></Outlet>
      </div>
    );
};

export default BrowseTasksLayout;
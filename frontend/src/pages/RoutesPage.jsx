import React from "react";
import { MapComponent, RoutesNavbar, SideBar } from "../components";
import { Outlet } from "react-router-dom";

const RoutesPage = () => {
  return (
    <div className="flex flex-col h-screen mt-12">
      <RoutesNavbar />
      <div className="flex flex-grow">
    
        <div className="flex-grow ">
        <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;

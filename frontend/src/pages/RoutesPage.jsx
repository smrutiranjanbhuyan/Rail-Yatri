import React from "react";
import { MapComponent, RoutesNavbar, SideBar } from "../components";

const RoutesPage = () => {
  return (
    <div className="flex flex-col h-screen mt-14">
      <RoutesNavbar />
      <div className="flex flex-grow">
    
        <div className="flex-grow">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;

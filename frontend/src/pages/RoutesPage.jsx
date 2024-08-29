import React, { useEffect } from "react";
import { MapComponent, RoutesNavbar, SideBar } from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RoutesPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate=useNavigate()
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
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

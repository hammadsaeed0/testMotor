import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

const DashboardNavbar = () => {
  const [menuItems] = useState([
    { label: "My Account", path: "/dashboard/my-account" },
    { label: "My Garage", path: "/dashboard/my-garage" },
    { label: "My Inbox", path: "/dashboard/my-inbox" },
    { label: "Favourite Cars", path: "/dashboard/favourite-cars" },
    { label: "Garage Bookings", path: "/dashboard/garage-bookings" },
    { label: "Account Details", path: "/dashboard/account-details" },
    { label: "Logout", path: "/dashboard/logout" },
  ]);

  const location = useLocation();

  return (
    <>
     <Header/>
     <header className="bg-white sticky z-40 top-0 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Menu items */}
        <div className="w-full h-[105px] top-[187px] px-[40px] pb-[40px] border-t border-solid  justify-between border-b-4 border-[#F3EDED]">
          <ul className="w-full mt-6 block md:flex items-center text-indigo-800 justify-between h-[104px]">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`w-full text-center h-14 text-sm font-inter font-semibold leading-6 tracking-wider pb-1 ${
                  location.pathname === item.path ? 'text-[#FB5722]' : 'text-gray-600'
                } border-b-4 ${
                  location.pathname === item.path ? 'border-[#FB5722]' : 'border-[#F3EDED]'
                }`}
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
     <Footer/>
    </>
  );
};

export default DashboardNavbar;

import React from "react";
import { Outlet } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-4/5 mx-auto  h-screen">
      <div className="w-1/2 bg-cover bg-center">
        <div>
          <img className="w-screen" src="../public/hinhanh/signin.jpg" alt="" />
        </div>
      </div>
      <div className="w-1/2 flex flex-col  items-center ">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

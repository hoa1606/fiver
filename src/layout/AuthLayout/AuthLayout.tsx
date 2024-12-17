import React from "react";
import { Outlet } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <div>AuthLayout</div>
      {children}
    </div>
  );
};

export default AuthLayout;

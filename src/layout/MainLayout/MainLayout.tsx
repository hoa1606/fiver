import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div>MainLayout</div>
      {children}
    </>
  );
};

export default MainLayout;

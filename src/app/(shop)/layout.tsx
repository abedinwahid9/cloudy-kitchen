import MainNav from "@/components/Navbar/MainNav";
import MobNav from "@/components/Navbar/MobNav";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <MainNav />
      <main className="container mx-auto">{children}</main> <MobNav />
    </>
  );
};

export default layout;

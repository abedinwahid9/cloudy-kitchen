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
      <MobNav />
      <main className="container mx-auto">{children}</main>
    </>
  );
};

export default layout;

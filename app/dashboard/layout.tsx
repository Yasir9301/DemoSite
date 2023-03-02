'use client';
import Navbar from 'components/Layout/Navbar';
import Sidebar from 'components/Layout/Sidebar';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarActive, setSidebarActive] = React.useState<any>(true);
  return (
    <>
      <section className="flex">
      <Sidebar/>
        {/* <Sidebar sidebarActive={sidebarActive} />  */}
        <div className="relative w-[100%]">
          <Navbar/>
           {/* sidebarActive={sidebarActive}
             setSidebarActive={setSidebarActive} */}
          
          <div className="h-14  bg-slate-200" />
          <div className="h-[100vh] p-2 bg-slate-200">{children}</div>
        </div>
      </section>
    </>
  );
}

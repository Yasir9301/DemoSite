'use client';
import { Burger } from '@mantine/core';
import yasirAtom from 'atoms/YasirAtom';
import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil';

type Props = {};

const Navbar = (props: Props) => {
  const [sidebarActive, setSidebarActive] = useRecoilState(yasirAtom);
  return (
    <>
      <div className="absolute flex h-14 w-[100%] justify-between gap-4 bg-blue-900 text-white">
        <div >
          <Burger
          className='hover:bg-red-800'
            opened={sidebarActive}
            onClick={() => setSidebarActive((pre: boolean) => !pre)}
          />

          <input
            className=" mt-3 rounded-3xl border-2 border-black pl-2 text-black"
            size={25}
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="hidden sm:hidden md:block   ">
          <div className="mt-3 mr-12 flex gap-5">
            <Link href={'/dashboard'}>
              <h1 className="font-bold"> DashBoard </h1>
            </Link>

            <Link href={'/dashboard/about'}>
              <h1 className="font-bold">About </h1>
            </Link>

            <Link href={'/dashboard/contact'}>
              <h1 className="font-bold">Contact </h1>
            </Link>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Navbar;

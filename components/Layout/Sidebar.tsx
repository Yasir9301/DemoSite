'use client';
import yasirAtom from 'atoms/YasirAtom';
import React from 'react';
import Link from 'next/link';
import {
  BeakerIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';

type Props = {};

import { useRecoilState } from 'recoil';

const Sidebar = (props: Props) => {
  const [sidebarActive, setSidebarActive] = useRecoilState(yasirAtom);
  return (
    <div
      className={
        sidebarActive
          ? 'h-screen w-56  bg-white transition-all'
          : 'h-screen w-0 overflow-hidden bg-blue-900 transition-all'
      }
    >
      <div className="flex h-14 justify-center bg-blue-900 p-3 font-bold text-white ">
        COREui
      </div>
      <div className=" ml-2 mt-7 ">
        <ul className="flex flex-col gap-5">
          <li className="flex gap-2  hover:text-blue-700">
            <HomeIcon className=" h-5 w-5" />
            <Link href={'/dashboard'}>
              <h1 className="font-bold"> DashBoard </h1>
            </Link>
          </li>

          <li className="flex gap-2  hover:text-blue-700">
            <PhoneIcon className=" h-5 w-5" />
            <Link href={'/dashboard/contact'}>
              <h1 className="font-bold">Contact </h1>
            </Link>
          </li>
          <li className="flex gap-2  hover:text-blue-700">
            <InformationCircleIcon className="flex h-5 w-5" />
            <Link href={'/dashboard/about'}>
              <h1 className="font-bold">About </h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

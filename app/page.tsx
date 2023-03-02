'use client';
import React from 'react';
// import Dashboard from './dashboard/Dashboard';
import Link from 'next/link';

type Props = {};

const Home = (props: Props) => {
  //
  return (
    <>
    <div className='flex flex-wrap justify-center content-center w-[75%] '>
    <h1>To Visit The Demo Web Please Click The Button below</h1>
    <Link href={'/dashboard'}><h1 className='font-bold'> 
    <button className='color h-12 w-12 bg-orange-600'> Click me </button> </h1>
    </Link>
    
   </div>
    </>
  );
};

export default Home;

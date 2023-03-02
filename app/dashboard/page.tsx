import Image from 'next/image';
import dash from '../../public/dash.jpg';
import React from 'react';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <div className="font-extrabold mb-11">Dashboard</div>
      <div className='flex gap-5'>
        <h1 className="text-justify italic"></h1>
<Image src='/dash.JPG' alt='img' width={700} height={500}/>
<Image src='/dash2.JPG' alt='img' width={500} height={500}/>

      </div>
    </>
  );
};

export default Dashboard;

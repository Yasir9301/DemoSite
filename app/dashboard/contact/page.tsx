import Image from 'next/image';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div>
        <div className="font-bold">Contact Us</div>
        <div className="ml-10 mt-10">
          <Image src="/contact.png " alt="img" width={700} height={500} />
        </div>
      </div>
    </>
  );
};

export default page;

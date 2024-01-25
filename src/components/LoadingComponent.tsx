import React from 'react'
import { Rings } from 'react-loader-spinner';

export const LoadingComponent = () => {
  return (
    <div className="w-screen h-screen top-0 left-0 bottom-0  fixed bg-[#000000db] z-[60] flex flex-col justify-center items-center">
      <Rings
        visible={true}
        height="80"
        width="80"
        color="white"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p className="text-white text-2xl font-bold">Locating the IP</p>
    </div>
  );
}

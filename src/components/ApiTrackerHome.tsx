"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { SearcherResult } from './SearcherResult';
import { longLatInterface } from "@/utils/interfaces";
const MapView = dynamic(() => import("../components/MapView"), { ssr: false });







export const ApiTrackerHome = () => {

const [SearchIP, setSearchIP] = useState<boolean>(false)

const [longLat, setLongLat] = useState<longLatInterface>({
  lat:0,
  lng:0
});

  return (
    <div className="flex h-screen flex-col w-screen items-center">
      <div className="h-[40%] lg:h-[26%] w-full flex flex-col items-center bg-blue-image bg-blue-image-mobile bg-center bg-cover lg:bg-blue-image-desktop">
        <p className="mt-5 mb-5 text-white font-medium text-2xl ">
          IP Address Tracker
        </p>
        <SearcherResult setLongLat={setLongLat} setSearchIP={setSearchIP} />
      </div>
      <div className="h-[60%] lg:h-[74%] w-full z-10">
        <MapView longLat={longLat} search={SearchIP} />
      </div>
    </div>
  );
}

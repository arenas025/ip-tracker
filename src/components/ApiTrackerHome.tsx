"use client";
import { useEffect, useState } from "react";

import { SearcherResult } from './SearcherResult';
import  MapView, { longLatInterface }  from "./MapView";
import { LatLngTuple } from "leaflet";



export interface infoInterface {
  ipAddres: string;
  location:string
  timezone: string;
  isp: string;
}


export const ApiTrackerHome = () => {

const [SearchIP, setSearchIP] = useState<boolean>(false)

const [longLat, setLongLat] = useState<longLatInterface>({
  lat:0,
  lng:0
});


  return (
    <div className="flex h-screen flex-col w-screen items-center">
      <div className="h-[40%] w-full flex flex-col items-center lg:bg-blue-image bg-blue-image-mobile bg-center bg-cover">
        <p className="mt-5 mb-5 text-white font-medium text-2xl ">
          IP Address Tracker
        </p>
        <SearcherResult setLongLat={setLongLat} setSearchIP={setSearchIP} />
      </div>
      <div className="h-[60%] w-full z-10">
        <MapView longLat={longLat} search={SearchIP} />
      </div>
    </div>
  );
}

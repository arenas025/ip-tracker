import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'
import iconArrow from "../../public/icon-arrow.svg";
import { InfoComponent } from './InfoComponent';
import { infoInterface } from './ApiTrackerHome';
import { LatLngTuple } from 'leaflet';
import { longLatInterface } from './MapView';

interface SearcherResultInterface {
  setSearchIP: Dispatch<SetStateAction<boolean>>;
  setLongLat: Dispatch<SetStateAction<longLatInterface>>;
}


interface IpInfo {
  ip: string;
  isp: string;
  location: {
    city: string;
    country: string;
    geonameId: number;
    lat: number;
    lng: number;
    postalCode: string;
    region: string;
    timezone: string;
  };
}


export const SearcherResult = ({setSearchIP,setLongLat}: SearcherResultInterface) => {

const [info, setInfo] = useState<infoInterface>({
  ipAddres: "",
  isp: "",
  location: "",
  timezone: "",
});

const [ip, setIp] = useState<string>("")

const search = (ip:string) => {
  fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_YFBJWhnlHRPEoXOfHcjtAkMtm3zyv&ipAddress=${ip}`
  ).then(async (e:any)=>{
    const response: IpInfo = await e.json()
    console.log(response)
    setInfo({
      ipAddres:response.ip,
      location:response.location.city,
      isp:response.isp,
      timezone:response.location.timezone
    })
    setLongLat({lng:response.location.lng, lat:response.location.lat})
  });
}


  return (
    <div className="flex flex-col w-80 z-30">
      <div className="w-full border-solid h-14 flex items-center justify-center  ">
        <div className="w-[85%] flex rounded-l-lg h-full bg-white items-center justify-center">
          <input
            onChange={(e) => {
              setIp(e.target.value);
            }}
            type="text"
            className="text-xl font-normal w-[90%] focus:outline-none"
          />
        </div>
        <div
          onClick={() => {
            search(ip)
            setSearchIP(true)
            }}
          className="w-[15%] flex items-center justify-center h-full bg-black rounded-r-lg"
        >
          <Image src={iconArrow} alt="icon-arrow" />
        </div>
      </div>
      <div className="w-full flex-col h-[100%] mobile1:h-96  bg-white pt-5 pb-5 mobile1:mt-10 mt-4 rounded-3xl flex justify-center items-center gap-6 ">
        <InfoComponent title="IP ADDRESS" info={info.ipAddres} />
        <InfoComponent title="LOCATION" info={info.location} />
        <InfoComponent title="TIMEZONE" info={info.timezone} />
        <InfoComponent title="ISP" info={info.isp} />
      </div>
    </div>
  );
};

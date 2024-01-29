"use client"
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import iconArrow from "../../public/icon-arrow.svg";
import { InfoComponent } from './InfoComponent';
import { LoadingComponent } from './LoadingComponent';
import { IpInfo, SearcherResultInterface, infoInterface, longLatInterface } from '@/utils/interfaces';



export const SearcherResult = ({setSearchIP,setLongLat}: SearcherResultInterface) => {

const [info, setInfo] = useState<infoInterface>({
  ipAddres: "",
  isp: "",
  location: "",
  timezone: "",
});



const [ip, setIp] = useState<string>("")
const [isLoading, setIsLoading] = useState<boolean>(false)

const search = (ip:string) => {
  setIsLoading(true)
  fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_YFBJWhnlHRPEoXOfHcjtAkMtm3zyv&ipAddress=${ip}`
  )
  .then(async (e:any)=>{
    setIsLoading(true)
    const response: IpInfo = await e.json()
    setInfo({
      ipAddres:response.ip,
      location:response.location.city,
      isp:response.isp,
      timezone:response.location.timezone
    })
    setLongLat({lng:response.location.lng, lat:response.location.lat})
  })
  .catch((e) => {
    if(e){
      alert("The IP does not exist or is wrong")
    }
  })
  .finally(()=>{
    setIsLoading(false);
  })
}


  return (
    <div className="flex flex-col w-80 lg:items-center z-20">
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
            search(ip);
            setSearchIP(true);
          }}
          className="w-[15%] flex items-center justify-center h-full bg-black rounded-r-lg"
        >
          <Image src={iconArrow} alt="icon-arrow" />
        </div>
      </div>
      <div className="w-full flex-col h-[100%] mobile1:h-96 bg-white pt-5 pb-5 mobile1:mt-10 mt-4 rounded-3xl flex justify-center items-center gap-6 lg:flex-row lg:w-[50vw] lg:h-40 lg:justify-evenly ">
        <InfoComponent title="IP ADDRESS" info={info.ipAddres} />
        <p className="hidden lg:block text-[#979797] opacity-40 text-[30px] font-[100]">
          |
        </p>
        <InfoComponent title="LOCATION" info={info.location} />
        <p className="hidden lg:block text-[#979797] opacity-40 text-[30px] font-[100]">
          |
        </p>
        <InfoComponent title="TIMEZONE" info={info.timezone} />
        <p className="hidden lg:block text-[#979797] opacity-40 text-[30px] font-[100]">
          |
        </p>
        <InfoComponent title="ISP" info={info.isp} />
      </div>
      {isLoading && <LoadingComponent />}
    </div>
  );
};

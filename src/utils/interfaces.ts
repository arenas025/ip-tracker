import { Dispatch, SetStateAction } from "react";

export interface infoInterface {
  ipAddres: string;
  location: string;
  timezone: string;
  isp: string;
}

export interface infoComponentInterface {
  title:string,
  info:string
}

export interface longLatInterface {
  lng: number;
  lat: number;
}

export interface mapViewInterface {
  longLat: longLatInterface;
  search: boolean;
}


export interface IpInfo {
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
  code?: number;
  message?: string;
}

export interface SearcherResultInterface {
  setSearchIP: Dispatch<SetStateAction<boolean>>;
  setLongLat: Dispatch<SetStateAction<longLatInterface>>;
}
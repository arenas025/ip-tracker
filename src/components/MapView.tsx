'use client'
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/images/marker-icon.png";
import { LatLngTuple, icon } from "leaflet";

export interface longLatInterface {
  lng: number;
  lat: number;
}

interface mapViewInterface {
  longLat:longLatInterface,
  search: boolean;
}

const MapView = ({longLat,search}:mapViewInterface) => {
  
  function LocationMarker() {

    const map = useMapEvents({});
    if(search){
      console.log(longLat)
      map.flyTo(longLat, map.getZoom());
    }


    map.on("load",()=>{
      console.log("Se cargó")
    })

// const map = useMapEvents({
//   click() {
//     map.locate();
//   },
//   locationfound(e) {
//     setPosition(e.latlng!);
//     console.log(e.latlng)
//     map.flyTo({ lat: longLat[1], lng: longLat[0]}, map.getZoom());
//   },
// });

    return longLat === null ? null : (
      <Marker
        icon={icon({
          iconSize: [20, 30],
          popupAnchor: [0, -15],
          className: "ml-0 mr-0",
          iconUrl:
            "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
        })}
        position={longLat!}
      ></Marker>
    );
      // return position === null ? null : (
      //   <Marker position={position}>
      //     <Popup>You are here</Popup>
      //   </Marker>
      // );
    
  }

  return (
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={20}
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapView;

'use client'
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";

import { icon } from "leaflet";

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

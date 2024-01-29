'use client'
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

import LocationMarker from "./MapComponent";
import { mapViewInterface } from "@/utils/interfaces";





const MapView = ({ longLat, search }: mapViewInterface) => {
  return (
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={30}
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker longLat={longLat} search={search} />
    </MapContainer>
  );
};

export default MapView;

import { mapViewInterface } from '@/utils/interfaces';
import { icon } from 'leaflet';
import React from 'react'
import { useMapEvents, Marker } from "react-leaflet";



  const LocationMarker = ({ longLat, search }: mapViewInterface) => {
    const map = useMapEvents({});
    if (search) {
      console.log(longLat);
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
  };

export default LocationMarker
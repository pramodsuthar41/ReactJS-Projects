import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { RiUserLocationFill } from "react-icons/ri";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from 'react';

const API_KEY = 'NdrV8WGo8fQNTxxV8sXG';

const MapComponent = ({ lat, lon }) => {

  const [viewState, setViewState] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 14,
  });

  useEffect(() => {
    setViewState((prev) => ({
      ...prev,
      latitude: lat,
      longitude: lon,
    }));
  }, [lat, lon]);

  return (
    <div className="map" style={{ width: "100%", height: "100%" }}>
   <Map
  initialViewState={{
    longitude: lon,
    latitude: lat,
    zoom: 14
  }}
  mapStyle="https://api.maptiler.com/maps/streets/style.json?key="
>
  <Marker longitude={lon} latitude={lat} />
</Map>
    </div>
  );
};

export default MapComponent;
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2tldGNoYXJ0IiwiYSI6ImNsNW5maTh2ZzBlcmIzZXBmcnR2ZHpkYXUifQ.qIF3V5Kc2_6MBxb3nuR0lQ';

export default function App() {
  const mapContainer = useRef();
  const map = useRef(null);
  const [lng, setLng] = useState(72.853710);
  const [lat, setLat] = useState(19.161180);
  const [zoom, setZoom] = useState(18);


    map.current = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  },[]);

  return (
    <div>
      <div className="sidebar2">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div id='map' ref={mapContainer} className="w-[20vw] h-auto" />
    </div>
  );
}

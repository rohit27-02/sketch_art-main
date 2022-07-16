import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';


mapboxgl.accessToken = 'pk.eyJ1Ijoic2tldGNoYXJ0IiwiYSI6ImNsNW5maTh2ZzBlcmIzZXBmcnR2ZHpkYXUifQ.qIF3V5Kc2_6MBxb3nuR0lQ';

export default function App() {
 
  const map = useRef(null);
  const [lng, setLng] = useState(72.853710);
  const [lat, setLat] = useState(19.161180);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    map.current.flyTo({
      center: [lng, lat],
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });
  }, []);


    map.current = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [70,20],
      zoom: zoom,
     
    })
   
    
      const marker = new mapboxgl.Marker()
.setLngLat([lng, lat]).setPopup(popup).addTo(map.current);

const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  'Construction on the Washington Monument began in 1848.'
  );


 

  return (
    <div>
      
      <div id='map'  className="w-[20vw] h-auto" />
    </div>
  );
}

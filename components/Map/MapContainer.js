import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import styles from './map.module.css';
const MapContainer = ({searchRes}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(22);
  const [lat] = useState(51.510794);
  const [zoom] = useState(4);

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/winter-v2/style.json?key=${process.env.NEXT_PUBLIC_KEY_MAP}`,
      center: [lng,lat],
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    searchRes.map((item)=>{
      new maplibregl.Marker({color: "#FF0000"})
        .setLngLat([item.long,item.lat])
        .addTo(map.current);
      
    })

  });
  return(
    <div className={styles.mapwrap}>
    <div ref={mapContainer} className={styles.map} />
    </div>
  )

  
}

export default MapContainer
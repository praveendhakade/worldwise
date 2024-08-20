import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "../components/Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useCities } from "../hooks/context-hooks";

const Map = () => {
  const [mapPosition, setMapPostion] = useState([40, 0]);
  const { cities } = useCities();
  const {isLoading: isLoadingPostion, position: geolocationPosition, getPosition } = useGeolocation();
  
  const [mapLat, mapLng] = useUrlPosition();

  useEffect(() => {
    if (mapLat && mapLng) setMapPostion([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition) {
      setMapPostion([geolocationPosition.lat, geolocationPosition.lng])
    }
  }, [geolocationPosition]);
  // console.log(mapPosition);
  return (
    <div className={styles.mapContainer}>
{ !geolocationPosition &&   <Button onClick={getPosition} type="position" >
        {isLoadingPostion ? "Loading... " : "Use your position."}
      </Button>}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities.map((city) => {
          return (
            <Marker
              key={city.id}
              position={[city.position.lat, city.position.lng]}
            >
              <Popup>
                <span>{city.emoji}</span>
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          );
        })}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

const ChangeCenter = (prop) => {
  const { position } = prop;
  const map = useMap();
  map.setView(position);
  return null;
};

const DetectClick = () => {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
};

export default Map;

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const fireIcon = L.divIcon({
  html: '<div class="fire-marker">🔥</div>',
  className: "fire-icon",
  iconSize: [32, 32],
  iconAnchor: [16, 28],
  popupAnchor: [0, -24],
});

const Map = ({ fires }) => {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: "calc(100vh - 180px)", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {fires.map((fire, index) =>
        fire.geometry.map((g, i) => {
          const coords = g.coordinates;
          const position = Array.isArray(coords[0]) ? [coords[0][1], coords[0][0]] : [coords[1], coords[0]];

          return (
            <Marker key={`${fire.id}-${index}-${i}`} position={position} icon={fireIcon}>
              <Popup>
                <strong>{fire.title}</strong>
                <div>{new Date(g.date).toLocaleString()}</div>
                <div>{fire.sources?.[0]?.id ?? "NASA EONET"}</div>
              </Popup>
            </Marker>
          );
        })
      )}
    </MapContainer>
  );
};

export default Map;
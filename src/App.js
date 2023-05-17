import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "./App.css";
import { useState } from "react";
import L from "leaflet";
import icon from "./download.png";
import "leaflet/dist/leaflet.css";
function App() {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [showmap, setShowMap] = useState(false);
  const [position, setPosition] = useState([18.5204, 73.8567]);

  function MapView() {
    let map = useMap();
    map.setView([lat, long], map.getZoom());

    return null;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(lat.length>0 && long.length>0){
    setPosition([parseFloat(lat), parseFloat(long)]);
    setShowMap(true);}
    else{
      alert("Please enter valid Inputs")
    }
  };

  const customIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [25, 35],
    iconAnchor: [5, 30],
  });
 

  return (
    <div className="App">

<div className="form">
      <h1 className="header">Please enter Latitude and Longitude for Desired Location..!</h1>
        <input
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          type="text"
          placeholder="Latitude"
        />
        <input
          value={long}
          onChange={(e) => setLong(e.target.value)}
          type=""
          placeholder="Longitude"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      





      
       <MapContainer
          className="map"
          center={position}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution="Google Maps"
            // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
            // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
            url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
            maxZoom={20}
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
          <Marker icon={customIcon} position={position}></Marker>
          <MapView />
        </MapContainer>
      
    </div>
  );
}

export default App;

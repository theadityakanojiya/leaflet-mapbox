import React from 'react';
import { Icon } from 'leaflet';
import './App.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  // Array of marker data
  const markers = [
    {
      geocode: [26.4599, 80.3319],
      popUp: "Hello, I am Pop Up 1",
    },
    {
      geocode: [26.3750, 80.3319],
      popUp: "Hello, I am Pop Up 2",
    },
    {
      geocode: [26.4150, 80.3719],
      popUp: "Hello, I am Pop Up 3",
    },
    {
      geocode: [26.4150, 80.2919],
      popUp: "Hello, I am Pop Up 4",
    },
  ];

  // Create custom icon
  const customIcon = new Icon({
    iconUrl: require("./icons/placeholder.png"), // Make sure this path is correct!
    iconSize: [38, 38],  // Icon size
    iconAnchor: [19, 38], // Position of icon anchor
    popupAnchor: [0, -38], // Position of popup
  });

  return (
    <MapContainer center={[26.4499, 80.3319]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      {/* TileLayer from OpenStreetMap */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Render markers */}
      {markers.map((marker, index) => {
        console.log(`Rendering marker at: ${marker.geocode}`); // Log for debugging
        return (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default App;

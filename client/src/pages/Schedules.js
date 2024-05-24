import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import vanIcon from '../img/van.png';
import '../Schedules.css';
import { getSchedules } from '../services/scheduleService';

const dummyVanLocation = [51.505, -0.09];

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const schedulesData = await getSchedules();
      setSchedules(schedulesData);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  };

  const vanIconMarker = new L.Icon({
    iconUrl: vanIcon,
    iconSize: [150, 150],
    iconAnchor: [22, 38],
    popupAnchor: [-3, -76],
  });

  return (
    <div className="schedules-page">
      <h2>My Schedules</h2>
      <div className="schedule-list">
        {schedules.length > 0 ? (
          schedules.map((schedule) => (
            <div key={schedule.id} className="schedule-card">
              <h3><strong>Date:</strong> {schedule.date}</h3>
              <p><strong>Time:</strong> {schedule.time}</p>
              <p><strong>Location:</strong> {schedule.location}</p>
            </div>
          ))
        ) : (
          <p>No schedules available.</p>
        )}
      </div>
      <div className="map-container">
        <MapContainer center={dummyVanLocation} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={dummyVanLocation} icon={vanIconMarker}>
            <Popup>
              Garbage Van is here!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Schedules;

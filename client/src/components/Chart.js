// Chart.js
import React from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';
import { Chart as ChartJS, registerables } from 'chart.js';
import 'chartjs-plugin-datalabels';

ChartJS.register(...registerables);

const HeatmapLayer = ({ points }) => {
  const map = useMap();

  React.useEffect(() => {
    const heat = L.heatLayer(points, { radius: 25 }).addTo(map);
    return () => {
      map.removeLayer(heat);
    };
  }, [map, points]);

  return null;
};

const Chart = ({ type, data, heatmapData }) => {
  switch (type) {
    case 'line':
      return <Line data={data} />;
    case 'bar':
      return <Bar data={data} />;
    case 'pie':
      return <Pie data={data} />;
    case 'doughnut':
      return <Doughnut data={data} />;
    case 'heatmap':
      return (
        <MapContainer center={[20, 80]} zoom={5} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <HeatmapLayer points={heatmapData} />
        </MapContainer>
      );
    default:
      return null;
  }
};

export default Chart;

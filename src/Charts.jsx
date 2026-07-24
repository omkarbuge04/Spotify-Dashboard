import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
function Charts({ artistData, tracks }) {
  if (!artistData || !tracks || tracks.length === 0) {
    return null;
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#000",
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#000",
        },
        grid: {
          color: "#d3d3d3",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#000",
        },
        grid: {
          color: "#d3d3d3",
        },
      },
    },
  };

  const doughnutData = {
    labels: ["Listeners", "Play Count"],
    datasets: [
      {
        data: [
          Number(artistData.stats.listeners),
          Number(artistData.stats.playcount),
        ],
        backgroundColor: [
          "#1DB954",
          "#3B82F6",
        ],
        borderColor: "#ffffff",
        borderWidth: 3,
      },
    ],
  };
  const barData = {
    labels: tracks.slice(0, 5).map((track) => track.name),
    datasets: [
      {
        label: "Top Tracks",
        data: tracks
          .slice(0, 5)
          .map((track) => Number(track.playcount)),
        backgroundColor: [
          "#1DB954",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#9966FF",
        ],
        borderRadius: 8,
      },
    ],
  };
  return (
    <div className="charts">
      <div className="chart-card">
        <h2 style={{ color: "#fff", textAlign: "center" }}>
          Artist Statistics
        </h2>
        <div
          style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "15px",
            height: "350px",
          }}
        >
          <Doughnut data={doughnutData} />
        </div>
      </div>
      <div className="chart-card">
        <h2 style={{ color: "#fff", textAlign: "center" }}>
          Top 5 Tracks
        </h2>
        <div
          style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "15px",
            height: "350px",
          }}
        >
          <Bar data={barData} options={options} />
        </div>
      </div>
    </div>
  );
}
export default Charts;
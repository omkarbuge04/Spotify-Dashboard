import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Charts({ artistData, tracks }) {
  if (!artistData || !tracks.length) {
    return null;
  }
  const statsData = {
    labels: ["Listeners", "Play Count"],
    datasets: [
      {
        label: "Artist Stats",
        data: [
          Number(artistData.stats.listeners),
          Number(artistData.stats.playcount),
        ],
      },
    ],
  };
  const tracksData = {
    labels: tracks.slice(0, 5).map((track) => track.name),
    datasets: [
      {
        label: "Top Tracks",
        data: tracks
          .slice(0, 5)
          .map((track) => Number(track.playcount)),
      },
    ],
  };
  return (
    <div className="charts">
      <div className="chart-card">
        <h2>Artist Statistics</h2>
        <Bar data={statsData} />
      </div>
      <div className="chart-card">
        <h2>Top 5 Tracks</h2>
        <Bar data={tracksData} />
      </div>
    </div>
  );
}
export default Charts;
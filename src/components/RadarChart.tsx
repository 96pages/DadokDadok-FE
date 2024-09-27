import { Chart, registerables } from "chart.js";
import { Radar } from "react-chartjs-2";

const chartData = {
  labels: [
    "소설/시",
    "수필/에세이",
    "경제/경영",
    "과학",
    "예술/대중문화",
    "역사",
  ],
  datasets: [
    {
      label: "",
      data: [65, 48, 19, 36, 73, 50],
      fill: true,
      backgroundColor: "#4d7742",
      borderColor: "#4d7742",
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
    },
  },
  scales: {
    r: {
      ticks: {
        display: false,
        stepSize: 20,
        backdropColor: "transparent",
      },
      angleLines: {
        display: true,
      },
      suggestedMin: 0,
      suggestedMax: 100,
      pointLabels: {
        font: {
          size: 16,
          weight: "bold" as const,
        },
      },
    },
  },
};
const RadarChart = () => {
  Chart.register(...registerables);
  return <Radar data={chartData} options={options} />;
};

export default RadarChart;

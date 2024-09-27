import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ],
  datasets: [
    {
      label: "",
      data: [3, 1, 7, 8, 2, 5, 0, 1, 1, 4, 9, 1],
      backgroundColor: ["rgba(75, 192, 85, 0.2)"],
      borderColor: ["rgb(75, 192, 95)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BarChart = () => {
  Chart.register(...registerables);
  return <Bar data={chartData} options={options} />;
};

export default BarChart;

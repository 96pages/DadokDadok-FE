import { ArcElement, Chart, Legend, Plugin, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
const chartData = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [40, 60],
      backgroundColor: ["#f1b24a", "#4d7742"],
      borderWidth: 0,
      weight: 1,
    },
  ],
};
const options = { cutout: "60%" };
const textCenter: Plugin<"doughnut"> = {
  id: "textCenter",
  beforeDatasetsDraw(chart) {
    const { ctx, data } = chart;

    ctx.save();
    ctx.font = "bolder 1.2rem sans-serif";
    ctx.fillStyle = "#4d7742";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      data.datasets[0].data[0] + "%",
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

const DoughnutChart = () => {
  Chart.register(ArcElement, Tooltip, Legend);
  return <Doughnut data={chartData} options={options} plugins={[textCenter]} />;
};

export default DoughnutChart;

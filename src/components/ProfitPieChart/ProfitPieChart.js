import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { ProfitPieChartWrapper } from "./ProfitPieChart.styled";

const data = {
  labels: ["Blue"],
  datasets: [
    {
      label: "Goal Completed",
      display: false,
      data: [70, 30],
      backgroundColor: ["rgb(110,150,243)", "rgb(40,51,107)"],
      hoverOffset: 4,
    },
  ],
};
const options = {
  type: "doughnut",
  data: data,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    datalabels: {
      color: "rgb(113,150,255)",
    },
  },
};
const ProfitPieChart = () => {
  return (
    <ProfitPieChartWrapper className="chart-container">
      <Doughnut options={options} data={data} />
    </ProfitPieChartWrapper>
  );
};

export default ProfitPieChart;

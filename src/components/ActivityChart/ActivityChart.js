// import React, { useState, useEffect, useRef } from "react";
// import { Chart } from "chart.js";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { ActivityChartWrapper } from "./ActivityChart.styled";

// import { Data } from "../../utils/Data";

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    datalabels: {
      color: "rgb(113,150,255)",
    },
    tooltip: {
      titleColor: "rgb(113,150,255)",
      backgroundColor: "rgb(113,150,255)",
      bodyColor: "green",
      displayColors: false,
      yAlign: "bottom",
    },
  },
  scales: {
    xAxes: {
      grid: {
        lineWidth: 0.5,
        display: true,
        borderColor: "transparent",
        tickColor: "transparent",
      },
      ticks: {
        display: false,
        color: "rgb(57,58,67)",
        font: {
          size: 24,
        },
      },
    },
    yAxis: {
      beginAtZero: true,
      offset: true,
      grid: {
        color: "rgb(57,58,67)",
        lineWidth: 0.5,
        tickColor: "transparent",
        borderColor: "transparent",
      },
      ticks: {
        display: false,
        color: "rgb(113,150,255)",
        font: {
          size: 24,
        },
      },
    },
  },
};

export const data = {
  labels: [5, 9, 11, 13, 15, 17, 19, 21, 22, 23, 25, 27],
  datasets: [
    {
      data: [
        0, 1250, 1750, 1000, 2250, 2400, 2500, 2800, 2450, 1800, 1300, 1000,
      ],
      labels: ["0", "5k", "10k", "15k"],
      display: true,
      backgroundColor: "rgb(113,150,255)",
      hoverBackgroundColor: "rgba(255, 99, 132, 0.5)",
      borderRadius: Number.MAX_VALUE,
      borderWidth: 2,
      borderSkipped: false,
    },
  ],
};
export default function ActivityChart() {
  return (
    <div
      className="chart-container"
      style={{ position: "relative", height: "40vh", width: "40vw" }}
    >
      <Bar
        options={options}
        data={data}
        style={{ width: "50%", height: "50%" }}
      />
    </div>
  );
}

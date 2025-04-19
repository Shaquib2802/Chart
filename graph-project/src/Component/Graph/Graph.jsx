import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { Get_Graph } from "../Service/Get_Graph";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip
);

const Charts = () => {
  const {
    data: graphData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["graph"],
    queryFn: Get_Graph,
  });

  if (isLoading) return <div className="p-4">Loading chart...</div>;
  if (isError || !graphData?.data)
    return <div className="p-4">Error loading chart data</div>;

  const labels = graphData.data.stage || [];
  const dataValues = graphData.data.stage_data || [];

  const chartData1 = {
    labels: labels,
    datasets: [
      {
        label: "Lead Stage Count",
        data: dataValues,
        backgroundColor: "rgba(75, 85, 99, 0.6)",
        borderRadius: 5,
        barThickness: 30,
        borderSkipped: false,
      },
    ],
  };

  const optionData1 = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "#af7ac5",
          font: { size: 10, weight: "600" },
        },
        grid: { display: false },
      },
      y: {
        ticks: {
          color: "#af7ac5",
          font: { size: 12, weight: "600" },
        },
        grid: { display: true },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#4B5563",
          font: { weight: "600" },
        },
      },
    },
  };

  const chartData2 = {
    labels: labels,
    datasets: [
      {
        label: "Lead Trend",
        data: dataValues,
        borderColor: "#4B5563",
        borderWidth: 2,
        fill: false,

        pointRadius: 3,
        pointBackgroundColor: "#4B5563",
      },
    ],
  };

  const optionData2 = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#4B5563",
          font: { size: 10, weight: "600" },
        },
      },
      y: {
        grid: { display: false },
        ticks: {
          color: "#4B5563",
          font: { size: 12, weight: "600" },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#4B5563",
          font: { weight: "600" },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="p-5 flex flex-col md:flex-row gap-8">
      <div className="bg-white shadow-md border border-gray-300 rounded-md w-full md:w-1/2 p-4 h-[400px]">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Bar Chart - Lead Stages
        </h2>
        <Bar data={chartData1} options={optionData1} />
      </div>

      <div className="bg-white shadow-md border border-gray-300 rounded-md w-full md:w-1/2 p-4 h-[400px]">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Line Chart - Lead Trend
        </h2>
        <Line data={chartData2} options={optionData2} />
      </div>
    </div>
  );
};

export default Charts;

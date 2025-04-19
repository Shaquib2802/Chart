import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import {
  RiExchangeDollarLine,
  RiShieldUserLine,
  RiShoppingBag2Line,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { IoArrowUpOutline, IoArrowDown } from "react-icons/io5";

const Graph = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      const response = await fetch("your_api_endpoint_here");
      const data = await response.json();
      if (data.response_code === 200) {
        setChartData(data);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  const chartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: chartData.stage,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Stages",
      align: "left",
    },
  };

  const chartSeries = [
    {
      name: "Stage Data",
      data: chartData.stage_data,
    },
    {
      name: "Stage Percentage",
      data: chartData.stage_per,
    },
  ];

  return (
    <div>
      <div className="flex justify-around">
        <div className="bg-[#D6DFFD] rounded-md my-5  w-60  p-4  max-w-sm shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-gray-500 font-semibold tracking-wide text-xs">
                Visitors
              </div>
              <div className="  font-semibold text-gray-800">698k</div>
              <div className="flex items-center ">
                <div>
                  <IoArrowUpOutline className="mt-1 text-sm  text-green-600" />
                </div>
                <div className="text-green-500 text-xs font-semibold mt-1">
                  {" "}
                  25% <span className="text-gray-400">Last Month</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 p-1 rounded-md">
              <RiShieldUserLine className="text-gray-500 text-lg" />
            </div>
          </div>

          <div className="h-16 w-full">
            <ApexCharts
              options={chartOptions}
              series={chartSeries}
              type="bar"
              height={160}
            />
          </div>
        </div>

        <div className="bg-[#F3F6E1] rounded-md my-5  w-60 p-4  max-w-sm shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-gray-500 font-semibold text-xs tracking-wide">
                Bookings
              </div>
              <div className=" font-semibold text-gray-800">10.63k</div>
              <div className="flex items-center ">
                <div>
                  <IoArrowDown className="mt-1 text-sm  text-red-600" />
                </div>
                <div className="text-red-500 text-xs font-semibold mt-1">
                  {" "}
                  .5% <span className="text-gray-500">Last Month </span>{" "}
                </div>
              </div>
            </div>
            <div className="bg-gray-200 p-1.5 rounded-md">
              <RiShoppingBag2Line className="text-gray-500 text-lg" />
            </div>
          </div>

          <div className="h-16 w-full">
            <ApexCharts
              options={chartOptions}
              series={chartSeries}
              type="line"
              height={160}
            />
          </div>
        </div>
        <div className="bg-[#FFEAE9] rounded-md my-5 w-60  p-4  max-w-sm shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-gray-500 font-semibold tracking-wide text-xs">
                Revenue
              </div>
              <div className=" font-semibold text-gray-800">85420k</div>
              <div className="flex items-center ">
                <div>
                  <IoArrowUpOutline className="mt-1 text-sm  text-red-600" />
                </div>
                <div className="text-red-500 text-xs font-semibold mt-1">
                  {" "}
                  2.1% <span className="text-gray-400">Last Month</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 p-1 rounded-md">
              <RiMoneyDollarCircleLine className="text-gray-500 text-lg" />
            </div>
          </div>

          <div className="h-16 w-full">
            <ApexCharts
              options={chartOptions}
              series={chartSeries}
              type="bar"
              height={160}
            />
          </div>
        </div>
        <div className="bg-[#D8F6D8] rounded-md my-5  w-60 p-4  max-w-sm shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-gray-500 font-semibold text-xs tracking-wide">
                Rooms
              </div>
              <div className=" font-semibold text-gray-800">45/365</div>
              <div className="flex items-center ">
                <div>
                  <IoArrowUpOutline className="mt-1 text-sm  text-green-600" />
                </div>
                <div className="text-green-500 text-xs font-semibold mt-1">
                  {" "}
                  .5% <span className="text-gray-500">Last Month </span>{" "}
                </div>
              </div>
            </div>
            <div className="bg-gray-200 p-1.5 rounded-md">
              <RiExchangeDollarLine className="text-gray-500 text-lg" />
            </div>
          </div>

          <div className="h-16 w-full">
            <ApexCharts
              options={chartOptions}
              series={chartSeries}
              type="line"
              height={160}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;

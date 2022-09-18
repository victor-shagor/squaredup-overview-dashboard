import React from "react";

import Chart from "react-apexcharts";
import { PieChartProps } from "constants/interfaces";

const PieChart = ({ label, colors, series }: PieChartProps) => {
  const options = {
    labels: label,
    colors: colors,
    dataLabels: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        donut: {
          size: "58%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: undefined,
              offsetY: 10,
            },
            value: {
              show: true,
              fontSize: "16px",
              fontWeight: "bold",
              color: undefined,
              offsetY: -20,
            },
            total: {
              show: true,
              showAlways: true,
              label: "Total Resumes",
              fontSize: "15px",
              fontFamily: "SFProText",
              color: "#373d3f",
            },
          },
        },
      },
    },
  };
  return (
    <div>
      <Chart
        options={{
          legend: {
            position: "right",
            offsetY: 100,
            height: 300,
          },
          ...options,
        }}
        type="donut"
        width={500}
        height={320}
        series={series}
      />
    </div>
  );
};

export default PieChart;

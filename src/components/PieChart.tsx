import React from "react";

import Chart from "react-apexcharts";
import { ChartProps } from "constants/interfaces";

const PieChart = ({ options, series, width, height }: ChartProps) => {
  return (
    <div data-testid="piechart-container">
      <Chart
        data-testid="piechart"
        options={{
          legend: {
            position: "right",
            offsetY: 100,
            height: 300,
          },
          ...options,
        }}
        type="donut"
        width={width}
        height={height}
        series={series}
      />
    </div>
  );
};

export default PieChart;

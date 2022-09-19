import Chart from "react-apexcharts";
import { ChartProps } from "constants/interfaces";

const BarChart = ({ series, options, width, height }: ChartProps) => {
  return (
    <div data-testid="barchart-container">
      <Chart
        options={{ chart: { type: "bar" }, ...options }}
        type="bar"
        width={width}
        height={height}
        series={series}
      />
    </div>
  );
};
export default BarChart;

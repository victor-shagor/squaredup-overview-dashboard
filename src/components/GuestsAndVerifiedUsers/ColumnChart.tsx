import Chart from "react-apexcharts";
import { BarChartProps } from "constants/interfaces";

const Columnchart = ({ categories, series }: BarChartProps) => {
  const option = {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    colors: ["#5a5bb5", "#5dace6"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      labels: {
        show: true,
        rotate: 0,
        rotateAlways: false,
      },
      categories: categories,
    },
    yaxis: {
      min: 0,
      max: 500,
      labels: {
        show: true,
        formatter: (value: any) => {
          return value;
        },
      },
    },
    fill: {
      opacity: 1,
    },
  };
  return (
    <>
      <Chart
        options={{ chart: { type: "bar" }, ...option }}
        type="bar"
        width={"100%"}
        height={320}
        series={series}
      />
    </>
  );
};
export default Columnchart;

import { ResumeDetailsPieChartProps } from "constants/interfaces";
import PieChart from "components/PieChart";

const ResumeDetailsPieChart = ({
  label,
  series,
}: ResumeDetailsPieChartProps) => {
  const options = {
    labels: label,
    colors: ["#5a5bb5", "#5dace6"],
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
      <PieChart options={options} width={500} height={320} series={series} />
    </div>
  );
};

export default ResumeDetailsPieChart;

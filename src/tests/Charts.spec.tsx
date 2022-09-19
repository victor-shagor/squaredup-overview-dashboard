import { render, screen } from "@testing-library/react";
import BarChart from "components/BarChart";
import PieChart from "components/PieChart";
import renderer from "react-test-renderer";

jest.mock("react-apexcharts", () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

const options = {
  labels: ["test1", "test2"],
  colors: ["#5a5bb5", "#5dace6"],
  dataLabels: {
    enabled: false,
  },
};
const series = [30, 70];

const mockData = [
  {
    name: "Guest Users",
    data: [225, 1419, 1665, 194, 3, 3, 3, 2],
  },
  {
    name: "Verified Users",
    data: [7, 329, 451, 643, 310, 559, 567, 115],
  },
];

describe("Charts", () => {
  it("should render piechart component", () => {
    render(
      <PieChart options={options} width={500} height={320} series={series} />
    );
    expect(screen.getByTestId("piechart-container")).toBeInTheDocument();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <PieChart options={options} width={500} height={320} series={series} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render BarChart component", () => {
    render(
      <BarChart options={options} width={500} height={320} series={mockData} />
    );
    expect(screen.getByTestId("barchart-container")).toBeInTheDocument();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BarChart
          options={options}
          width={500}
          height={320}
          series={mockData}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

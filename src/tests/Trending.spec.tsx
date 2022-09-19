import { render, screen } from "@testing-library/react";
import Trending from "components/Trending/Trending";
import TrendingCard from "components/Trending/TrendingCard";
import renderer from "react-test-renderer";

jest.mock("react-apexcharts", () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

const mockData = [
  {
    _id: "Engineer",
    count: 6,
  },
  {
    _id: "Nursing",
    count: 5,
  },
  {
    _id: "Doctor",
    count: 5,
  },
];

describe("Trending components", () => {
  it("should render component with the correct style", () => {
    render(<Trending array={mockData} />);
    expect(screen.getByTestId("trending-container")).toHaveStyle(
      `height:25rem`
    );
    expect(screen.getByTestId("trending-container")).toHaveStyle(`width:46.4%`);
  });

  it("should render no data if array is empty", () => {
    render(<TrendingCard array={[]} />);
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  });

  it("should render loading state if loading is true", () => {
    render(<TrendingCard array={[]} loading={true} />);
    expect(screen.getByTestId("loading-state")).toBeInTheDocument();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Trending array={mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

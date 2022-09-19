import { render, fireEvent, screen } from "@testing-library/react";
import GuestAndVerifiedUsers from "components/GuestsAndVerifiedUsers/GuestAndVerifiedUser";
import renderer from "react-test-renderer";

const mockData = {
  guestUser: {
    name: "Guest Users",
    data: [225, 1419, 1665, 194, 3, 3, 3, 2],
  },
  verifiedUser: {
    name: "Verified Users",
    data: [7, 329, 451, 643, 310, 559, 567, 115],
  },
  category: ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"],
};
jest.mock("react-apexcharts", () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

describe("guest and verified user component", () => {
  it("render active user component with the correct style", () => {
    const onClickToggle = jest.fn();
    render(
      <GuestAndVerifiedUsers
        columnChartToggle={"yearly"}
        guestAndVerifiedUsers={mockData}
        onClickToggle={onClickToggle}
      />
    );
    expect(screen.getByTestId("user-metric-container")).toHaveStyle(
      `height:25rem`
    );
    expect(screen.getByTestId("user-metric-container")).toHaveStyle(
      `width:96.5%`
    );
  });

  it("should change active toggle button when  clicked", () => {
    const onClickToggle = jest.fn();
    render(
      <GuestAndVerifiedUsers
        columnChartToggle={"yearly"}
        guestAndVerifiedUsers={mockData}
        onClickToggle={onClickToggle}
      />
    );
    const dailyToggleButton = screen.getByTestId("daily-toggle-button");
    const monthlyToggleButton = screen.getByTestId("monthly-toggle-button");
    const yearlyToggleButton = screen.getByTestId("yearly-toggle-button");

    expect(yearlyToggleButton).toHaveStyle(`background-color: #2C2C2C`);
    expect(monthlyToggleButton).toHaveStyle(`background-color: white`);
    expect(dailyToggleButton).toHaveStyle(`background-color: white`);
    5;
    fireEvent.click(monthlyToggleButton);

    expect(onClickToggle).toHaveBeenCalled();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <GuestAndVerifiedUsers
          columnChartToggle={"yearly"}
          guestAndVerifiedUsers={mockData}
          onClickToggle={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

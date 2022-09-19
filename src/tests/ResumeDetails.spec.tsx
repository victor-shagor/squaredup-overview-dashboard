import { render, screen } from "@testing-library/react";
import ResumeDetails from "components/ResumeDetails/ResumeDetails";
import renderer from "react-test-renderer";

jest.mock("react-apexcharts", () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

const mockData = {
  sharedResumes: 10,
  unSharedResume: 90,
};

describe("resume details component", () => {
  it("render active user component with the correct style", () => {
    render(<ResumeDetails sharedAndUnsharedResumes={mockData} />);
    expect(screen.getByTestId("resume-details-container")).toHaveStyle(
      `height:25rem`
    );
    expect(screen.getByTestId("resume-details-container")).toHaveStyle(
      `width:46.4%`
    );
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(<ResumeDetails sharedAndUnsharedResumes={mockData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

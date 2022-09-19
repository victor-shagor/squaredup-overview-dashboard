import { fireEvent, render, screen } from "@testing-library/react";
import Button from "components/Button";
import renderer from "react-test-renderer";

describe("Button Component", () => {
  it("render button component with the correct style when not active", () => {
    const onClick = jest.fn();

    render(
      <Button text={"test"} onClick={onClick} testId="testid" active={false} />
    );
    expect(screen.getByTestId("testid")).toHaveStyle(`background-color:white`);
    expect(screen.getByTestId("testid")).toHaveStyle(`color:#2C2C2C`);
  });

  it("render active button component with the correct style", () => {
    const onClick = jest.fn();

    render(
      <Button text={"test"} onClick={onClick} testId="testid" active={true} />
    );
    expect(screen.getByTestId("testid")).toHaveStyle(
      `background-color:#2C2C2C`
    );
    expect(screen.getByTestId("testid")).toHaveStyle(`color:white`);
  });

  it("onclick event should be triggered", () => {
    const onClick = jest.fn();

    render(
      <Button text={"test"} onClick={onClick} testId="testid" active={true} />
    );
    const buttonClick = screen.getByTestId("testid");
    expect(onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(buttonClick);
    expect(onClick).toHaveBeenCalled();
  });

  it("renders correctly", () => {
    const onClick = jest.fn();
    const tree = renderer
      .create(
        <Button text={"test"} onClick={onClick} testId="testid" active={true} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

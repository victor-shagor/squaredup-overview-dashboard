import renderer from "react-test-renderer";
import { render, fireEvent, screen } from "@testing-library/react";
import ActiveUsers from "components/ActiveUsers/ActiveUsers";

const mockActiveUser = [
  {
    firstName: "test1",
    lastName: "vandop",
    email: "ddklsdfkd@red.com",
    created: "3 years ago",
  },
  {
    firstName: "Thiago",
    lastName: "Margarida",
    email: "thiago.margarida@gmail.com",
    created: "3 years ago",
  },
];
it("render active user component with the correct style", async () => {
  const onClickActiveUserToggle = jest.fn();
  render(
    <ActiveUsers
      activeUserToggle={"user"}
      activeUsers={mockActiveUser}
      onClickActiveUserToggle={onClickActiveUserToggle}
    />
  );
  expect(screen.getByTestId("active-user-container")).toHaveStyle(
    `height:25rem`
  );
  expect(screen.getByTestId("active-user-container")).toHaveStyle(
    `width:96.5%`
  );
});

it("should change active toggle button when  clicked", async () => {
  const onClickActiveUserToggle = jest.fn();
  render(
    <ActiveUsers
      activeUserToggle={"user"}
      activeUsers={mockActiveUser}
      onClickActiveUserToggle={onClickActiveUserToggle}
    />
  );
  const userToggleButton = screen.getByTestId("user-toggle-button");
  const adminToggleButton = screen.getByTestId("admin-toggle-button");

  expect(userToggleButton).toHaveStyle(`background-color: #2C2C2C`);
  expect(adminToggleButton).toHaveStyle(`background-color: white`);
  5;
  fireEvent.click(adminToggleButton);

  expect(onClickActiveUserToggle).toHaveBeenCalled();
});

it("should reender table correctly", async () => {
  const onClickActiveUserToggle = jest.fn();
  render(
    <ActiveUsers
      activeUserToggle={"user"}
      activeUsers={mockActiveUser}
      onClickActiveUserToggle={onClickActiveUserToggle}
    />
  );
  const tableRow = screen.getByRole("table").querySelectorAll("td");
  const tableHead = screen.getByRole("table").querySelectorAll("th");

  expect(tableHead[0].innerHTML).toEqual("S/N");
  expect(tableRow[0].innerHTML).toEqual("test1");
  expect(tableRow).toHaveLength(8);
  expect(tableHead).toHaveLength(7);
});

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ActiveUsers
        activeUserToggle={"user"}
        activeUsers={mockActiveUser}
        onClickActiveUserToggle={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import Button from "components/Button";
import { ActiveUserProps } from "constants/interfaces";
import { Card } from "pages/overview/overview.styles";
import ActiveUsersTable from "./ActiveUserTable";

const ActiveUsers = ({
  onClickActiveUserToggle,
  activeUserToggle,
  activeUsers,
}: ActiveUserProps) => {
  return (
    <Card
      height={"25rem"}
      width={"96.5%"}
      className="activechart"
      data-testid="active-user-container"
    >
      <div className="details">
        <p>Active Users and Active Admins</p>
        <div className="columnChartToggleDiv">
          <div className="columnChartToggle">
            <Button
              testId="user-toggle-button"
              active={activeUserToggle === "user" ? true : false}
              text="Users"
              onClick={() => onClickActiveUserToggle("user")}
            />
            <Button
              testId="admin-toggle-button"
              active={activeUserToggle === "admin" ? true : false}
              onClick={() => onClickActiveUserToggle("admin")}
              text="Admin"
            />
          </div>
        </div>
      </div>
      <ActiveUsersTable users={activeUsers} />
    </Card>
  );
};

export default ActiveUsers;

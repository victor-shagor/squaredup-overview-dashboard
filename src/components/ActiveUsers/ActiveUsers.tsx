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
            <button
              data-testid="user-toggle-button"
              className={
                activeUserToggle === "user"
                  ? "activeToggleButton"
                  : "toggleButton"
              }
              onClick={() => onClickActiveUserToggle("user")}
            >
              Users
            </button>
            <button
              data-testid="admin-toggle-button"
              className={
                activeUserToggle === "admin"
                  ? "activeToggleButton"
                  : "toggleButton"
              }
              onClick={() => onClickActiveUserToggle("admin")}
            >
              Admin
            </button>
          </div>
        </div>
      </div>
      <ActiveUsersTable users={activeUsers} />
    </Card>
  );
};

export default ActiveUsers;

import { GuestAndVerifiedUsersProps } from "constants/interfaces";
import { Card } from "pages/overview/overview.styles";
import Columnchart from "./ColumnChart";

const GuestAndVerifiedUsers = ({
  columnChartToggle,
  onClickToggle,
  guestAndVerifiedUsers,
}: GuestAndVerifiedUsersProps) => {
  return (
    <Card
      height={"25rem"}
      width={"96.5%"}
      className="activechart"
      data-testid="user-metric-container"
    >
      <div className="details">
        <p>Guest and Verified Users</p>
        <div className="columnChartToggleDiv">
          <div className="columnChartToggle">
            <button
              className={
                columnChartToggle === "yearly"
                  ? "activeToggleButton"
                  : "toggleButton"
              }
              onClick={() => onClickToggle("yearly")}
              data-testid="yearly-toggle-button"
            >
              Yearly
            </button>
            <button
              className={
                columnChartToggle === "monthly"
                  ? "activeToggleButton"
                  : "toggleButton"
              }
              onClick={() => onClickToggle("monthly")}
              data-testid="monthly-toggle-button"
            >
              Monthly
            </button>
            <button
              className={
                columnChartToggle === "daily"
                  ? "activeToggleButton"
                  : "toggleButton"
              }
              onClick={() => onClickToggle("daily")}
              data-testid="daily-toggle-button"
            >
              Daily
            </button>
          </div>
        </div>
      </div>
      <div className="chart">
        <Columnchart
          series={[
            guestAndVerifiedUsers.guestUser,
            guestAndVerifiedUsers.verifiedUser,
          ]}
          categories={guestAndVerifiedUsers.category}
        />
      </div>
    </Card>
  );
};

export default GuestAndVerifiedUsers;

import Button from "components/Button";
import { GuestAndVerifiedUsersProps } from "constants/interfaces";
import { Card } from "pages/overview/overview.styles";
import Barchart from "./UserMetricChart";

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
            <Button
              testId="yearly-toggle-button"
              active={columnChartToggle === "yearly" ? true : false}
              onClick={() => onClickToggle("yearly")}
              text="Yearly"
            />
            <Button
              testId="monthly-toggle-button"
              active={columnChartToggle === "monthly" ? true : false}
              onClick={() => onClickToggle("monthly")}
              text="Monthly"
            />
            <Button
              testId="daily-toggle-button"
              active={columnChartToggle === "daily" ? true : false}
              onClick={() => onClickToggle("daily")}
              text="Daily"
            />
          </div>
        </div>
      </div>
      <div className="chart">
        <Barchart
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

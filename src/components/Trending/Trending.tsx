import { TrendingCardProps } from "constants/interfaces";
import { Card } from "pages/overview/overview.styles";
import TrendingCard from "./TrendingCard";

const Trending = ({ array, loading }: TrendingCardProps) => {
  return (
    <Card
      height={"25rem"}
      width={"46.4%"}
      className="trends"
      data-testid="trending-container"
    >
      <div className="details">
        <p>Trending roles</p>
      </div>
      <div>
        <div className="trending">
          <TrendingCard
            array={array.slice(0, array.length / 2)}
            loading={loading}
          />
          <TrendingCard
            loading={loading}
            array={array.slice(array.length / 2, array.length)}
            className={array.length > 5 ? "sidecard" : "sidecard hide"}
          />
        </div>
        <div className="more"></div>
      </div>
    </Card>
  );
};

export default Trending;

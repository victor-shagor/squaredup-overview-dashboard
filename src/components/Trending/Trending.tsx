import { TrendingCardProps } from "constants/interfaces";
import { Card } from "pages/overview/overview.styles";
import TrendingCard from "./TrendingCard";

const Trending = ({ array, loading }: TrendingCardProps) => {
  //divide array into two, to display trending car side by side
  const data1 = array.slice(0, array.length / 2);
  const data2 = array.slice(array.length / 2, array.length);
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
          <TrendingCard array={data1} loading={loading} />
          {data2.length && (
            <TrendingCard
              loading={loading}
              array={data2}
              className={array.length > 5 ? "sidecard" : "sidecard hide"}
            />
          )}
        </div>
        <div className="more"></div>
      </div>
    </Card>
  );
};

export default Trending;

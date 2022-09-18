import { Styling } from "./overview.styles";
import Loader from "components/Loading";

function OverviewLoadingState() {
  return (
    <Styling>
      <div className="metrics">
        <Loader width={450} height={400} />
        <Loader width={450} height={400} />
        <Loader width={450} height={400} />
        <Loader width={450} height={400} />
      </div>
      <div className="metrics">
        <Loader width={900} height={600} />
        <Loader width={900} height={600} />
        <Loader width={900} height={600} />
      </div>
    </Styling>
  );
}

export default OverviewLoadingState;

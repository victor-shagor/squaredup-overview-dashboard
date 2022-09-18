import { ResumeDetailsProps } from "constants/interfaces";
import { Card } from "pages/overview/overview.styles";
import PieChart from "./PieChart";

const ResumeDetails = ({ sharedAndUnsharedResumes }: ResumeDetailsProps) => {
  return (
    <Card
      height={"25rem"}
      width={"46.4%"}
      mobile={false}
      data-testid="resume-details-container"
    >
      <div className="details">
        <p>Resume Details</p>
      </div>
      <div className="piechart">
        <PieChart
          label={["Shared Resume", "Unshared Resume"]}
          colors={["#5a5bb5", "#5dace6"]}
          series={[
            sharedAndUnsharedResumes.sharedResumes,
            sharedAndUnsharedResumes.unSharedResume,
          ]}
        />
      </div>
    </Card>
  );
};

export default ResumeDetails;

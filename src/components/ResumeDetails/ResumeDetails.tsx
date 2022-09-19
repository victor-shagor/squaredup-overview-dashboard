import { ResumeDetailsProps } from "constants/interfaces";
import { Card } from "pages/overview/overview.styles";
import ResumeDetailsPieChart from "./ResumeDetailsPieChart";

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
        <ResumeDetailsPieChart
          label={["Shared Resume", "Unshared Resume"]}
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

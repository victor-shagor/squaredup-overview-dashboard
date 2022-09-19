import { useEffect, useState } from "react";

import { Styling } from "./overview.styles";
import {
  getActiveUsers,
  getGuestsAndVerifiedUsers,
  getSharedAndUnsharedResumes,
  trendingRoles,
} from "api/overview";
import OverviewLoadingState from "./LoadingState";
import Trending from "components/Trending/Trending";
import ResumeDetails from "components/ResumeDetails/ResumeDetails";
import GuestAndVerifiedUsers from "components/GuestsAndVerifiedUsers/GuestAndVerifiedUser";
import ActiveUsers from "components/ActiveUsers/ActiveUsers";

function Overview() {
  const [loading, setLoading] = useState(true);
  const [columnChartToggle, setColumnChartToggle] = useState("yearly");
  const [activeUserToggle, setActiveUserToggle] = useState("user");
  const [guestAndVerifiedUsers, setGuestAndVerifiedUsers] = useState({
    guestUser: {
      name: "",
      data: [],
    },
    verifiedUser: {
      name: "",
      data: [],
    },
    category: [],
  });

  const [sharedAndUnsharedResumes, setSharedAndUnsharedResumes] = useState({
    sharedResumes: 0,
    unSharedResume: 0,
  });
  const [trending, setTrending] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);

  const updateLoading = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    (async () => {
      const [resumes, roles] = await Promise.all([
        getSharedAndUnsharedResumes(),
        trendingRoles(),
      ]);
      setSharedAndUnsharedResumes({
        sharedResumes: resumes.shared,
        unSharedResume: resumes.notShared,
      });
      setTrending(roles);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const userMetrics = await getGuestsAndVerifiedUsers(columnChartToggle);
      setGuestAndVerifiedUsers(userMetrics);
    })();
  }, [columnChartToggle]);

  useEffect(() => {
    (async () => {
      const activeUser = await getActiveUsers(activeUserToggle);
      setActiveUsers(activeUser);
      updateLoading();
    })();
  }, [activeUserToggle]);

  return (
    <>
      {loading ? (
        <OverviewLoadingState />
      ) : (
        <Styling>
          <div className="trending">
            <Trending array={trending} />
            <ResumeDetails
              sharedAndUnsharedResumes={sharedAndUnsharedResumes}
            />
          </div>
          <GuestAndVerifiedUsers
            columnChartToggle={columnChartToggle}
            onClickToggle={(toggle) => setColumnChartToggle(toggle)}
            guestAndVerifiedUsers={guestAndVerifiedUsers}
          />
          <div className="activeUsers">
            <ActiveUsers
              onClickActiveUserToggle={(toggle: string) =>
                setActiveUserToggle(toggle)
              }
              activeUserToggle={activeUserToggle}
              activeUsers={activeUsers}
            />
          </div>
        </Styling>
      )}
    </>
  );
}

export default Overview;

import { useEffect, useState } from "react";
import { makeRequest } from "../util/backend";
import { IEndpointTypes } from "../util/types";
import { useAuthContext } from "../util/auth";
import { useNavigate } from "react-router-dom";
import "../styles/student-dashboard.css";
import UserCard from "../components/Dashboard/UserCard";

type StudentDashData = IEndpointTypes["student/dashboard"]["response"];

function StudentDashboard() {
  const [data, setData] = useState<StudentDashData | null>(null);
  const [status, setStatus] = useState<"loading" | "fetched" | "failed">(
    "loading",
  );
  const auth = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      if (
        !auth.isAuthenticated ||
        auth.userData.type !== "student" ||
        !auth.isRegistered
      ) {
        navigate("/");
        return;
      }
      try {
        const response = await makeRequest(
          "student/dashboard",
          "get",
          null,
          auth.jwt,
        );
        if (response.is_ok) {
          setData(response.response);
          setStatus("fetched");
        } else {
          console.error(
            "Error fetching student dashboard data:",
            response.response,
          );
          setStatus("failed");
        }
      } catch (error) {
        console.error("Error fetching student dashboard data:", error);
        setStatus("failed");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="student-dash">
      {data ? (
        <>
          <UserCard username={data.username} name={data.name} auth={auth} />
          <div className="stats">
            <div className="stat-card">
              <h3>Total PRs</h3>
              <p>{data.pull_count}</p>
            </div>
            <div className="stat-card">
              <h3>Total Commits</h3>
              <p>{data.commit_count}</p>
            </div>
            <div className="stat-card">
              <h3>Lines Changed</h3>  {/* TODO: line visual */}
              <p>
                +{data.lines_added} / -{data.lines_removed}
              </p>
            </div>
            <div className="stat-card">
              <h3>Languages Used</h3>
              <p>
                {data.languages_used.length === 0
                  ? "None"
                  : data.languages_used.join(", ")}
              </p>
            </div>
          </div>
        </>
      ) : status == "loading" ? (
        <p>Loading your dashboard...</p>
      ) : (
        <div className="error-message">
          <h2>Something went wrong.</h2>
          <p>Please try again later.</p>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;

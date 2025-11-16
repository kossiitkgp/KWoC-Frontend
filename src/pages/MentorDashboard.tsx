import { useEffect, useState } from "react";
import { makeRequest } from "../util/backend";
import { IEndpointTypes } from "../util/types";
import { useAuthContext } from "../util/auth";
import { Link, useNavigate } from "react-router-dom";
import "../styles/mentor-dashboard.css";
import UserCard from "../components/Dashboard/UserCard";
import { FaPlus } from "react-icons/fa";
import { REG_OPEN } from "../util/constants";
import MentorProjectCard from "../components/Dashboard/MentorProjectCard";

type MentorDashData = IEndpointTypes["mentor/dashboard"]["response"];

function MentorDashboard() {
  const [data, setData] = useState<MentorDashData | null>(null);
  const [status, setStatus] = useState<"loading" | "fetched" | "failed">(
    "loading",
  );
  const auth = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      if (
        !auth.isAuthenticated ||
        auth.userData.type !== "mentor" ||
        !auth.isRegistered
      ) {
        navigate("/");
        return;
      }
      try {
        const response = await makeRequest(
          "mentor/dashboard",
          "get",
          null,
          auth.jwt,
        );
        if (response.is_ok) {
          setData(response.response);
          setStatus("fetched");
        } else {
          console.error(
            "Error fetching mentor dashboard data:",
            response.response,
          );
          setStatus("failed");
        }
      } catch (error) {
        console.error("Error fetching mentor dashboard data:", error);
        setStatus("failed");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="mentor-dash">
      {data ? (
        <>
          <UserCard username={data.username} name={data.name} auth={auth} />

          <h2>Your Projects</h2>
          {
            <div className="projects-list">
              {data.projects.map((project) => (
                <MentorProjectCard key={project.id} {...project} />
              ))}
              {REG_OPEN && <Link to="/project/form" className="mentor-project-card add-project-card">
                <FaPlus className="icon" size="30px" />
                <h3>Add a Project</h3>
              </Link>}
            </div>
          }
          {!REG_OPEN && data.projects.length == 0 && (
            <p>Stay tuned!</p>
          )}
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

export default MentorDashboard;

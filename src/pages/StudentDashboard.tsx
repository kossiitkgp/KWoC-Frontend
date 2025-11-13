import { useEffect, useState } from "react";
import { makeRequest } from "../util/backend";
import { IEndpointTypes } from "../util/types";
import { useAuthContext } from "../util/auth";
import { useNavigate } from "react-router-dom";
import "../styles/student-dashboard.css";
import Button from "../components/Button";

type StudentDashData = IEndpointTypes["student/dashboard"]["response"];

function StudentDashboard() {
  const [data, setData] = useState<StudentDashData | null>(null);
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
        } else {
          console.error(
            "Error fetching student dashboard data:",
            response.response,
          );
        }
      } catch (error) {
        console.error("Error fetching student dashboard data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="student-dash">
      {data ? (
        <div className="user-info">
          <img src={`https://github.com/${data.username}.png`} alt="Profile Picture" />
          <div className="details">
            <h2>{data.name}</h2>
            <p>@{data.username}</p>
          </div>
          <div className="actions">
            <Button to={auth.formLink} className="blue">Edit Profile</Button>
            <Button className="red">Sign Out</Button>
          </div>
        </div>
      ) : (
        <p>Loading your dashboard...</p>
      )}
    </div>
  );
}

export default StudentDashboard;

import { Link } from "react-router-dom";
import { useAuthContext } from "../util/auth";
import "../styles/Profile.css";
import "../styles/Resources.css";

export function Profile() {
  const authContext = useAuthContext();
  return (
    <div className="profileContainer">
      <img
        className="profilePicture"
        src={`https://github.com/${authContext.userData.username}.png`}
      />
      <h2 className="profileName">
        {authContext.userData.name}
        <br />
        <span className="profileUsername">
          (@{authContext.userData.username})
        </span>
      </h2>
      <div className="buttonContainer">
        <Link className="editButton" to={authContext.formLink}>
          Edit
        </Link>
        <button className="signOutButton" onClick={authContext.onLogout}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

interface ResourceItem {
  url: string;
  avatar: string;
  message: string;
  noAvatarRounding?: boolean;
}

// Define the props for the Resources component
interface ResourcesProps {
  title: string;
  resources: ResourceItem[];
}

export function Resources({ title, resources }: ResourcesProps) {
  return (
    <div>
      <h3 className="resourcesContainer">{title}</h3>
      <div className="resourceList">
        {resources.map((resource, i) => (
          <a
            key={i}
            target="_blank"
            className="resourceLink"
            href={resource.url}
            rel="noopener noreferrer" // Added for security when linking to external URLs
          >
            <li className="resourceItem">
              <div
                className={`avatarWrapper ${
                  resource.noAvatarRounding ? "noAvatarRounding" : ""
                }`}
              >
                <img
                  src={resource.avatar}
                  className="avatarImage"
                  alt="Avatar"
                />
              </div>
              <div className="messageText">{resource.message}</div>
            </li>
          </a>
        ))}
      </div>
    </div>
  );
}

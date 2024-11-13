import { Link } from "react-router-dom";
import { useAuthContext } from "../util/auth";
import "../styles/Profile.css"; // Import as a regular CSS file
import "../styles/Resources.css"; // Import as a regular CSS file

export function Profile() {
    const authContext = useAuthContext();
    return (
      <div className="profileContainer">
        <div className="profilePictureWrapper">
          <img
            className="profilePicture"
            src={`https://github.com/${authContext.userData.username}.png`}
          />
        </div>
        <h2 className="profileName">
          {authContext.userData.name}
          <br />
          <span className="profileUsername">
            (@{authContext.userData.username})
          </span>
        </h2>
        <div className="buttonContainer">
          <Link className="editButton" to={authContext.formLink}>
            Edit Info
          </Link>
          <button className="signOutButton" onClick={authContext.onLogout}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }
  
export function Resources({ title, resources }) {
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
            >
              <li className="resourceItem">
                <div
                  className={`avatarWrapper ${
                    resource.noAvatarRounding ? "noAvatarRounding" : ""
                  }`}
                >
                  <img src={resource.avatar} className="avatarImage" />
                </div>
                <div className="messageText">{resource.message}</div>
              </li>
            </a>
          ))}
        </div>
      </div>
    );
  }

import { useAuthContext } from "../../util/auth";
import Button from "../Button";
import "../../styles/Dashboard/user-card.css";

function UserCard({
  username,
  name,
  auth,
}: {
  username: string;
  name: string;
  auth: ReturnType<typeof useAuthContext>;
}) {
  const data = { username, name };

  const handleSignOut = () => {
    auth.onLogout();
  };

  return (
    <div className="user-info">
      <img
        src={`https://github.com/${data.username}.png`}
        className="profile-pic"
      />
      <div className="details">
        <h2>{data.name}</h2>
        <p>@{data.username}</p>
      </div>
      <div className="actions">
        <Button to={auth.formLink} className="blue">
          Edit Profile
        </Button>
        <Button onClick={handleSignOut} className="red">Sign Out</Button>
      </div>
    </div>
  );
}

export default UserCard;

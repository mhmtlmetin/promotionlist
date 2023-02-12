import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <div className="profile">
      <div className="logo">
        <img src="logo\logo.png"  alt=""/>
      </div>
      <div className="profile-info">
        <FontAwesomeIcon icon={faUser} className="profile-icon" />
        <img src="online\Oval.png"  className="online"/>
      </div>
    </div>
  );
}
export default Profile;

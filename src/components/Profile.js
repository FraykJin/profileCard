import React from "react";
import Photo from "../images/haaland.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Profile() {
  return (
    <div className="profile-rectangle">
      <img
        src={Photo}
        className="photo--profile"
        alt="Haaland Photo de profil"
      />
      <div className="profile-info">
        <h1 className="name">Erling Haaland</h1>
        <h5 className="job">Football Player</h5>
        <h6 className="website">www.frayk.com</h6>
      </div>
      <div className="buttons">
        <button className="button-email">
          <FontAwesomeIcon icon={faEnvelope} className="envIcon" />
          Email
        </button>
        <button className="button-linkedin">
          <FontAwesomeIcon icon={faLinkedin} className="linkIcon" />
          Linkedin
        </button>
      </div>
    </div>
  );
}

export default Profile;

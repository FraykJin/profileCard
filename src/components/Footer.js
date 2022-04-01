import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
      <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
      <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
      <FontAwesomeIcon icon={faGithubSquare} className="icon" />
    </footer>
  );
}

export default Footer;

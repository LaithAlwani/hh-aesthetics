import {FaInstagram} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="#" target="_blank" rel="noreferrer noopener">
          {<FaFacebookSquare />}
        </a>
        <a href="#" target="_blank" rel="noreferrer noopener">
          {<FaInstagram />}
        </a>
      </div>
      <span>Health Haven Asthetics &copy; 2022</span>
    </footer>
  );
}

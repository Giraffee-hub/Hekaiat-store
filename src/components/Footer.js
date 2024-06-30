import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer () {
    return (
        <div className="footer">
            <div className="footerlinks">
                <Link to="/" className="footerlink">Home</Link>
                <Link to="#/" className="footerlink">About Us</Link>
                <Link to="#/" className="footerlink">Connect Us</Link>
            </div>
            <p>Made With Love By <a href="https://www.giraffee.me/">Giraffee</a></p>
        </div>
    )
}
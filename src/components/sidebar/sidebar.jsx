import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
  src="https://media.istockphoto.com/id/1325466015/photo/indian-business-man-writing-on-notebook-working-project-planning-strategy-in-office-smiling.jpg?s=170667a&w=0&k=20&c=txuK3XNFOxtS6irX4X5xHvLjxctL5QQVJq1a3i74pNU="
  alt="Businessman working in the office"
  style={{
    width: "100%",
    maxHeight: "250px", // Limit the height to avoid stretching
    objectFit: "cover", // Maintain aspect ratio and cover the container
    borderRadius: "10px", // Add rounded corners
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
  }}
/>

        <p>
          But the desire of labor is great, and softens every pain
          I'm going to be out.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
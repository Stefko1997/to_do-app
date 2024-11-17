import { Link } from "react-router-dom";
import "./navigation.style.css";
import LogoImg from "../../image.png";

const Navigation = () => {
  return (
    <div className="todolist_navigation">
      <img src={LogoImg} />
      <div className="navigation_links">
        <Link to={{ pathname: "/" }}>Home</Link>
        <Link to={{ pathname: "/task" }}>Task</Link>
        <Link to={{ pathname: "/tasklist" }}>Task List</Link>
        <Link to={{ pathname: "/about" }}>About</Link>
      </div>
    </div>
  );
};
export default Navigation;

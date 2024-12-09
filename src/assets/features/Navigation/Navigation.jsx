import { Link } from "react-router-dom";
import "./navigation.style.css";
import LogoImg from "../../image.png";
import { useToDoStore } from "../../../store/todo/todo.store";

const Navigation = () => {
  const { todoList } = useToDoStore();

  return (
    <div className="todolist_navigation">
      <img src={LogoImg} />
      <div className="navigation_links">
        <Link to={{ pathname: "/" }}>Home</Link>
        <Link to={{ pathname: "/task" }}>Task</Link>
        <Link to={{ pathname: "/tasklist" }} className="tasklist_navigation">
          Task List<span>{todoList.length}</span>
        </Link>
        <Link to={{ pathname: "/about" }}>About</Link>
      </div>
    </div>
  );
};
export default Navigation;

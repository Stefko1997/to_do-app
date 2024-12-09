import "../list.style.css";
import DeleteImg from "../../../image.png";
import { useToDoStore } from "../../../../store/todo/todo.store";
const ToDoItem = ({ task }) => {
  const { deleteItem, marktodoAsComplited } = useToDoStore();

  const handleDelete = () => {
    deleteItem(task.id);
  };
  const handleComplited = () => {
    marktodoAsComplited(task.id);
  };

  return (
    <div className="item_holder">
      <div className="item_text">
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={34}
          height={34}
          stroke="#22C55E"
          fill={task.isComplited ? "#22C55E" : "#FFFFFF"}
          onClick={() => handleComplited()}
        >
          <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
        </svg>
        <p>{task.title}</p>
        <div className="task_img">
          <img src={DeleteImg} />
          <img onClick={() => handleDelete()} src={DeleteImg} />
        </div>
      </div>
    </div>
  );
};
export default ToDoItem;

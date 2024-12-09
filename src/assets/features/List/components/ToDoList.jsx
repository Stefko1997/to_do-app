import { useToDoStore } from "../../../../store/todo/todo.store";
import "../list.style.css";
import ToDoItem from "./ToDoItem";
const ToDoList = () => {
  const { todoList } = useToDoStore();
  return (
    <div>
      {todoList.map((task) => (
        <ToDoItem task={task} />
      ))}
    </div>
  );
};
export default ToDoList;

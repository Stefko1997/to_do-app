import { useToDoStore } from "../../../../store/todo/todo.store";
import "../list.style.css";
const ToDoHero = () => {
  const { todoList } = useToDoStore();
  const todoIsComplited = todoList.filter((item) => item.isComplited).length;
  const todoAmount = todoList.length;
  return (
    <div className="todo_hero_holder">
      <div>
        <h2>Gotovi taskovi!</h2>
        <h3>Nastavi tako!</h3>
      </div>
      <span>
        {todoIsComplited}/{todoAmount}
      </span>
    </div>
  );
};
export default ToDoHero;

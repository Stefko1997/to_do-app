import ToDoHero from "./components/ToDoHero";
import ToDoList from "./components/ToDoList";
import "./list.style.css";

const List = () => {
  return (
    <div className="list_holder">
      <ToDoHero />
      <ToDoList />
    </div>
  );
};
export default List;

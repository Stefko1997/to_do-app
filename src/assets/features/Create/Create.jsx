import { useToDoStore } from "../../../store/todo/todo.store";
import Button from "../../components/Button/Button";
import "./create.style.css";

const Create = () => {
  const { addTask } = useToDoStore();
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value;
    console.log(value);
    const newTodo = {
      id: Math.random().toString(36).substring(7),
      title: value,
      isComplited: false,
    };
    addTask(newTodo);
    event.target.reset();
  };

  return (
    <div className="create_holder">
      <h2>Koji je tvoj sledeći task?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input type="text" name="todo" placeholder="Upisi text" />
        </label>
        <Button label="Sacuvaj" />
      </form>
    </div>
  );
};
export default Create;

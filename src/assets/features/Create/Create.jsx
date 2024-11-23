import Button from "../../components/Button/Button";
import "./create.style.css";

const Create = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value;
    console.log(value);
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

import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./home.style.css";

const Home = () => {
  const router = useNavigate;
  const handleRedirect = () => {
    router("../../features/Create");
  };
  return (
    <div className="home_main">
      <h1>Šta planiraš da danas?</h1>
      <h2>Kreiraj novi task</h2>
      <Button label="Kreiraj" clickHandler={handleRedirect} />
    </div>
  );
};
export default Home;

import "../ui/styles/home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="App">
      <h1>Desafios do FrontEnd Mentor - NewBie</h1>
      <Link
        to={{
          pathname: "/NewBie1"
        }}
      >
        Projeto1
      </Link>
    </div>
  );
};
export default Home;

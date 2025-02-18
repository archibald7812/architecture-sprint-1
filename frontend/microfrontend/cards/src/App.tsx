import ReactDOM from "react-dom";

import "./index.css";
import Cards from "./components/Cards";

const App = () => (
  <div className="container">
    <Cards />
  </div>
);

const root = document.getElementById("cards") as HTMLElement;

ReactDOM.render(<App />, root);

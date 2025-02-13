import ReactDOM from "react-dom";
import "./index.css";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => (
  <div className="container">
    <Register />
    <Login />
  </div>
);

const root = document.getElementById("auth") as HTMLElement;

ReactDOM.render(<App />, root);

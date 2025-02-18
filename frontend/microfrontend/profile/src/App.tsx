import ReactDOM from "react-dom";

import "./index.css";
import Profile from "./components/Profile";

const App = () => (
  <div className="container">
    <Profile />
  </div>
);

const root = document.getElementById("profile") as HTMLElement;

ReactDOM.render(<App />, root);

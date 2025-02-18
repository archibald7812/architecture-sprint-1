import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component, ...props }) => {
  return (
    <Route exact>
      {() => (props.loggedIn ? component : <Redirect to="./signin" />)}
    </Route>
  );
};

export default ProtectedRoute;

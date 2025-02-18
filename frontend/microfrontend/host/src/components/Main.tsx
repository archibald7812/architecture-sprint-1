import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, useHistory } from "react-router-dom";
import "../index.css";
import ProtectedRoute from "./ProtectedRoute";
import { AppContext } from "shared-context_shared-library";
import { checkToken } from "../utils/auth";
import InfoTooltip from "./InfoTooltip";

const RemoteCards = React.lazy(() => import("cards/Cards"));
const RemoteProfile = React.lazy(() => import("profile/Profile"));
const RemoteRegister = React.lazy(() => import("auth/Register"));
const RemoteLogin = React.lazy(() => import("auth/Login"));

const Main = () => {
  const {
    setEmailHandler,
    setLoggedInHandler,
    loggedIn,
    tooltipStatus,
    isInfoToolTipOpen,
    setIsInfoToolTipOpenHandler,
  } = useContext(AppContext);

  const history = useHistory();

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((res) => {
          console.log(1);
          setEmailHandler(res.data.email);
          setLoggedInHandler(true);
          history.push("/");
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
          console.log(err);
        });
    }
  }, [history]);

  const component = (
    <main className="content">
      <React.Suspense fallback="Loading Profile...">
        <RemoteProfile />
      </React.Suspense>
      <React.Suspense fallback="Loading Cards...">
        <RemoteCards />
      </React.Suspense>
    </main>
  );

  return (
    <div className="page__content">
      <Header />
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          component={component}
          loggedIn={loggedIn}
        />
        <Route path="/signup">
          <React.Suspense fallback="Loading Register...">
            <RemoteRegister />
          </React.Suspense>
        </Route>
        <Route path="/signin">
          <React.Suspense fallback="Loading Login...">
            <RemoteLogin />
          </React.Suspense>
        </Route>
      </Switch>
      <Footer />
      <InfoTooltip
        isOpen={isInfoToolTipOpen}
        onClose={() => setIsInfoToolTipOpenHandler(false)}
        status={tooltipStatus}
      />
    </div>
  );
};

export default Main;

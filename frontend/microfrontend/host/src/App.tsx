import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import api from "./utils/api.ts";

import "./index.css";

const RemoteCards = React.lazy(() => import("cards/Cards"));

const App = () => {
  // В корневом компоненте App создана стейт-переменная currentUser. Она используется в качестве значения для провайдера контекста.
  const [currentUser, setCurrentUser] = React.useState({});

  // Запрос к API за информацией о пользователе и массиве карточек выполняется единожды, при монтировании.
  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([userData]) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__content">
          <Header />
          <Switch>
            <Route path="/signup">
              <div>123</div>
            </Route>
            <Route path="/signin">
              <div>1234</div>
            </Route>
          </Switch>
          <React.Suspense fallback="Loading Cards...">
            <RemoteCards
            // onEditProfile={handleEditProfileClick}
            // onAddPlace={handleAddPlaceClick}
            // onEditAvatar={handleEditAvatarClick}
            // onCardClick={handleCardClick}
            // onCardLike={handleCardLike}
            // onCardDelete={handleCardDelete}
            // loggedIn={isLoggedIn}
            />
          </React.Suspense>
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("host"));
root.render(<App />);

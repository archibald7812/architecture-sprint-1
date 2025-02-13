import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
// import { AppContext } from "host/AppContext";
// import RemoteCards from "cards/Cards";
// import RemoteProfile from "profile/Profile";

import "../index.css";

const RemoteCards = React.lazy(() => import("cards/Cards"));
const RemoteProfile = React.lazy(() => import("profile/Profile"));

const Main = () => {
  // В корневом компоненте App создана стейт-переменная currentUser. Она используется в качестве значения для провайдера контекста.

  //   const { user, setUserHandler } = useContext(AppContext);

  // Запрос к API за информацией о пользователе и массиве карточек выполняется единожды, при монтировании.

  return (
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
      <main className="content">
        <React.Suspense fallback="Loading Profile...">
          <RemoteProfile
          // onEditProfile={handleEditProfileClick}
          // onAddPlace={handleAddPlaceClick}
          // onEditAvatar={handleEditAvatarClick}
          // onCardClick={handleCardClick}
          // onCardLike={handleCardLike}
          // onCardDelete={handleCardDelete}
          // loggedIn={isLoggedIn}
          />
        </React.Suspense>
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
      </main>
      <Footer />
    </div>
  );
};

export default Main;

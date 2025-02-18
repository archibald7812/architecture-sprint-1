import React, { useContext } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import logoPath from "../images/logo.svg";
import { AppContext } from "shared-context_shared-library";

// В корневом компоненте App описаны обработчики: onRegister, onLogin и onSignOut. Эти обработчики переданы в соответствующие компоненты: Register.js, Login.js, Header.js
function Header() {
  const { email, setLoggedInHandler } = useContext(AppContext);

  const history = useHistory();

  function onSignOut() {
    // при вызове обработчика onSignOut происходит удаление jwt
    localStorage.removeItem("jwt");
    setLoggedInHandler(false);
    // После успешного вызова обработчика onSignOut происходит редирект на /signin
    history.push("/signin");
  }
  return (
    <header className="header page__section">
      <img
        src={logoPath}
        alt="Логотип проекта Mesto"
        className="logo header__logo"
      />
      <Route exact path="/">
        <div className="header__wrapper">
          <p className="header__user">{email}</p>
          <button className="header__logout" onClick={() => onSignOut()}>
            Выйти
          </button>
        </div>
      </Route>
      <Route path="/signup">
        <Link className="header__auth-link" to="signin">
          Войти
        </Link>
      </Route>
      <Route path="/signin">
        <Link className="header__auth-link" to="signup">
          Регистрация
        </Link>
      </Route>
    </header>
  );
}

export default Header;

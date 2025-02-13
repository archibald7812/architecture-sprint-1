import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../utils/auth";
import { AppContext } from "shared-context_shared-library";
import "../index.css";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {
    email: currentEmail,
    setEmailHandler,
    setLoggedInHandler,
    setTooltipStatusHandler,
    setIsInfoToolTipOpenHandler,
  } = useContext(AppContext);

  const history = useHistory();

  function onLogin({ email, password }) {
    login(email, password)
      .then((res) => {
        setLoggedInHandler(true);
        setEmailHandler(currentEmail);
        history.push("/");
      })
      .catch((err) => {
        setTooltipStatusHandler("fail");
        setIsInfoToolTipOpenHandler(true);
      });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    onLogin(userData);
  }

  return (
    <div className="auth-form">
      <form className="auth-form__form" onSubmit={handleSubmit}>
        <div className="auth-form__wrapper">
          <h3 className="auth-form__title">Вход</h3>
          <label className="auth-form__input">
            <input
              type="text"
              name="name"
              id="email"
              className="auth-form__textfield"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="auth-form__input">
            <input
              type="password"
              name="password"
              id="password"
              className="auth-form__textfield"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="auth-form__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;

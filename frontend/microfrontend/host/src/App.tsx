import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./components/Main.tsx";
import { AppContext, IUser, ICard } from "shared-context_shared-library";
import { useCallback, useMemo, useState } from "react";
import React from "react";

const App = () => {
  const [user, setUser] = useState<IUser>(null);
  const [cards, setCards] = useState<ICard>(null);
  const [email, setEmail] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [tooltipStatus, setTooltipStatus] = React.useState("");
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);

  const setUserHandler = useCallback((user: IUser) => {
    setUser(user);
  }, []);

  const setCardsHandler = useCallback((card: ICard) => {
    setCards(card);
  }, []);

  const setEmailHandler = useCallback((email: string) => {
    setEmail(email);
  }, []);

  const setLoggedInHandler = useCallback((isLogged: boolean) => {
    setLoggedIn(isLogged);
  }, []);

  const setTooltipStatusHandler = useCallback((status: string) => {
    setTooltipStatus(status);
  }, []);

  const setIsInfoToolTipOpenHandler = useCallback((isOpen: boolean) => {
    setIsInfoToolTipOpen(isOpen);
  }, []);

  const context = useMemo(() => {
    return {
      user,
      setUserHandler,
      cards,
      setCardsHandler,
      email,
      setEmailHandler,
      loggedIn,
      setLoggedInHandler,
      tooltipStatus,
      setTooltipStatusHandler,
      isInfoToolTipOpen,
      setIsInfoToolTipOpenHandler,
    };
  }, [
    user,
    setUserHandler,
    cards,
    setCardsHandler,
    email,
    setEmailHandler,
    loggedIn,
    setLoggedInHandler,
    tooltipStatus,
    setTooltipStatusHandler,
    isInfoToolTipOpen,
    setIsInfoToolTipOpenHandler,
  ]);

  return (
    <AppContext.Provider value={context}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

const root = document.getElementById("host") as HTMLElement;

ReactDOM.render(<App />, root);

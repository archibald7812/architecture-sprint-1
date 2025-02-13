import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./components/Main.tsx";
import { AppContext, IUser, ICard } from "shared-context_shared-library";
import { useCallback, useMemo, useState } from "react";

const App = () => {
  const [user, setUser] = useState<IUser>(null);
  const [cards, setCards] = useState<IUser>(null);

  const setUserHandler = useCallback((user: IUser) => {
    console.log("setUser", user);
    setUser(user);
  }, []);

  const setCardsHandler = useCallback((card: ICard) => {
    console.log("setCards", card);
    setCards(card);
  }, []);

  const context = useMemo(() => {
    return { user, setUserHandler, cards, setCardsHandler };
  }, [user, setUserHandler, cards, setCardsHandler]);

  console.log("MountContext", context);

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

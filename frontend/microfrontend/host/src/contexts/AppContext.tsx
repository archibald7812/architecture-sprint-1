import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type IUser = {
  about: string;
  avatar: string;
  cohort: string;
  name: string;
  _id: string;
} | null;

type AppContextType = {
  user: IUser;
  setUserHandler: (user: IUser) => void;
};

const initialState: AppContextType = {
  user: null,
  setUserHandler: () => null,
};

// Объект контекста CurrentUserContext экспортируется из отдельного файла директории contexts
export const AppContext = createContext<AppContextType>(initialState);

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState<IUser>(null);

  const setUserHandler = useCallback((user: IUser) => {
    console.log("setUser", user);
    setUser(user);
  }, []);

  const context = useMemo(() => {
    return { user: user, setUserHandler: setUserHandler };
  }, [user]);

  console.log("MountContext", context);

  return (
    <>
      <AppContext.Provider value={context}>{children}</AppContext.Provider>
    </>
  );
};

import React from "react";

export type TUser = {
  about: string;
  avatar: string;
  cohort: string;
  name: string;
  _id: string;
} | null;

export type TLike = {
  name: string;
  about: string;
  avatar: string;
  _id: string;
  cohort: string;
};

export type TCard = {
  likes: TLike[];
  _id: string;
  name: string;
  link: string;
  owner: {
    name: string;
    about: string;
    avatar: string;
    _id: string;
    cohort: string;
  };
  createdAt: string;
};

export type AppContextType = {
  user: TUser;
  setUserHandler: (user: TUser) => void;
  cards: TCard[];
  setCardsHandler: (card: TCard) => TCard[];
  loggedIn: boolean;
  setLoggedIn: (isLigged: boolean) => void;
  email: string;
  setEmail: (email: string) => void;
  tooltipStatus: string;
  setTooltipStatus: (status: string) => void;
  isInfoToolTipOpen: boolean;
  setIsInfoToolTipOpen: (isOpen: boolean) => void;
};

const initialState: AppContextType = {
  user: null,
  setUserHandler: () => null,
  cards: [],
  setCardsHandler: () => [],
  loggedIn: false,
  setLoggedIn: () => null,
  email: "",
  setEmail: () => null,
  tooltipStatus: "",
  setTooltipStatus: () => null,
  isInfoToolTipOpen: false,
  setIsInfoToolTipOpen: () => null,
};

export const AppContext = React.createContext<AppContextType>(initialState);

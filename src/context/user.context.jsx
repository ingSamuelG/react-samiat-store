import { useState } from "react";
import { createContext } from "react";

export const UserCtx = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserCtx.Provider value={value}>{children}</UserCtx.Provider>;
};

import React, { useEffect, useState } from "react";
import { auth } from "../data/firebase";
import { useParent } from '../data/hooks/useParent';

export const AuthContext = React.createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const parent = useParent();

  const [loadingAuthState, setLoadingAuthState] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged(() => {
      parent.getParent().then((parent) => {
        setUser(parent);
        setLoadingAuthState(false);
      });
    });
  }, []); // eslint-disable-line

  return (
    <AuthContext.Provider
      value={{
        parent: user,
        authenticated: user !== null,
        setUser,
        loadingAuthState,
        familyCode: user?.familyCode
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

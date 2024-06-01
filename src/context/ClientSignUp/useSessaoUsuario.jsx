import { createContext, useContext, useEffect, useState } from "react";
import { TokenStorage } from "../../common/tokenStorage";
import { http } from "../../common/http";

const UserSessionContext = createContext({
  isUserLogged: false,
  setIsUserLogged: () => null,
  login: () => null,
  logout: () => null,
  perfil: {},
});

export const useUserSessionContext = () => {
  return useContext(UserSessionContext);
};

export const UserSessionProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);

  const login = (email, senha) => {
    http
      .post("/auth/login", {
        email,
        senha,
      })
      .then((res) => {
        console.log("entrei com td");
        const outroLogin = TokenStorage.defineTokens(
          res.data.access_token,
          res.data.refresh_token
        );
        setIsUserLogged(true);
        return outroLogin;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    TokenStorage.logout();
    setIsUserLogged(false);
  };

  const value = {
    login,
    setIsUserLogged,
    isUserLogged,
    logout,
  };
  return (
    <UserSessionContext.Provider value={value}>
      {children}
    </UserSessionContext.Provider>
  );
};

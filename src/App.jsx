import { BrowserRouter } from "react-router-dom";
import { Styles } from "./common/components/GlobalStyles/Styles";
import { IsThemeProvider } from "./common/components/ThemeProvider/ThemeProvider";
import { Routers } from "./router";
import {
  UserSessionProvider,
  useUserSessionContext,
} from "./context/ClientSignUp/useSessaoUsuario";
import { LayoutBase } from "./common/layout/layoutBase";
function App() {
  const { isUserLogged } = useUserSessionContext();
  console.log(isUserLogged);
  return (
    <IsThemeProvider>
      <Styles />
      <UserSessionProvider>
        <BrowserRouter>
          <LayoutBase>
            <Routers />
          </LayoutBase>
        </BrowserRouter>
      </UserSessionProvider>
    </IsThemeProvider>
  );
}

export default App;

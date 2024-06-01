import { Link, Route, Routes } from "react-router-dom";
import { Completed } from "../pages/SignUp/Completed";
import { LayoutCard } from "../common/layout/layoutCard";
import { ClientModule } from "../modules/client";
import { Interests } from "../pages/SignUp/Interests";
import ClientSelection from "../pages/SignUp/ClientSelection";
import NotLoggedPage from "../pages/HomePage/NotLoggedPage";
import { SignIn } from "../pages/SignIn";
import { Profile } from "../pages/Profile";
import { LoggedPage } from "../pages/HomePage/LoggedPage";
import { useUserSessionContext } from "../context/ClientSignUp/useSessaoUsuario";

export const Signed = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <h1>N foi</h1>
            <Link to="/">Volte</Link>
          </>
        }
      />
      <Route path="/" element={<LoggedPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
export const NotSigned = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <h1>N foi</h1>
            <Link to="/">Volte</Link>
          </>
        }
      />
      <Route path="/" element={<NotLoggedPage />} />
      <Route path="/" element={<LayoutCard />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="/signup" element={<ClientSelection />} />
        <Route path="/signup/interests" element={<Interests />} />
        <Route path="/signup/form" element={<ClientModule />} />
        <Route path="/signup/complete" element={<Completed />} />
      </Route>
    </Routes>
  );
};

export const Routers = () => {
  const { isUserLogged } = useUserSessionContext();
  return isUserLogged === true ? <Signed /> : <NotSigned />;
};

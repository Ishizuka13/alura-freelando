import { IsThemeProvider } from "../../common/components/ThemeProvider/ThemeProvider";
import { Styles } from "../../common/components/GlobalStyles/Styles";
import { RouterProvider } from "react-router-dom";
import { router } from "../../router";

const HomePage = () => {
  return (
    <IsThemeProvider>
      <Styles />
      <RouterProvider router={router} />
    </IsThemeProvider>
  );
};

export default HomePage;

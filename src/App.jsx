import { RouterProvider } from "react-router-dom";
import { Styles } from "./common/components/GlobalStyles/Styles";
import { IsThemeProvider } from "./common/components/ThemeProvider/ThemeProvider";
import { router } from "./router";
function App() {
  return (
    <IsThemeProvider>
      <Styles />
      <RouterProvider router={router} />
    </IsThemeProvider>
  );
}

export default App;

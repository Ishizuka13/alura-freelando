import { Card } from "./components/GlobalStyles/Card/Card";
import { IsThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { Styles } from "./components/GlobalStyles/Styles";

function App() {
  return (
    <IsThemeProvider>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </IsThemeProvider>
  );
}

export default App;

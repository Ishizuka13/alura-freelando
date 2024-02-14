import { Card } from "./common/components/GlobalStyles/Card/Card";
import { Header } from "./common/components/GlobalStyles/Header/Header";
import { IsThemeProvider } from "./common/components/ThemeProvider/ThemeProvider";
import { Styles } from "./common/components/GlobalStyles/Styles";
import { Typography } from "./common/components/Typography/Typography";
import { TextField } from "./common/components/TextField";
import { Footer } from "./common/components/GlobalStyles/Footer/Footer";

function App() {
  return (
    <IsThemeProvider>
      <Styles />
      <Header>
        <Typography variant="h1" component="h2">
          Header
        </Typography>
      </Header>
      <Card>
        <Typography variant="h3" component="h1">
          Freelando
        </Typography>
        <TextField label="Nome" />
      </Card>
      <Footer>
        <Typography variant="h1" component="h2">
          Footer
        </Typography>
      </Footer>
    </IsThemeProvider>
  );
}

export default App;

import { Card } from "./common/components/GlobalStyles/Card/Card";
import { Header } from "./common/components/GlobalStyles/Header/Header";
import { IsThemeProvider } from "./common/components/ThemeProvider/ThemeProvider";
import { Styles } from "./common/components/GlobalStyles/Styles";
import { Typography } from "./common/components/Typography/Typography";
import { TextField } from "./common/components/TextField";
import { Footer } from "./common/components/GlobalStyles/Footer/Footer";
import { Col, Container, Row } from "react-grid-system";
import { Button } from "./common/components/GlobalStyles/Button";

function App() {
  return (
    <IsThemeProvider>
      <Styles />
      <Header>
        <Typography variant="h1" component="h2">
          Header
        </Typography>
      </Header>
      <Container style={{ margin: "80px 0" }}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Typography variant="h3" component="h1">
                Freelando
              </Typography>
              <Typography variant="body" component="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Typography>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <TextField label="Nome" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <TextField label="Estado" />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <TextField label="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <TextField label="Email" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <TextField label="Senha" />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <TextField label="Repita a senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Button variant="Primary">Anterior</Button>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "right" }}>
                    <Button>Próxima</Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer>
        <Typography variant="h1" component="h2">
          Footer
        </Typography>
      </Footer>
    </IsThemeProvider>
  );
}

export default App;

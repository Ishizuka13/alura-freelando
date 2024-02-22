import { Card } from "./common/components/GlobalStyles/Card/Card";
import { Header } from "./common/components/GlobalStyles/Header/Header";
import { IsThemeProvider } from "./common/components/ThemeProvider/ThemeProvider";
import { Styles } from "./common/components/GlobalStyles/Styles";
import { Typography } from "./common/components/Typography/Typography";
import { TextField } from "./common/components/TextField";
import { Footer } from "./common/components/GlobalStyles/Footer/Footer";
import { Col, Container, Row } from "react-grid-system";
import { Button } from "./common/components/GlobalStyles/Button";
import { Select } from "./common/components/Select";
import Logo from "./common/assets/Logobranco.svg";
import Whats from "./common/assets/Ícones/Ícones redes sociais/Whatsapp.svg";
import Twitch from "./common/assets/Ícones/Ícones redes sociais/Twitch.svg";
import Twitter from "./common/assets/Ícones/Ícones redes sociais/Twiter.svg";
import Instagram from "./common/assets/Ícones/Ícones redes sociais/Instagram.svg";

const brazilianStates = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];

function App() {
  return (
    <IsThemeProvider>
      <Styles />
      <Header>
        <Container>
          <Row>
            <Col>
              <img src={Logo} alt="" />
            </Col>
            <Col style={{ textAlign: "end" }}>
              <Typography variant="body" component="body">
                Login
              </Typography>
            </Col>
          </Row>
        </Container>
      </Header>
      <Row justify="center">
        <Col lg={6} md={8} sm={12} style={{ margin: "80px 0" }}>
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
                <Select title="Estado" options={brazilianStates} />
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
      <Footer>
        <Container>
          <Row>
            <Col>
              <img src={Logo} alt="" />
              <Typography variant="body" component="body">
                Desenvolvido por Mim. Projeto fictício sem fins comerciais.
              </Typography>
            </Col>
            <div>
              <Col style={{ textAlign: "end" }}>
                <Typography variant="body" component="body">
                  Acesse nossas redes:
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <img src={Whats} alt="" />
                  <img src={Twitch} alt="" />
                  <img src={Instagram} alt="" />
                  <img src={Twitter} alt="" />
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </Footer>
    </IsThemeProvider>
  );
}

export default App;

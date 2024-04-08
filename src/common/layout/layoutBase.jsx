import { Footer } from "../components/GlobalStyles/Footer/Footer";
import { Header } from "../components/GlobalStyles/Header/Header";
import { Col, Container, Row } from "react-grid-system";
import { Typography } from "../components/Typography/Typography";
import Logo from "../assets/Logobranco.svg";
import Whats from "../assets/Ícones/Ícones redes sociais/Whatsapp.svg";
import Twitch from "../assets/Ícones/Ícones redes sociais/Twitch.svg";
import Twitter from "../assets/Ícones/Ícones redes sociais/Twiter.svg";
import Instagram from "../assets/Ícones/Ícones redes sociais/Instagram.svg";

import { Outlet } from "react-router-dom";

export const LayoutBase = () => {
  return (
    <>
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
      <Container>
        <Outlet />
      </Container>

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
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
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
    </>
  );
};

import { Footer } from "../components/GlobalStyles/Footer/Footer";
import { Header } from "../components/GlobalStyles/Header/Header";
import { Col, Container, Row } from "react-grid-system";
import { Typography } from "../components/Typography/Typography";
import { useUserSessionContext } from "../../context/ClientSignUp/useSessaoUsuario";

import Logo from "../assets/Logobranco.svg";
import Whats from "../assets/Ícones/Ícones redes sociais/Whatsapp.svg";
import Twitch from "../assets/Ícones/Ícones redes sociais/Twitch.svg";
import Twitter from "../assets/Ícones/Ícones redes sociais/Twiter.svg";
import Instagram from "../assets/Ícones/Ícones redes sociais/Instagram.svg";

import { Link } from "react-router-dom";

export const LayoutBase = ({ children }) => {
  const { isUserLogged, logout } = useUserSessionContext();

  return (
    <>
      <Header>
        <Container>
          <Row>
            <Col>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </Col>
            <Col style={{ textAlign: "end" }}>
              {isUserLogged === false ? (
                <Link to="/signin">
                  <Typography variant="body" component="body">
                    Login
                  </Typography>
                </Link>
              ) : (
                <>
                  <Link to="/profile">
                    <Typography variant="body" component="body">
                      Profile
                    </Typography>
                  </Link>
                  <a href="" onClick={logout}>
                    <Typography variant="body" component="body">
                      Logout
                    </Typography>
                  </a>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </Header>
      <Container>{children}</Container>

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

import { Col, Row } from "react-grid-system";
import { Banner } from "../../common/components/Banner";
import { Typography } from "../../common/components/Typography/Typography";
import { Button } from "../../common/components/GlobalStyles/Button";
import BannerLogo from "../../common/assets/Imagens/Hero.png";
import PQIcon from "../../common/assets/Ícones/Ícones cards homepage/Ícone - Profissionais qualificados 1.svg";
import MEIcon from "../../common/assets/Ícones/Ícones cards homepage/Ícones - Múltiplas especialidades 1.svg";
import AeAIcon from "../../common/assets/Ícones/Ícones cards homepage/Ícones - Atendimento e agilidade 1.svg";
import SeSIcon from "../../common/assets/Ícones/Ícones cards homepage/Ícones - Simplicidade e Segurança 1.svg";
import PIICon from "../../common/assets/Ícones/Ícones cards homepage/Ícones - Projetos interessantes 1.svg";
import CVICon from "../../common/assets/Ícones/Ícones cards homepage/Ícone - clientes verificados 1.svg";
import AeAIcon1 from "../../common/assets/Ícones/Ícones cards homepage/Ícone - Atendimento e agilidade 1.svg";
import RRSIcon from "../../common/assets/Ícones/Ícones cards homepage/Ícones - Remuneração rápida e supervisionada 1.svg";
import { Card } from "../../common/components/GlobalStyles/Card/Card";
import { Chip } from "../../common/components/Chip";

const HomePage = () => {
  return (
    <>
      <Banner>
        <Row justify="between">
          <Col sm={5}>
            <Row justify="start">
              <Typography variant="h1" component="h1">
                Uma ponte entre os freelas mais talentosos e os projetos mais
                interessantes!
              </Typography>

              <Row style={{ width: "100%" }}>
                <Col sm={5}>
                  <Button>Sou cliente!</Button>
                </Col>
                <Col sm={6}>
                  <Button variant="Primary">Sou freela</Button>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col sm={7}>
            <img src={BannerLogo} alt="" />
          </Col>
        </Row>
      </Banner>

      <Row>
        <Col>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <Typography variant="h2" component="h2">
                Vantagens para contratantes
              </Typography>
            </Col>
          </Row>
          <Row justify="center" style={{ textAlign: "center" }}>
            <Col>
              <Card background="purple" border="noBorder" paddingB="2px">
                <img src={PQIcon} alt="" />
                <Typography variant="h3" component="h1">
                  Profissionais qualificados
                </Typography>
              </Card>
            </Col>
            <Col>
              <Card background="purple" border="noBorder" paddingB="2px">
                <img src={MEIcon} alt="" />
                <Typography variant="h3" component="h1">
                  Múltiplas especialidades
                </Typography>
              </Card>
            </Col>
            <Col>
              <Card background="purple" border="noBorder" paddingB="2px">
                <img src={AeAIcon} alt="" />
                <Typography variant="h3" component="h1">
                  Atendimentos e agilidade
                </Typography>
              </Card>
            </Col>
            <Col>
              <Card background="purple" border="noBorder" paddingB="2px">
                <img src={SeSIcon} alt="" />
                <Typography variant="h3" component="h1">
                  Simplicidade e segurança
                </Typography>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <Typography variant="h1" component="h1">
                Vantagens para freelas
              </Typography>
            </Col>
          </Row>
          <Row style={{ gap: "24px" }}>
            <Col sm={4} md={6} lg={12}>
              <Row justify="center">
                <Col>
                  <Card background="green" border="noBorder">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        gap: "16px",
                      }}
                    >
                      <img src={CVICon} alt="" />
                      <Typography variant="h3" component="h3">
                        Clientes verificados
                      </Typography>
                    </div>
                  </Card>
                </Col>
                <Col>
                  <Card background="green" border="noBorder">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        gap: "16px",
                      }}
                    >
                      <img src={AeAIcon1} alt="" />
                      <Typography variant="h3" component="h3">
                        Atendimento e agilidade
                      </Typography>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col sm={4} md={6} lg={12}>
              <Row justify="center">
                <Col>
                  <Card background="green" border="noBorder">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        gap: "16px",
                      }}
                    >
                      <img src={PIICon} alt="" />
                      <Typography variant="h3" component="h3">
                        Projetos interessantes
                      </Typography>
                    </div>
                  </Card>
                </Col>
                <Col>
                  <Card background="green" border="noBorder">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        gap: "16px",
                      }}
                    >
                      <img src={RRSIcon} alt="" />
                      <Typography variant="h3" component="h3">
                        Remuneração rápida e supervisionada
                      </Typography>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify="center" style={{ textAlign: "center" }}>
        <Col sm={6} md={8} lg={12}>
          <Typography variant="h1" component="h1">
            Quais habilidades você encontra por aqui?
          </Typography>
        </Col>

        <Row style={{ display: "flex", flexWrap: "wrap" }}>
          <Col sm={6} md={8} lg={12} style={{ display: "grid", gap: "24px" }}>
            <Row justify="center">
              <Chip>
                <Typography variant="body2" component="body2">
                  Design
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  Branding
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  Ilustração
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  Marketing
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  Identidade Visual
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  SEO
                </Typography>
              </Chip>
            </Row>
            <Row justify="center">
              <Chip>
                <Typography variant="body2" component="body2">
                  Redação
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  Revisão
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  Transcrição
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  Tradução
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  E-Books
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  ABNT
                </Typography>
              </Chip>
            </Row>
            <Row justify="center">
              <Chip>
                <Typography variant="body2" component="body2">
                  Programação
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  API
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  Desenvolvimento de Aplicativo
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  Desenvolvimento de Websites
                </Typography>
              </Chip>
              <Chip>
                <Typography variant="body2" component="body2">
                  E-Books
                </Typography>
              </Chip>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default HomePage;

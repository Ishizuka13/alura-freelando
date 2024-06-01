import { Col, Row } from "react-grid-system";
import { Typography } from "../../../common/components/Typography/Typography";
import ClienteImagem from "../../../common/assets/Imagens/Imagem cliente.png";
import ClienteImagem1 from "../../../common/assets/Imagens/Imagem freela.png";
import { Link } from "react-router-dom";
import { useSignUpUserContext } from "../../../context/ClientSignUp";

const ClientSelection = () => {
  const { setPerfil } = useSignUpUserContext();

  return (
    <>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <Typography variant="h3" component="h3">
            Como podemos te ajudar?
          </Typography>
        </Col>
      </Row>

      <Row justify="around">
        <Col sm={4} style={{ textAlign: "center", padding: 0 }}>
          <Link to="interests" onClick={() => setPerfil("cliente")}>
            <img src={ClienteImagem} alt="" width="100%" />
          </Link>
          <Typography component="body" variant="body1">
            Sou cliente e preciso de um freela!
          </Typography>
        </Col>
        <Col sm={4} style={{ textAlign: "center", padding: 0 }}>
          <img src={ClienteImagem1} alt="" width="100%" />
          <Typography component="body" variant="body1">
            Sou um freela e preciso de clientes!
          </Typography>
        </Col>
      </Row>
      <Row justify="center">
        <Col style={{ textAlign: "center" }}>
          <Typography variant="body1" component="body">
            Já tem conta?
          </Typography>
          <Typography variant="subtitle" component="body">
            <Link to="/sign">Faça Login!</Link>
          </Typography>
        </Col>
      </Row>
    </>
  );
};

export default ClientSelection;

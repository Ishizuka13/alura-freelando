import { Typography } from "../../../common/components/Typography/Typography";
import CompleteImg from "../../../common/assets/Imagens/Cadastro pronto-cliente - crop.png";
import { Button } from "../../../common/components/GlobalStyles/Button";
import { Col, Row } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSignUpUserContext } from "../../../context/ClientSignUp";

export const Completed = () => {
  const { validacaoCadastro } = useSignUpUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!validacaoCadastro) {
      navigate("/signup");
    }
  }, [navigate, validacaoCadastro]);
  return (
    <>
      <Row justify="center" style={{ textAlign: "center" }}>
        <Col>
          <Typography variant="h1" component="h1">
            Seu perfil está completo!
          </Typography>
          <Typography variant="body1" component="body">
            Agora é só começar a se conectar com os melhores freelancers do
            mercado!{" "}
          </Typography>
          <img src={CompleteImg} alt="" width="100%" />
          <Button nav="/signup" variant="Primary">
            Voltar para a home
          </Button>
        </Col>
      </Row>
    </>
  );
};

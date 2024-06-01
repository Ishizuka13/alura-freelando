import { Col, Row } from "react-grid-system";
import LoginIcon from "../../common/assets/Ícones/Ícone botões/ícone login.svg";
import { Typography } from "../../common/components/Typography/Typography";
import { TextField } from "../../common/components/TextField";
import { Button } from "../../common/components/GlobalStyles/Button";
import { Link, useNavigate } from "react-router-dom";
import { useUserSessionContext } from "../../context/ClientSignUp/useSessaoUsuario";
import { useState } from "react";
export const SignIn = () => {
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useUserSessionContext();

  const HandleSubmit = (e) => {
    e.preventDefault();

    login(isEmail, isPassword);
    navigate("/");
  };

  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        justifyItems: "center",
      }}
    >
      <Col
        style={{
          textAlign: "center",
        }}
      >
        <Typography variant="h1" component="h1">
          Efetuar Login
        </Typography>
        <form onSubmit={HandleSubmit}>
          <Row style={{ textAlign: "start" }}>
            <TextField label="Email" value={isEmail} onChange={setEmail} />
            <TextField
              label="Senha"
              value={isPassword}
              onChange={setPassword}
            />
          </Row>
          <Row>
            <Col sm={12}>
              <Button variant="primary">
                Login
                <img src={LoginIcon} alt="" />
              </Button>
            </Col>
          </Row>
        </form>
        <Row>
          <Col sm={12}>
            <Typography variant="body" component="body2">
              Ainda não criou sua conta no Freelando?
            </Typography>
            <Link to="signup">Cadastre-se clicando aqui</Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

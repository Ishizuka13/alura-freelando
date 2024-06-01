import { Col, Row } from "react-grid-system";
import { Typography } from "../../../common/components/Typography/Typography";
import { CheckBox } from "../../../common/components/Checkbox";
import { Button } from "../../../common/components/GlobalStyles/Button";
import { useSignUpUserContext } from "../../../context/ClientSignUp";

export const Interests = () => {
  const { usuario, setInteresse } = useSignUpUserContext();
  const options = [
    {
      value: 1,
      label: "TI e programação",
    },
    {
      value: 2,
      label: "Design e multimídia",
    },
    {
      value: 3,
      label: "Revisão",
    },
    {
      value: 4,
      label: "Tradução",
    },
    {
      value: 5,
      label: "Transcrição",
    },
    {
      value: 6,
      label: "Marketing",
    },
  ];

  return (
    <>
      <Typography variant="body1" component="body">
        Qual a área de interesse?
      </Typography>
      <Row style={{ marginBottom: "16px" }}>
        <Col>
          <CheckBox
            options={options}
            value={usuario.interesse}
            onClick={setInteresse}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "start" }}>
            <Button variant="Primary">Anterior</Button>{" "}
          </div>
        </Col>

        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "end" }}>
            <Button nav="/signup/form">Próxima</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

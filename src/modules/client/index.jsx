import { Col, Row } from "react-grid-system";
import { Typography } from "../../common/components/Typography/Typography";
import { TextField } from "../../common/components/TextField";
import { Button } from "../../common/components/GlobalStyles/Button";
import { Select } from "../../common/components/Select";
import { useSignUpUserContext } from "../../context/ClientSignUp";

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

export const ClientModule = () => {
  const {
    usuario,
    savePersonalData,
    setNomeCompleto,
    setUf,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
  } = useSignUpUserContext();

  const SubmitPersonalData = (e) => {
    e.preventDefault();
    savePersonalData();
  };

  return (
    <form onSubmit={SubmitPersonalData}>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <Typography variant="body" component="body">
            Crie seu perfil gratuitamente para começar a trabalhar com os
            melhores freelancers. Em seguida, você poderá dar mais detalhes
            sobre suas demandas e sobre sua forma de trabalho.
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <TextField
            onChange={setNomeCompleto}
            value={usuario.nomeCompleto}
            label="Nome"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4} sm={4}>
          <Select
            value={usuario.uf}
            onClick={setUf}
            title="Estado"
            options={brazilianStates}
          />
        </Col>
        <Col lg={8} md={8} sm={8}>
          <TextField
            onChange={setCidade}
            value={usuario.cidade}
            label="Cidade"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <TextField onChange={setEmail} value={usuario.email} label="Email" />
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4} sm={4}>
          <TextField onChange={setSenha} value={usuario.senha} label="Senha" />
        </Col>
        <Col lg={8} md={8} sm={8}>
          <TextField
            onChange={setSenhaConfirmada}
            value={usuario.senhaConfirmada}
            label="Repita a senha"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "start" }}>
            <Button variant="Primary">Anterior</Button>
          </div>
        </Col>

        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Button>Próxima</Button>
          </div>
        </Col>
      </Row>
    </form>
  );
};

import styled from "@emotion/styled";
import { Row, Container, Col } from "react-grid-system";

import background from "../../common/assets/Imagens/Perfil.png";
import avatar from "../../common/assets/Imagens/Group 11.png";
// import { useEffect } from "react";
import { Card } from "../../common/components/GlobalStyles/Card";
import { Typography } from "../../common/components/Typography/Typography";
import { TextField } from "../../common/components/TextField";
import { Button } from "../../common/components/GlobalStyles/Button";
import { useEffect, useState } from "react";
import { http } from "../../common/http";

const TituloEstilizado = styled.h1`
  background: url(${background}) no-repeat;
  margin-top: 0;
  font-weight: 600;
  font-size: 40px;
  background-position: center;
  line-height: 246px;
  text-align: center;
`;

const ImgEstilizada = styled.img`
  max-width: 100%;
  margin: 0 auto;
`;

export const Profile = () => {
  useEffect(() => {
    try {
      http.get("profile").then((resposta) => console.log(resposta.data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onFormSubmit = (evento) => {
    evento.preventDefault();
  };

  return (
    <>
      <TituloEstilizado>Perfil</TituloEstilizado>
      <Container>
        <form onSubmit={onFormSubmit}>
          <Row>
            <Col sm={12} md={5}>
              <Card>
                <div style={{ textAlign: "center" }}>
                  <Typography component="h3" variant="h3">
                    Nome Completo
                  </Typography>
                  <ImgEstilizada src={avatar} />
                </div>
              </Card>
            </Col>
            <Col sm={12} md={7}>
              <Typography component="h3" variant="h3">
                Revise seus dados
              </Typography>
              <TextField label="Nome" />
              <TextField label="Sobrenome" />
              <Row>
                <Col sm={12} md={6}>
                  <TextField label="Celular" />
                </Col>
                <Col sm={12} md={6}>
                  <TextField label="E-mail" tipo="email" />
                </Col>
                <Col sm={12} md={6}>
                  <TextField label="Código postal" />
                </Col>
                <Col sm={12} md={6}>
                  <TextField label="País" />
                </Col>
                <Col sm={12} md={6}>
                  <Button>Salvar</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

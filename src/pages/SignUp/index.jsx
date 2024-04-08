import { Col, Row } from "react-grid-system";
import { Typography } from "../../common/components/Typography/Typography";
import { Outlet } from "react-router-dom";

export const SignUp = () => {
  return (
    <>
      <Row justify="center">
        <Col md={12}>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <Typography variant="h1" component="h1">
                Crie seu cadastro
              </Typography>
            </Col>
          </Row>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

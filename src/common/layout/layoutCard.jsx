import { Card } from "../components/GlobalStyles/Card";
import { Col, Container, Row } from "react-grid-system";
import { UserSignUpProvider } from "../../context/ClientSignUp";
import { Outlet } from "react-router-dom";

export const LayoutCard = () => {
  return (
    <UserSignUpProvider>
      <Row justify="center">
        <Col
          xxx={6}
          xxl={6}
          xl={6}
          lg={6}
          md={8}
          sm={12}
          style={{ margin: "70px 0" }}
        >
          <Card>
            <Container>
              <Outlet />
            </Container>
          </Card>
        </Col>
      </Row>
    </UserSignUpProvider>
  );
};

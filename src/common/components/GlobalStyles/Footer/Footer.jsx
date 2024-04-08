import styled from "@emotion/styled";
import { Col, Container, Row } from "react-grid-system";
import { Typography } from "../../Typography/Typography";

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.primaries.a};
  height: 104px;
  padding: ${({ theme }) => theme.spacements.m};
  color: ${({ theme, color }) =>
    color === "white" ? theme.colors.white : "black"};
`;

export const Footer = ({ children, color = "white" }) => {
  return <StyledFooter color={color}>{children}</StyledFooter>;
};

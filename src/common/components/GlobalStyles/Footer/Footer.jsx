import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.primaries.a};
  height: 104px;
  padding: ${({ theme }) => theme.spacements.m};
`;

export const Footer = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

import styled from "@emotion/styled";

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primaries.a};
  padding: ${({ theme }) => theme.spacements.m} 120px;
  color: ${({ theme, color }) =>
    color === "white" ? theme.colors.white : "black"};
`;

export const Header = ({ children, color = "white" }) => {
  return <StyledHeader color={color}>{children}</StyledHeader>;
};

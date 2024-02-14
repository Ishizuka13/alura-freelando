import styled from "@emotion/styled";

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primaries.a};
  height: 104px;
  padding: ${({ theme }) => theme.spacements.m};
`;

export const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

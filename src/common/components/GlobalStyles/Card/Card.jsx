import styled from "@emotion/styled";

const StyledDiv = styled.div`
  padding: 0 ${({ theme }) => theme.spacements.l}
    ${({ theme }) => theme.spacements.l} ${({ theme }) => theme.spacements.l};
  background: ${({ theme }) => theme.colors.secondaries.a};
  border: 1px solid ${({ theme }) => theme.colors.primaries.a};
  border-radius: ${({ theme }) => theme.spacements.s};
`;

export const Card = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

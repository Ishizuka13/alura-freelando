import styled from "@emotion/styled";

export const MiniCard = ({ children, purple }) => {
  const StyledMiniCard = styled.div`
    color: ${({ theme }) => theme.colors.primaries.a};
    padding-top: ${({ theme }) => theme.spacements.m};
    padding-bottom: calc(12-6)px;
    background: ${({ theme }) => theme.colors.secondaries.a};
    border-radius: ${({ theme }) => theme.spacements.s};
  `;
  const StyledMiniGreenCard = styled.div`
    color: ${({ theme }) => theme.colors.primaries.a};
    padding: 0 ${({ theme }) => theme.spacements.l}
      ${({ theme }) => theme.spacements.l} ${({ theme }) => theme.spacements.l};
    background: ${({ theme }) => theme.colors.secondaries.c};
    border-radius: ${({ theme }) => theme.spacements.s};
  `;
  if (purple) return <StyledMiniCard>{children}</StyledMiniCard>;
  return <StyledMiniGreenCard>{children}</StyledMiniGreenCard>;
};

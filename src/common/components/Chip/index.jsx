import styled from "@emotion/styled";

const StyledChipPrimary = styled.div`
  color: ${({ theme }) => theme.colors.neutrals.a};
  margin: auto ${({ theme }) => theme.spacements.m};
  padding-right: ${({ theme }) => theme.spacements.s};
  padding-left: ${({ theme }) => theme.spacements.s};
  text-align: center;
  background: ${({ theme }) => theme.colors.neutrals.c};
  border: 1px solid ${({ theme }) => theme.colors.neutrals.a};
  border-radius: ${({ theme }) => theme.spacements.s};
`;
const StyledChip = styled.div``;

export const Chip = ({ children, primary }) => {
  if (primary) <StyledChip>{children}</StyledChip>;

  return <StyledChipPrimary>{children}</StyledChipPrimary>;
};

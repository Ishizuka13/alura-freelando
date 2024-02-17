import styled from "@emotion/styled";
import { Typography } from "../../Typography/Typography";

const StyledButtonPrimary = styled.button`
  height: 40px;
  border-radius: ${({ theme }) => theme.spacements.s};
  padding: ${({ theme }) => theme.spacements.xs}
    ${({ theme }) => theme.spacements.s};
  border: none;
  background: ${({ theme }) => theme.colors.primaries.b};
  color: ${({ theme }) => theme.colors.neutrals.c};
  &:hover {
    border-color: ${({ theme }) => theme.colors.dark.b};
    background: ${({ theme }) => theme.colors.dark.b};
    color: ${({ theme }) => theme.colors.neutrals.c};
  }
  &:focus {
    outline-color: ${({ theme }) => theme.colors.focus};
  }
`;

const StyledButton = styled.button`
  height: 40px;
  border-radius: ${({ theme }) => theme.spacements.s};
  padding: ${({ theme }) => theme.spacements.xs}
    ${({ theme }) => theme.spacements.s};
  border: 2px solid ${({ theme }) => theme.colors.primaries.b};
  background: ${({ theme }) => theme.colors.secondaries.b};
  color: ${({ theme }) => theme.colors.primaries.b};
  &:hover {
    border-color: ${({ theme }) => theme.colors.dark.b};
    color: ${({ theme }) => theme.colors.dark.b};
  }
  &:focus {
    outline-color: ${({ theme }) => theme.colors.focus};
  }
`;

export const Button = ({ children, variant }) => {
  if (variant === "Primary") {
    return (
      <StyledButton>
        <Typography component="body2Bold" variant="body2Bold">
          {children}
        </Typography>
      </StyledButton>
    );
  }
  return (
    <StyledButtonPrimary>
      <Typography component="bodyBold" variant="body2Bold">
        {children}
      </Typography>
    </StyledButtonPrimary>
  );
};

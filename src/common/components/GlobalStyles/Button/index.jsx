import styled from "@emotion/styled";
import { Typography } from "../../Typography/Typography";
import { useNavigate } from "react-router-dom";

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
  background: none;
  color: ${({ theme }) => theme.colors.primaries.b};
  &:hover {
    border-color: ${({ theme }) => theme.colors.dark.b};
    color: ${({ theme }) => theme.colors.dark.b};
  }
  &:focus {
    outline-color: ${({ theme }) => theme.colors.focus};
  }
`;

export const Button = ({ children, variant, nav }) => {
  const navigate = useNavigate();

  const PostPageButton = () => {
    if (nav) {
      navigate(nav);
    }
  };
  const HandlePageButton = () => {
    if (nav) {
      navigate(nav);
      return;
    }
    navigate(-1);
  };

  if (variant === "Primary") {
    return (
      <StyledButton onClick={HandlePageButton}>
        <Typography component="body2Bold" variant="body2Bold">
          {children}
        </Typography>
      </StyledButton>
    );
  }
  return (
    <StyledButtonPrimary onClick={PostPageButton}>
      <Typography component="bodyBold" variant="body2Bold">
        {children}
      </Typography>
    </StyledButtonPrimary>
  );
};

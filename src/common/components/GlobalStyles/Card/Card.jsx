import styled from "@emotion/styled";

const backgroundColors = {
  green: "#EBFCF9",
  purple: "#EBEAF9",
};

const borderAppear = {
  noBorder: "none",
  border: "5754ED",
};

export const Card = ({ children, background, border, paddingB }) => {
  const backgroundColor = backgroundColors[background];
  const borderA = borderAppear[border];

  const StyledDiv = styled.div`
    ${background == "green" ? "display: flex" : ""};
    justify-content: center;
    gap: 16px;
    color: ${border ? ({ theme }) => theme.colors.primaries.c : ""};
    padding: ${({ theme }) => theme.spacements.l};
    ${border ? "padding-right: 0; padding-left: 0" : ""};
    padding-bottom: ${paddingB};
    border-radius: ${({ theme }) => theme.spacements.s};
    border: 1px solid ${borderA};
    background: ${backgroundColor};
  `;

  return <StyledDiv>{children}</StyledDiv>;
};

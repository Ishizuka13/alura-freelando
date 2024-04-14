import styled from "@emotion/styled";

export const Banner = ({ children }) => {
  const StyledBanner = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.neutrals.c};
    color: ${({ theme }) => theme.colors.primaries.b};
    padding-top: ${({ theme }) => theme.spacements.l};
  `;

  return <StyledBanner>{children}</StyledBanner>;
};

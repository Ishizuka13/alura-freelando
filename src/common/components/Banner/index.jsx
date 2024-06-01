import styled from "@emotion/styled";

export const Banner = ({ children, backgroundImage }) => {
  const StyledBanner = styled.div`
    width: 100%;
    height: 100%;
    background: no-repeat;
    background: ${({ theme }) => theme.colors.neutrals.c}, " no-repeat";
    background-image: url(${backgroundImage});
    background-size: cover;
    color: ${({ theme }) => theme.colors.primaries.b};
  `;

  return <StyledBanner>{children}</StyledBanner>;
};

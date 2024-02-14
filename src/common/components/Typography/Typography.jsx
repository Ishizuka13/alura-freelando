import styled from "@emotion/styled";

const components = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  bodyBold: "strong",
  body2: "p",
  body2Bold: "strong",
  subtitle: "p",
};

const styles = {
  h1: `
  font-size: 40px;
  font-weight: 600;
  line-height: 49px;
    `,
  h2: `
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
    `,
  h3: `
  font-size: 29px;
  font-weight: 500;
  line-height: 29px;
    `,
  body1: `
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;  
      `,
  body1Bold: `
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;  
      `,

  body2: `
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;  
      `,
  body2Bold: `
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;  
      `,

  subtitle: `
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;  
      `,
};

export const Typography = ({ children, variant, component }) => {
  const tag = components[component];
  const UsedComponent = styled[tag]`
    ${styles[variant]}
  `;
  return <UsedComponent>{children}</UsedComponent>;
};

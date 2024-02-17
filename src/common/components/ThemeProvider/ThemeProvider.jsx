import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    white: "#FFFFFF",
    dark: {
      a: "#110EA0",
      b: "#B61B00",
    },
    attention: "#FF0E0E",
    focus: "#B009FF",
    primaries: {
      a: "#5754ED",
      b: "#D93114",
      c: "# 168070",
    },
    secondaries: {
      a: "#F8F8FD",
      b: "#FDF8F8",
      c: "#EBFCF9",
    },
    neutrals: {
      a: "#373737",
      b: "#E8E8E8",
      c: "#F5F5F5",
    },
  },
  spacements: {
    xxs: "4px",
    xs: "8px",
    s: "16px",
    m: "24px",
    l: "32px",
    xl: "48px",
    xxl: "64px",
  },
  fontFamily: "'Montserrat', sans-serif",
};

export const IsThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

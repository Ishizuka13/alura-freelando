import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    white: "",
    attention: "",
    focus: "",
    primaries: {
      a: "#5754ED",
      b: "",
      c: "",
    },
    secundaries: {
      a: "#EBEAF9",
      b: "",
      c: "",
    },
    neutrals: {
      a: "",
      b: "",
      c: "",
    },
  },
  spacements: {
    s: "16px",
    l: "32px",
  },
  fontFamily: "'Montserrat', sans-serif",
};

export const IsThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

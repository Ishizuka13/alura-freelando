import { Global } from "@emotion/react";

const styles = (theme) => ({
  html: {
    fontFamily: theme.fontFamily,
  },
  body: {
    margin: 0,
    padding: 0,
    height: "100svh",
  },
});

export const Styles = () => {
  return <Global styles={styles} />;
};

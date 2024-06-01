import { Global } from "@emotion/react";

const styles = (theme) => ({
  html: {
    fontFamily: theme.fontFamily,
  },
  body: {
    width: "100vw",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },
});

export const Styles = () => {
  return <Global styles={styles} />;
};

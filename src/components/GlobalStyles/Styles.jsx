import { Global } from "@emotion/react";

const styles = (theme) => ({
  html: {
    fontFamily: theme.fontFamily,
  },
  body: {
    margin: 0,
  },
});

export const Styles = () => {
  return <Global styles={styles} />;
};

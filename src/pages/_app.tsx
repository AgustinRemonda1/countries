import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          button: {
            color: "#fff",
            background: "#343847",
          },
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

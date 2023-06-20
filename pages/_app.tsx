import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Base from "../components/Base";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
        <Base>
          <Component {...pageProps} />
        </Base>
      </ThemeProvider>
    </>
  );
}

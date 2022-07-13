import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Base from "../components/Base";
import { SessionProvider } from "next-auth/react";
export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider enableSystem={false} attribute="class">
          <Base>
            <Component {...pageProps} />
          </Base>
        </ThemeProvider>
        </SessionProvider>
    </>
  );
}

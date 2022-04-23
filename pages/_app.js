import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Base from "../components/Base";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <ThemeProvider enableSystem={false} attribute="class">
        <Base>
          <Component {...pageProps} />
        </Base>
      </ThemeProvider>
    </>
  );
}

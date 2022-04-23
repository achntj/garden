import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Base from "../components/Base";
import { MDXProvider } from "@mdx-js/react";

import ImageComp from "../components/ImageComp";

const components = { ImageComp };

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <ThemeProvider enableSystem={false} attribute="class">
        <MDXProvider components={components}>
          <Base>
            <Component {...pageProps} />
          </Base>
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}

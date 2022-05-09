import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Base from "../components/Base";
import { motion } from "framer-motion";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={false} attribute="class">
        {/* <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0.7,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        > */}
        <Base>
          <Component {...pageProps} />
        </Base>
        {/* </motion.div> */}
      </ThemeProvider>
    </>
  );
}

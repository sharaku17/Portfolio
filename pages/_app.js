import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AppWrapper } from "../src/context/cursorstate";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AppWrapper>
      {" "}
      <main data-scroll-container>
        <div id="wrapper" class="">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </main>
    </AppWrapper>
  );
}

export default MyApp;

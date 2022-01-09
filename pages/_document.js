import Document, { Html, Head, Main, NextScript } from "next/document";
import { useRef, useEffect } from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="Danilo Trotta Portfolio" content="" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id-ID">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index,follow" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arkademi" />
        <meta property="og:updated_time" content="2022-04-25T11:57:40+00:00" />
        <meta property="fb:app_id" content="330417854097358" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arkademiedu_" />
        <meta name="twitter:creator" content="@arkademiedu_" />
        <meta name="twitter:domain" content="arkademi.com" />
        <meta
          name="google-site-verification"
          content="pqsgulR3Rd-K4zDR2ajhTmwSmHXjhWZCEzxv_wL_Scc"
        />
        <link rel="icon" href="https://arkademi.com/favicon.ico" />
        <link rel="apple-touch-icon" href="logo192.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

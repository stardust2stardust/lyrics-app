import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/src/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/icon.png"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

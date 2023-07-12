import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/src/components/layout";
import { useState } from "react";
import AppContext from "@/src/components/AppContext";

export default function App({ Component, pageProps }) {
  const [title, setTitle] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);

  return (
    <>
      <Head>
        <title>RapidAPI - Lyrics App</title>
        <link
          rel="shortcut icon"
          href="/icon.png"
        />
      </Head>
      <AppContext.Provider
        value={{
          title,
          setTitle,
          searchResults,
          setSearchResults,
          lyrics,
          setLyrics,
          loading,
          setLoading,
          artist,
          setArtist,
          album,
          setAlbum,
        }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </>
  );
}

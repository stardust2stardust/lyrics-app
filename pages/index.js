import axios from "axios";
import { useContext, useState } from "react";
import AppContext from "@/src/components/AppContext";

import Header from "@/src/components/Header";
import SearchForm from "@/src/components/SearchForm";
import Results from "@/src/components/Results";
import Lyrics from "@/src/components/Lyrics";
import ArtistDetails from "@/src/components/ArtistDetails";
import AlbumInfo from "@/src/components/AblumInfo";

export default function Home() {
  // const [title, setTitle] = useState("");
  // const [searchResults, setSearchResults] = useState(null);
  // const [lyrics, setLyrics] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [artist, setArtist] = useState(null);
  // const [album, setAlbum] = useState(null);
  const {
    setLoading,
    searchResults,
    setSearchResults,
    setTitle,
    lyrics,
    artist,
    album,
    setLyrics,
    loading,
  } = useContext(AppContext);

  const getResults = async () => {
    try {
      setLoading(true);

      const res = await axios.get("api/search/", {
        params: { title },
      });
      const { data } = res;
      console.log("data from get Results: ", data);
      setSearchResults(data.hits);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // const getLyrics = async (id) => {
  //   try {
  //     setSearchResults(null);
  //     setLoading(true);
  //     const res = await axios.get("api/lyrics/", {
  //       params: { id },
  //     });
  //     const { data } = res;
  //     setLoading(false);
  //     setLyrics(data.lyrics);
  //     console.log("lyrics object/state: ", data.lyrics);
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };

  const getArtistInfo = async (id) => {
    try {
      setSearchResults(null);
      setLyrics(false);
      setLoading(true);
      const res = await axios.get("api/artist/", {
        params: { id },
      });
      const { data } = res;
      setLoading(false);
      setArtist(data.artist);
    } catch (error) {
      setLoading(false);
    }
  };

  const getAlbumInfo = async (id) => {
    try {
      setSearchResults(null);
      setLyrics(false);
      setLoading(true);
      const res = await axios.get("api/album/", {
        params: { id },
      });
      const { data } = res;
      setLoading(false);
      setAlbum(data.album);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="bg-n950 flex flex-col md:px-12 p-5 relative font-poppins items-center min-h-screen">
      <div className="flex flex-col gap-8">
        <Header />
        <SearchForm
          setTitle={setTitle}
          setSearchResults={setSearchResults}
          setLyrics={setLyrics}
          getResults={getResults}
          loading={loading}
        />
      </div>

      {searchResults && (
        <Results
          // getLyrics={getLyrics}
          searchResults={searchResults}
        />
      )}

      {lyrics && (
        <Lyrics
          lyrics={lyrics}
          getArtistInfo={getArtistInfo}
          getAlbumInfo={getAlbumInfo}
        />
      )}

      {artist && <ArtistDetails artist={artist} />}

      {album && <AlbumInfo album={album} />}
    </div>
  );
}

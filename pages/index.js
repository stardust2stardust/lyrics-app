import axios from "axios";
import { useContext, useState } from "react";
import AppContext from "@/src/components/AppContext";
import { useRouter } from "next/router";

import Header from "@/src/components/Header";
import SearchForm from "@/src/components/SearchForm";
import Results from "@/src/components/Results";
import Lyrics from "@/src/components/Lyrics";
import ArtistDetails from "@/src/components/ArtistDetails";
import AlbumInfo from "@/src/components/AblumInfo";

export default function Home() {
  const {
    setLoading,
    searchResults,
    setSearchResults,
    title,
    setTitle,
    lyrics,
    artist,
    album,
    setLyrics,
    loading,
  } = useContext(AppContext);

  const router = useRouter();

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

  const getResults = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/search/", {
        params: { title },
      });
      const { data } = res;
      console.log(data);
      console.log("data from get Results: ", data);
      setSearchResults(data.hits);
      setLoading(false);
      router.push("/results");
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="bg-n950 flex flex-col md:px-12 p-5 relative font-poppins items-center min-h-screen">
      <div className="flex flex-col gap-8">
        <Header />
        <SearchForm getResults={getResults} />
      </div>

      {/* {lyrics && (
        <Lyrics
          lyrics={lyrics}
          getArtistInfo={getArtistInfo}
          getAlbumInfo={getAlbumInfo}
        />
      )} */}

      {/* {artist && <ArtistDetails artist={artist} />}

      {album && <AlbumInfo album={album} />} */}
    </div>
  );
}

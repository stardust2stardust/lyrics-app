import React from "react";
import axios from "axios";
import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const Search = () => {
  const [artist, setArtist] = useState("Eminem");
  const [track, setTrack] = useState("Lose Yourself");
  const [lyrics, setLyrics] = useState(null);
  const [results, setResults] = useState(null);

  const getResults = async () => {
    console.log(artist);
    try {
      const res = await axios.get("api/search/", {
        params: { artist },
      });
      console.log("res: ", res);
      const { data } = res;
      console.log("data: ", data);
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <SearchForm
        artist={artist}
        setArtist={setArtist}
        track={track}
        setTrack={setTrack}
        getResults={getResults}
      />
      <SearchResults results={results} />
    </section>
  );
};

export default Search;

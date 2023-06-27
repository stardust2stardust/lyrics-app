import React from "react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const Search = () => {
  const [artist, setArtist] = useState("Eminem");
  const [track, setTrack] = useState("Lose Yourself");
  const [results, setResults] = useState(null);

  const getResults = () => {
    console.log("fetch data");
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

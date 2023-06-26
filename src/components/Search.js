import React from "react";
import axios from "axios";
import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const Search = () => {
  const [artist, setArtist] = useState("Alan Walker");
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
    <div>
      <SearchForm
        artist={artist}
        setArtist={setArtist}
        getResults={getResults}
      />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

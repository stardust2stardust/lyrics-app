import React from "react";
import AppContext from "./AppContext";
import { useContext } from "react";

const SearchForm = ({ getResults }) => {
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

  return (
    <div className="mb-6">
      <form
        className="flex flex-col gap-2 sm:flex-row sm:mx-auto justify-center sm:w-full sm:flex max-w-[300px] mx-auto"
        onSubmit={(e) => {
          getResults();
          e.preventDefault();
          //e.stopPropagation();
        }}>
        <input
          type="text"
          className="flex w-full rounded-lg px-5 py-3 text-lg text-n800 bg-n200 font-semibold focus:outline-accent "
          placeholder="artist or song name"
          onChange={(e) => {
            setTitle(e.target.value);
            setSearchResults(null);
            setLyrics(null);
          }}
        />

        <div className="">
          <button
            className="w-full rounded-lg px-5 py-3 text-lg text-950 font-bold hover:bg-secondary bg-gradient-to-br from-secondary to-accent"
            type="submit">
            {loading ? <>Loading..</> : <>Search</>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;

import React from "react";

const SearchForm = ({
  setTitle,
  setSearchResults,
  setLyrics,
  getResults,
  loading,
}) => {
  return (
    <div className="mb-6">
      <form
        className="flex flex-col gap-2 sm:mx-auto justify-center sm:w-full sm:flex"
        onSubmit={(e) => {
          getResults();
          e.preventDefault();
          e.stopPropagation();
        }}>
        <input
          type="text"
          className="flex w-full rounded-lg px-5 py-3 text-lg text-n800 font-semibold focus:outline-accent "
          placeholder="artist or song name"
          onChange={(e) => {
            setTitle(e.target.value);
            setSearchResults(null);
            setLyrics(null);
          }}
        />

        <div className="">
          <button
            className="w-full rounded-lg px-5 py-3 text-lg text-950 font-bold hover:bg-secondary bg-gradient-to-br from-primary to-secondary"
            type="submit">
            {loading ? <>Loading..</> : <>Search</>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;

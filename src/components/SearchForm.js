import React from "react";

const SearchForm = ({ artist, setArtist, track, setTrack, getResults }) => {
  return (
    <div>
      <form
        className="sm:mx-auto justify-center sm:w-full sm:flex"
        onSubmit={(e) => {
          getResults();
          e.preventDefault();
          e.stopPropagation();
        }}>
        <input
          type="text"
          className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter artist name"
          onChange={(e) => {
            setArtist(e.target.value);
          }}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary sm:px-10"
            type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;

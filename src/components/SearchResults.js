import React from "react";
import SongCard from "./SongCard";

const SearchResults = ({ results }) => {
  console.log("results: ", results);
  const artistList = results?.message.body.artist_list;
  // const resultsArray = results?.message.body;
  // const artistList = resultsArray?.artist_list;
  return (
    <div className="">
      <h2 className="text-active text-center">Search Results will go here.</h2>
      {results && (
        <ul className="">
          {artistList.map((item) => (
            <li
              key={item.artist.artist_id}
              className="">
              <SongCard artist={item.artist} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;

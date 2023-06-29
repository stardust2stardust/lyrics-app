import React from "react";
import Image from "next/image";

const Results = ({ getLyrics, searchResults }) => {
  return (
    <div className="p-6">
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {searchResults.map((song) => (
          <li
            key={song.result.id}
            className="">
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center">
                  <Image
                    src={song.result.song_art_image_thumbnail_url}
                    className="w-full h-full rounded-lg"
                    alt={song.result.song_art_image_thumbnail_url}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="text-center flex flex-col gap-3">
                  <h3 className="text-lg font-bold break-words overflow-x-auto text-active ">
                    {song.result.title}
                  </h3>
                  <span className="text-sm text-light">
                    {song.result.artist_names}
                  </span>
                  <button
                    className="text-md text-active"
                    onClick={() => {
                      getLyrics(song.result.id);
                    }}>
                    Get Lyrics &rarr;
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;

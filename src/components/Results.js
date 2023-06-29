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
            <div className="h-full p-5 bg-n800 rounded-lg">
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
                <div className="text-center flex flex-col gap-3 tracking-wide">
                  <h3 className="text-xl font-bold break-words overflow-x-auto text-n300 ">
                    {song.result.title}
                  </h3>
                  <h4 className="text-primary">{song.result.artist_names}</h4>
                  <button
                    className="text-accent"
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

import React from "react";

const Results = ({ getLyrics, searchResults }) => {
  return (
    <div>
      (
      <div className="mt-10">
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {searchResults.map((song) => (
            <div
              key={song.result.id}
              className="pt-6">
              <div className="flow-root bg-light rounded-lg px-4 pb-8">
                <div className="-mt-6">
                  <div className="flex items-center justify-center">
                    <span className="p-2">
                      <img
                        src={song.result.song_art_image_thumbnail_url}
                        className="w-full h-full rounded-lg"
                        alt={song.result.song_art_image_thumbnail_url}
                      />
                    </span>
                  </div>
                  <div className="text-center justify-center items-center">
                    <h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
                      {song.result.title}
                    </h3>
                    <span className="mt-2 text-sm text-secondary block">
                      {song.result.artist_names}
                    </span>
                    <button
                      className="mt-5 text-md text-active"
                      onClick={() => {
                        getLyrics(song.result.id);
                      }}>
                      Get Lyrics &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      )
    </div>
  );
};

export default Results;

import React from "react";
import { Markup } from "interweave";

const Lyrics = ({ lyrics, getArtistInfo }) => {
  console.log(lyrics);
  return (
    <div>
      <div className="mt-10 md:max-w-[500px]">
        <h2 className="text-3xl font-bold text-primary">
          Lyrics for {lyrics.tracking_data.title}
        </h2>
        <p
          className="text-primary"
          onClick={() => getArtistInfo(lyrics.tracking_data.primary_artist_id)}>
          by: {lyrics.tracking_data.primary_artist}
        </p>
        <p
          className="text-primary"
          // onClick={getAlbumInfo}
        >
          album: {lyrics.tracking_data.primary_album}
        </p>

        <p className="mt-6 text-n400 text-xl">
          <Markup content={lyrics.lyrics.body.html} />
        </p>
      </div>
    </div>
  );
};

export default Lyrics;

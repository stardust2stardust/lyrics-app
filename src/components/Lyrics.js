import React, { useContext } from "react";
import { Markup } from "interweave";
import AppContext from "./AppContext";

const Lyrics = ({ getArtistInfo, getAlbumInfo }) => {
  const { lyrics } = useContext(AppContext);

  return (
    <div>
      <div className="mt-10 md:max-w-[500px]">
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-3xl font-bold text-primary">
            Lyrics for {lyrics.tracking_data.title}
          </h2>
          <p
            className="text-primary text-xl"
            onClick={() =>
              getArtistInfo(lyrics.tracking_data.primary_artist_id)
            }>
            Artist:{" "}
            <span className="underline  cursor-pointer hover:text-secondary">
              {lyrics.tracking_data.primary_artist}
            </span>
          </p>
          <p
            className="text-primary text-xl "
            onClick={() => getAlbumInfo(lyrics.tracking_data.primary_album_id)}>
            Album:{" "}
            <span className="underline cursor-pointer hover:text-secondary">
              {lyrics.tracking_data.primary_album}
            </span>
          </p>
        </div>

        <div className="mt-6 text-n400 text-xl">
          <Markup content={lyrics.lyrics.body.html} />
        </div>
      </div>
    </div>
  );
};

export default Lyrics;

import React, { useContext } from "react";
import { Markup } from "interweave";
import AppContext from "./AppContext";
import { useRouter } from "next/router";
import axios from "axios";

const Lyrics = () => {
  const { lyrics, artist, setArtist, album, setAlbum, setLoading } =
    useContext(AppContext);

  const router = useRouter();

  const getArtistInfo = async (id) => {
    const options = {
      method: "GET",
      url: `https://genius-song-lyrics1.p.rapidapi.com/artist/details/`,
      params: { id: id },
      headers: {
        "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
    };

    try {
      setLoading(true);
      let response = await axios(options);
      const { data } = response;
      setLoading(false);
      setArtist(data.artist);
      router.push(`/artist/${data.artist.name}`);
    } catch (error) {
      console.log("error: ", error);
      setLoading(false);
    }
  };

  const getAlbumInfo = async (id) => {
    const options = {
      method: "GET",
      url: `https://genius-song-lyrics1.p.rapidapi.com/album/details/`,
      params: { id: id },
      headers: {
        "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
    };

    try {
      setLoading(true);
      let response = await axios(options);
      const { data } = response;
      setLoading(false);
      setAlbum(data.album);
      router.push(`/album/${data.album.name}`);
    } catch (error) {
      console.log("error: ", error);
      setLoading(false);
    }
  };

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

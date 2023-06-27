import React from "react";
import { useState } from "react";
import axios from "axios";

const SongCard = ({ artist }) => {
  const [albums, setAlbums] = useState(null);

  const getAlbums = async () => {
    console.log("artist: ", artist);
    const { artistId } = artist.artist_id;
    try {
      const res = await axios.get("api/albums/", {
        params: { artistId },
      });
      console.log("res: ", res);
      const { data } = res;
      console.log("albums data: ", data);
      setAlbums(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-primary p-5 border-2 border-primary">
      <h2>{artist.artist_name}</h2>
      <p onClick={getAlbums}>id: {artist.artist_id}</p>
    </div>
  );
};

export default SongCard;

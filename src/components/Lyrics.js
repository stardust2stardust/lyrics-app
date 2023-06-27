import React from "react";
import { find_lyrics } from "@brandond/findthelyrics";

const Lyrics = () => {
  const getLyrics = async () => {
    const lyrics = await find_lyrics(
      "Fitz and The Tantrums I Just Wanna Shine"
    );
    if (lyrics instanceof Error) {
      console.error(lyrics);
    } else {
      console.log(lyrics);
    }
  };

  return (
    <div className="text-primary">
      <h1>Song Title</h1>
      <h2>Lyrics</h2>
      <button onClick={getLyrics}>get lyrics</button>
    </div>
  );
};

export default Lyrics;

import React, { useContext } from "react";
import Image from "next/image";
import AppContext from "./AppContext";
import { useRouter } from "next/router";
import axios from "axios";

const Results = () => {
  const router = useRouter();

  const { searchResults, setSearchResults, setLoading, setLyrics } =
    useContext(AppContext);

  const getLyrics = async (id) => {
    const options = {
      method: "GET",
      url: `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/`,
      params: { id: id },
      headers: {
        "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
    };

    try {
      //setSearchResults(null);
      setLoading(true);
      let response = await axios(options);
      const { data } = response;
      setLoading(false);
      setLyrics(data.lyrics);
      router.push(`/lyrics`);
    } catch (error) {
      console.log("error: ", error);
      setLoading(false);
    }
  };

  return (
    <section className="">
      <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {searchResults.map((song) => (
          <li
            key={song.result.id}
            className="">
            <div className="h-full p-5 bg-n900 rounded-lg">
              <div className="flex flex-col gap-7">
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
                  <p className="text-primary">{song.result.artist_names}</p>
                  {/* <p className="text-primary">{song.result.id}</p> */}
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
    </section>
  );
};

export default Results;

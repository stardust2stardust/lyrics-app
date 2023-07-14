import Image from "next/image";
import React, { useContext } from "react";
import AppContext from "./AppContext";
import { useRouter } from "next/router";

const AlbumInfo = () => {
  const { album } = useContext(AppContext);

  const router = useRouter();

  return (
    <div className="p-3 text-n300">
      <button
        className="text-primary text-2xl pl-5 pt-0"
        onClick={() => router.back()}>
        &lt; Back
      </button>
      {album && (
        <section className="my-10 flex flex-col items-center gap-5 p-8">
          <div className="">
            <Image
              src={album.cover_art_thumbnail_url}
              alt={album.name}
              width={300}
              height={300}
              className=""
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary my-2">
              {album.name}
            </h1>
            <h2 className="text-xl my-2">by {album.artist.name}</h2>
            <p>{album.release_date_for_display}</p>
          </div>
          <div className="max-w-[65ch] text-justify">
            {album.description_preview}
          </div>
        </section>
      )}
    </div>
  );
};

export default AlbumInfo;

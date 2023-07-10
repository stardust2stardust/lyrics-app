import React from "react";
import { Markup } from "interweave";
import Link from "next/link";
import Image from "next/image";

const AlbumInfo = ({ album }) => {
  console.log("ALBUM INFO: ", album);
  return (
    <section className="p-3 text-n300">
      <div className="my-10 flex flex-col items-center gap-3">
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
      </div>

      <div>{album.description_preview}</div>
    </section>
  );
};

export default AlbumInfo;

import React from "react";
import { Markup } from "interweave";
import Link from "next/link";
import Image from "next/image";

const ArtistDetails = ({ artist }) => {
  console.log("artist", artist);
  return (
    <section className="p-3 text-n300">
      <Image
        src={artist.image_url}
        alt={artist.name}
        width={810}
        height={810}
        className="w-48 h-48 rounded-full"
      />
      <h1 className="text-3xl font-bold text-primary my-2">{artist.name}</h1>
      <Link href={artist.url}>Genius profile page </Link>
      <p className="max-w-[65ch]">
        <Markup content={artist.description.html} />
      </p>
    </section>
  );
};

export default ArtistDetails;

import { Markup } from "interweave";
import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import AppContext from "./AppContext";
import { useRouter } from "next/router";

const ArtistDetails = () => {
  const { artist } = useContext(AppContext);
  const router = useRouter();

  return (
    <div className="p-3 text-n300">
      <button
        className="text-primary text-2xl pl-5 pt-0"
        onClick={() => router.back()}>
        &lt; Back
      </button>
      {artist && (
        <section className="p-8 flex flex-col gap-5 ">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center">
            <div className="md:w-1/3 md:flex md:justify-end">
              <Image
                src={artist.image_url}
                alt={artist.name}
                width={810}
                height={810}
                className="w-48 h-48 rounded-full"
              />
            </div>
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-primary my-2">
                {artist.name}
              </h1>
              <Link
                href={artist.url}
                className="text-accent">
                Genius profile page{" "}
              </Link>
            </div>
          </div>

          <div className="max-w-[65ch] text-justify">
            <Markup content={artist.description.html} />
          </div>
        </section>
      )}
    </div>
  );
};

export default ArtistDetails;

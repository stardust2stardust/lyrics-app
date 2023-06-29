import React from "react";
import { Markup } from "interweave";

const Lyrics = ({ lyrics }) => {
  return (
    <div>
      <div className="mt-10 max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-active">
          Lyrics for {lyrics.tracking_data.title}
        </h2>

        <p className="mt-6 leading-loose text-primary text-xl">
          <Markup content={lyrics.lyrics.body.html} />
        </p>
      </div>
    </div>
  );
};

export default Lyrics;

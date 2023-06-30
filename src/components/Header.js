import React from "react";

const Header = () => {
  return (
    <div className="text-center flex flex-col gap-3">
      <h1 className="p-2 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
        Song Lyrics
      </h1>
      <h2 className=" text-n200 text-xl font-light">
        Get the complete lyrics of any given track.
      </h2>
    </div>
  );
};

export default Header;

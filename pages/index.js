import Search from "@/src/components/Search";

export default function Home() {
  return (
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
      <h1 className="text-6xl font-bold text-primary mt-10">
        <span className="text-active">Lyrics</span> App
      </h1>
      <h2 className="text-primary text-2xl font-light mt-6">
        Get the complete lyrics of any given track.
      </h2>
      <Search />
    </div>
  );
}

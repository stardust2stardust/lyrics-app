import axios from "axios";
import { useContext } from "react";
import AppContext from "@/src/components/AppContext";
import { useRouter } from "next/router";

import HomeHeader from "@/src/components/HomeHeader";
import SearchForm from "@/src/components/SearchForm";

export default function Home() {
  const { setLoading, setSearchResults, title } = useContext(AppContext);

  const router = useRouter();

  const getResults = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/search/", {
        params: { title },
      });
      const { data } = res;
      console.log(data);
      console.log("data from get Results: ", data);
      setSearchResults(data.hits);
      setLoading(false);
      router.push("/results");
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <section className="bg-n950 flex flex-col md:px-12 p-5 relative font-poppins items-center ">
      <div className="flex flex-col gap-8 mt-8">
        <HomeHeader />
        <SearchForm getResults={getResults} />
      </div>
    </section>
  );
}

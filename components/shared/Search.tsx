import Image from "next/image";
import { Input } from "../ui/input";

const Search = () => {
  return (
    // <div className="relative w-[calc(100%-2px)] m-auto ">
    <div className="relative w-full m-auto ">
       <input
        className={`w-96 rounded-full pl-8 py-[8px] px-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 border-2 border-gray-300 `}
        placeholder={"Search for courses.."}
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      />
      <Image
        src="/assets/search.svg"
        height={15}
        width={15}
        alt="search"
        className="absolute  top-3.5 left-3 "
      />
    </div>
  );
};

export default Search;

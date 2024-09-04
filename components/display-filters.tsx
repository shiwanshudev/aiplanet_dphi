"use client";
import { useContext } from "react";
import { SearchContext } from "@/app/context/SearchContext";
import Image from "next/image";
export default function DisplayFilters() {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("Search must be used with SearchContextProvider!");
  const { searchFilters, removeFilter } = context;
  return (
    <div className="flex lg:pl-52 pt-10 lg:justify-normal justify-start flex-wrap">
      {searchFilters.map((f) => (
        <button
          key={f}
          className="bg-brand-lightgray bg-opacity-50 text-white rounded-full px-3 py-2 mr-2 flex items-center justify-center"
          onClick={() => removeFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1).toLowerCase()}
          <Image
            width={14}
            height={14}
            src={"/close.svg"}
            alt="remove filter"
            className="ml-2"
          />
        </button>
      ))}
    </div>
  );
}

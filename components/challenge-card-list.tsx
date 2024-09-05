"use client";
import ChallengeCard from "./challenge-card";
import { useContext } from "react";
import { SearchContext } from "@/app/context/SearchContext";
import { status } from "@/utils/constants";
import { CHALLENGE_CARDS } from "@/utils/constants";

export default function ChallengeCardList() {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("Search must be used with SearchContextProvider!");
  const { searchText, searchFilters } = context;
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center flex-wrap gap-12">
      {CHALLENGE_CARDS.filter((challenge) => {
        const searchMatch = challenge.name
          .toLowerCase()
          .includes(searchText.toLocaleLowerCase());

        const filterMatch = searchFilters.includes(status.ALL)
          ? true
          : searchFilters.includes(challenge.status);
        if (searchFilters.length > 0) {
          return filterMatch;
        } else if (searchText.length > 0) {
          return filterMatch || searchMatch;
        } else {
          return searchMatch;
        }
      }).map(({ imgSrc, status, start, end, name, id }) => {
        return (
          <ChallengeCard
            imgSrc={imgSrc}
            status={status}
            start={start}
            name={name}
            end={end}
            id={id}
            key={id}
          />
        );
      })}
    </div>
  );
}

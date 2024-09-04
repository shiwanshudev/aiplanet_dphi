"use client";
import ChallengeCard from "./challenge-card";
import { useContext } from "react";
import { SearchContext } from "@/app/context/SearchContext";

const CHALLENGE_CARDS = [
  {
    imgSrc: "/images/1.png",
    status: "ACTIVE",
    start: new Date(),
    end: new Date(),
    name: "Data Science Bootcamp - Graded Datathon",
    id: "1",
  },
  {
    imgSrc: "/images/2.png",
    status: "UPCOMING",
    start: new Date(),
    end: new Date(),
    name: "Data Sprint 72 - Butterfly Identification",
    id: "2",
  },
  {
    imgSrc: "/images/3.png",
    status: "PAST",
    start: new Date(),
    end: new Date(),
    name: "Data Sprint 70-Airline Passenger Satisfaction",
    id: "3",
  },
  {
    imgSrc: "/images/4.png",
    status: "UPCOMING",
    start: new Date(),
    end: new Date(),
    name: "Engineering Graduates Employment Outcomes",
    id: "4",
  },
  {
    imgSrc: "/images/5.png",
    status: "UPCOMING",
    start: new Date(),
    end: new Date(),
    name: "Travel Insurance Claim Prediction",
    id: "5",
  },
  {
    imgSrc: "/images/6.png",
    status: "UPCOMING",
    start: new Date(),
    end: new Date(),
    name: "Data Sprint 71 - Weather Recognition",
    id: "6",
  },
];

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

        const filterMatch = searchFilters.includes(challenge.status);
        // Filter is there
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

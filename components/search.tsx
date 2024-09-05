"use client";
import Image from "next/image";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState, useRef, useEffect, useContext, useCallback } from "react";
import { level, status } from "@/utils/constants";
import { SearchContext } from "@/app/context/SearchContext";

export default function Search() {
  const menu = useRef<null | HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { EASY, MEDIUM, HARD } = level;
  const { ALL, UPCOMING, ACTIVE, PAST } = status;

  const context = useContext(SearchContext);

  if (!context)
    throw new Error("Search must be used with SearchContextProvider");
  const { handleFilter, setSearchText, searchText } = context;

  const closeOpenMenu = (e: MouseEvent) => {
    if (isOpen && !menu.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };
  const stableCloseOpenMenu = useCallback(
    (e: MouseEvent) => {
      if (isOpen && !menu.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );
  useEffect(() => {
    document.addEventListener("mousedown", stableCloseOpenMenu);
    return () => document.removeEventListener("mousedown", stableCloseOpenMenu);
  }, [menu, stableCloseOpenMenu]);

  return (
    // Search
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center bg-white rounded-lg px-2 w-2/3">
        <Image alt="search" width={17} height={17} src={"/search.svg"} />
        <input
          className="w-full p-2 outline-none"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {/* FILTER */}
      <div className="relative">
        <button
          className="bg-white px-3 py-2 rounded-lg flex items-center justify-center ml-6"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Filter{" "}
          <Image
            src={"/caret.svg"}
            width={14}
            height={10}
            alt="filter"
            className="ml-2"
          />{" "}
        </button>
        {isOpen && (
          <div className="fixed w-screen h-screen bg-black z-10 top-0 left-0 opacity-10 animate-overlay-fade-in"></div>
        )}
        {isOpen && (
          <div
            className="absolute bg-white top-0 px-5 rounded-lg z-20 w-52 lg:w-72 -left-28 lg:-left-0"
            ref={menu}
          >
            <div className="flex items-center justify-between border-b border-solid border-b-brand-lightgray-200 text-lg py-4">
              Filter{" "}
              <Image
                src={"/caret.svg"}
                width={14}
                height={10}
                alt="filter"
                className="ml-2"
              />
            </div>
            <p className="text-brand-gray-300 text-base py-3">Status</p>
            <FormGroup className="text-brand-gray-200 pb-2">
              <FormControlLabel
                className="text-sm"
                control={
                  <Checkbox size="small" value={ALL} onChange={handleFilter} />
                }
                label={<span className="text-sm">All</span>}
              />
              <FormControlLabel
                className="text-sm"
                control={
                  <Checkbox
                    size="small"
                    onChange={handleFilter}
                    value={ACTIVE}
                  />
                }
                label={<span className="text-sm">Active</span>}
              />
              <FormControlLabel
                className="text-sm"
                control={
                  <Checkbox
                    size="small"
                    onChange={handleFilter}
                    value={UPCOMING}
                  />
                }
                label={<span className="text-sm">Upcoming</span>}
              />
              <FormControlLabel
                className="text-sm"
                control={
                  <Checkbox size="small" onChange={handleFilter} value={PAST} />
                }
                label={<span className="text-sm">Past</span>}
              />
            </FormGroup>
            <p className="text-brand-gray-300 text-base py-3 border-solid border-t-brand-lightgray-200 border-t">
              Level
            </p>
            <FormGroup className="text-brand-gray-200">
              <FormControlLabel
                className="text-sm"
                control={
                  <Checkbox size="small" onChange={handleFilter} value={EASY} />
                }
                label={<span className="text-sm">Easy</span>}
              />
              <FormControlLabel
                className="text-sm"
                control={
                  <Checkbox
                    size="small"
                    onChange={handleFilter}
                    value={MEDIUM}
                  />
                }
                label={<span className="text-sm">Medium</span>}
              />
              <FormControlLabel
                className="text-sm"
                control={
                  <Checkbox size="small" onChange={handleFilter} value={HARD} />
                }
                label={<span className="text-sm">Hard</span>}
              />
            </FormGroup>
          </div>
        )}
      </div>
    </div>
  );
}

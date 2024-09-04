"use client";
import React, { createContext, Provider, useState } from "react";

interface SearchContextType {
  searchFilters: string[];
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFilter: (f: string) => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

export default function SearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchFilters, setSearchFilters] = useState<string[]>([]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchFilters.includes(e.target.value) && e.target.checked === false) {
      const toRemove = e.target.value;
      setSearchFilters((prev) => {
        return prev.filter((f) => f !== toRemove);
      });
    }

    if (!searchFilters.includes(e.target.value) && e.target.checked === true) {
      const toAdd = e.target.value;
      setSearchFilters((prev) => {
        return [...prev, toAdd];
      });
    }
  };

  function removeFilter(f: string) {
    setSearchFilters((prev) => {
      return prev.filter((currentFilter) => currentFilter !== f);
    });
  }

  return (
    <SearchContext.Provider
      value={{ handleFilter, searchFilters, removeFilter }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext };

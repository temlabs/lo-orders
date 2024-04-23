"use client";

import { useRef, useState } from "react";
import { SearchIcon } from "../icons/SearchIcon";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>();
  const searchBarRef = useRef<HTMLInputElement>(null);

  const scrollToInput = () => {
    searchBarRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-row items-center w-fit overflow-hidden relative">
      <SearchIcon color="black" className="absolute left-2" />
      <input
        ref={searchBarRef}
        onFocus={scrollToInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type={"text"}
        className={
          "decoration-transparent bg-transparent outline-none border-neutral-400 focus:border-neutral-600 transition-colors  border rounded-3xl px-8 py-2 text-neutral-900 text-sm"
        }
      />
    </div>
  );
}

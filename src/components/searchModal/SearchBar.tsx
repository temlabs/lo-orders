"use client";

import { useState } from "react";
import { SearchIcon } from "../icons/SearchIcon";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>();

  return (
    <div className="flex flex-row items-center">
      <SearchIcon color="black" className="-mr-7" />
      <input
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

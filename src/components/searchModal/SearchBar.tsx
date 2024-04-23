"use client";

import { InputHTMLAttributes, useRef, useState } from "react";
import { SearchIcon } from "../icons/SearchIcon";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchBar(props: Props) {
  return (
    <div className="flex flex-row items-center w-full overflow-hidden relative">
      <SearchIcon color="black" className="absolute left-2" />
      <input
        {...props}
        className={
          "decoration-transparent bg-transparent outline-none border-neutral-400 focus:border-neutral-600 transition-colors  border rounded-3xl px-8 py-2 text-neutral-900 text-sm w-full"
        }
      />
    </div>
  );
}

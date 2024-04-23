import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { OrderData, CoinExchangePair } from "../orderBook/orderDataTypes";
import { SearchBar } from "./SearchBar";
import { useDataStore } from "@/app/store/useDataStore";

interface Props {
  onSelect: (coinExchangePair: CoinExchangePair) => void;
  onClose: () => void;
  data: Map<string, OrderData>;
}

export function SearchModal({ onSelect, onClose, data }: Props) {
  //   const coinExchangePairs = useRef(useDataStore.getState().coinExchangePairs);
  //   useEffect(() => {
  //     useDataStore.subscribe(
  //       (state) => (coinExchangePairs.current = state.coinExchangePairs)
  //     );
  //   }, []);
  const [searchTerm, setSearchTerm] = useState<string>();
  const baseOptions = Array.from(data.keys()).sort((a, b) =>
    (data.get(a)?.coin ?? "") > (data.get(b)?.coin ?? "") ? 1 : -1
  );
  const filteredOptions = !!searchTerm
    ? baseOptions.filter((o) => {
        const coin = data.get(o)?.coin;
        const exchange = data.get(o)?.exchange;
        const regex = new RegExp(searchTerm, "i");
        return regex.test(coin ?? "") || regex.test(exchange ?? "");
      })
    : baseOptions;

  useEffect(() => {
    // Remove overflow on mount
    document.body.style.overflow = "hidden";

    return () => {
      // Revert overflow on unmount
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div
        className="bg-black opacity-30  w-screen min-h-screen h-max absolute top-0 left-0 animate-[fadeIn_1s_ease-in-out_1] z-40"
        onClick={onClose}
      ></div>
      <div className="absolute top-0 left-0  flex flex-col justify-center items-center w-screen h-screen">
        <div className="w-screen h-screen md:w-4/5 z-50  md:h-5/6  bg-white shadow-md rounded-lg flex flex-col items-center px-4 py-8">
          <div className="flex flex-row w-full justify-end p-2">
            <CloseIcon
              color="black"
              onClick={onClose}
              className="cursor-pointer"
            />
          </div>
          <div className="px-12 h-full flex flex-col w-3/4 items-center gap-4 py-8">
            <div className="h-fit w-full">
              <SearchBar
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type={"text"}
              />
            </div>
            <div className=" flex flex-col  w-full flex-shrink overflow-y-scroll overflow-x-hidden gap-2">
              {filteredOptions.map((o) => (
                <div
                  onClick={() =>
                    onSelect({
                      coin: data.get(o)?.coin,
                      exchange: data.get(o)?.exchange,
                    })
                  }
                  className="w-full flex flex-row justify-between bg-neutral-100 px-4 py-2 hover:bg-zinc-200 cursor-pointer "
                  key={o}
                >
                  <p className="text-neutral-900 text-base font-bold">
                    {data.get(o)?.coin}
                  </p>
                  <p className="text-neutral-600 text-sm">
                    {data.get(o)?.exchange}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

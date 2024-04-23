import { useContext } from "react";
import { PlusIcon } from "../icons/PlusIcon";
import { SearchBar } from "../searchModal/SearchBar";
import { OrderBookTable } from "./orderBookTable/OrderBookTable";
import { CoinExchangePair, OrderData, PriceArray } from "./orderDataTypes";
import { ModalContext } from "@/ModalContext";
import { consolidateDuplicates } from "./orderBookFunctions";

interface Props {
  coinExchangePair: CoinExchangePair;
  onOpenModal: () => void;
  data?: OrderData;
}

export function OrderBook({ coinExchangePair, onOpenModal, data }: Props) {
  const asks = (data?.asks ?? [])
    .map((ask) => ({
      price: ask[0],
      buyVolume: ask[1],
      sellVolume: undefined,
    }))
    .slice(0, 5);
  const bids = (data?.bids ?? [])
    .map((bid) => ({
      price: bid[0],
      sellVolume: bid[1],
      buyVolume: undefined,
    }))
    .slice(0, 5);
  const priceArray: PriceArray = [...asks, ...bids].sort(
    (a, b) => a.price - b.price
  );

  const priceArrayConsolidated = consolidateDuplicates(priceArray);

  const maxVolume = Math.max(
    ...priceArray.map((p) => Math.max(p.buyVolume ?? 0, p.sellVolume ?? 0))
  );
  return (
    <div className="gap-8 flex flex-col w-fit">
      <SearchBar onFocus={() => onOpenModal()} />
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between items-baseline">
          <h3 className="text-2xl text-neutral-900 font-bold">
            {coinExchangePair.coin}
          </h3>
          <h5 className="text-sm text-neutral-700">
            {coinExchangePair.exchange}
          </h5>
        </div>
        <OrderBookTable prices={priceArrayConsolidated} maxVolume={maxVolume} />
      </div>
    </div>
  );
}

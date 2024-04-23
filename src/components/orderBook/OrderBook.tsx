import { SearchBar } from "../searchModal/SearchBar";
import { OrderBookTable } from "./orderBookTable/OrderBookTable";

export function OrderBook() {
  return (
    <div className="gap-8 flex flex-col">
      <SearchBar />
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between items-baseline">
          <h3 className="text-2xl text-neutral-900 font-bold">BTCUSD</h3>
          <h5 className="text-sm text-neutral-700">Exchange name</h5>
        </div>
        <OrderBookTable />
      </div>
    </div>
  );
}

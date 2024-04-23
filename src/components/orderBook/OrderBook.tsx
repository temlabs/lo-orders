import { SearchBar } from "../searchModal/SearchBar";
import { OrderBookTable } from "./orderBookTable/OrderBookTable";

export function OrderBook() {
  return <div className="gap-2 flex flex-col">
<SearchBar/>
    <OrderBookTable/>
  </div>;
}

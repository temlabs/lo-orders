import { PriceArray } from "../orderDataTypes";
import { OrderBookTableHeader } from "./OrderBookTableHeader";
import { OrderBookTableRow } from "./OrderBookTableRow";

interface Props {
  prices: PriceArray;
  maxVolume: number;
}

export function OrderBookTable({ prices, maxVolume }: Props) {
  return (
    <table className="w-full text-black ">
      <tbody className="w-full">
        <OrderBookTableHeader />
        {prices.map((p) => (
          <OrderBookTableRow
            key={p.price}
            price={p.price.toString()}
            buyVolume={p.buyVolume}
            sellVolume={p.sellVolume}
            maxVolume={maxVolume}
          />
        ))}
        {/* <OrderBookTableRow
          price="101.43"
          buyVolume={75}
          sellVolume={undefined}
        />
        <OrderBookTableRow
          price="101.43"
          buyVolume={undefined}
          sellVolume={38}
        /> */}
      </tbody>
    </table>
  );
}

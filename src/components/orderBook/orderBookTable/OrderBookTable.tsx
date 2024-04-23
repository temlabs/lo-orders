import { OrderBookTableHeader } from "./OrderBookTableHeader";
import { OrderBookTableRow } from "./OrderBookTableRow";

export function OrderBookTable() {
  return (
    <table className="w-full text-black ">
      <tbody className="w-full">
        <OrderBookTableHeader />
        <OrderBookTableRow
          price="101.43"
          buyVolume={75}
          sellVolume={undefined}
        />
        <OrderBookTableRow
          price="101.43"
          buyVolume={undefined}
          sellVolume={38}
        />
      </tbody>
    </table>
  );
}

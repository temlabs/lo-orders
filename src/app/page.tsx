import { OrderBook } from "@/components/orderBook/OrderBook";
import { OrderBookTable } from "@/components/orderBook/orderBookTable/OrderBookTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <OrderBookTable/>
    </main>
  );
}

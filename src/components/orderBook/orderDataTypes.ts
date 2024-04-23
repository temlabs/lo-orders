export interface OrderData {
  timestamp: number;
  exchange: string;
  coin: string;
  bids: [number, number][];
  asks: [number, number][];
}

export type CoinExchangePair = Partial<Pick<OrderData, "coin" | "exchange">>;
export type OrderDataMapValue = Omit<OrderData, "coin" | "exchange">;

export type PriceArray = Array<{
  price: number;
  sellVolume?: number;
  buyVolume?: number;
}>;

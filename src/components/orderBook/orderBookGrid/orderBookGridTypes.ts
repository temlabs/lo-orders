import { CoinExchangePair } from "../orderDataTypes";

export type OrderBookPosition = "left" | "right" | "above" | "below";
export interface GridItem {
  id: string;
  coinExchangePair?: CoinExchangePair;
}

import { PriceArray } from "./orderDataTypes";

export const consolidateDuplicates = (priceArray: PriceArray) => {
  const consolidatedPriceArray: PriceArray = [];

  for (let i = 0; i < priceArray.length; i++) {
    const current = priceArray[i];
    const previous = consolidatedPriceArray[consolidatedPriceArray.length - 1];

    if (previous && previous.price === current.price) {
      const consolidatedPrice = {
        price: current.price,
        buyVolume: current.buyVolume ?? previous.buyVolume,
        sellVolume: current.sellVolume ?? previous.sellVolume,
      };
      consolidatedPriceArray.pop(); // Remove the previous element
      consolidatedPriceArray.push(consolidatedPrice); // Add the consolidated price
    } else {
      consolidatedPriceArray.push(current); // Add the current price as is
    }
  }

  return consolidatedPriceArray;
};

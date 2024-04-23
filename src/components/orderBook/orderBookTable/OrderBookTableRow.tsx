import { HTMLAttributes, ReactNode, TdHTMLAttributes } from "react";
import { OrderBookTableVolumeCell } from "../OrderBookTableVolumeCell";

interface Props {
  price: string;
  buyVolume?: number;
  sellVolume?: number;
  maxVolume: number;
}

export function OrderBookTableRow({
  price,
  buyVolume,
  sellVolume,
  maxVolume,
}: Props) {
  const sellProportion = !!sellVolume ? sellVolume / maxVolume : 0;
  const buyProportion = !!buyVolume ? buyVolume / maxVolume : 0;

  return (
    <tr className="w-fit pt-2 pb-2 text-sm">
      <td className="border-neutral-100 border-b-solid border-b pt-1 pb-1 bg-">
        <OrderBookTableVolumeCell
          direction="left"
          value={buyVolume?.toString()}
          color="bg-emerald-100"
          proportion={buyProportion}
        />
      </td>
      <td className="text-center border-neutral-100 border-b-solid border-b pt-1 pb-1">
        {price}
      </td>
      <td className="border-neutral-100 border-b-solid border-b pt-1 pb-1">
        <OrderBookTableVolumeCell
          direction="right"
          value={sellVolume?.toString()}
          color="bg-rose-200"
          proportion={sellProportion}
        />
      </td>
    </tr>
  );
}

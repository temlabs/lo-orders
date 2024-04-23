import { OrderBookTableVolumeCell } from "../OrderBookTableVolumeCell";

interface Props {
  price:string;
  buyVolume?:number;
  sellVolume?:number;
}

export function OrderBookTableRow({price, buyVolume, sellVolume}:Props){

  const sellProportion = 0.5;
  const buyProportion = 0.5

    return (
        <tr className="w-fit ">
        <td className="border-neutral-200 border-solid border"><OrderBookTableVolumeCell direction="left" value={buyVolume?.toString()} color='bg-green-200' proportion={buyProportion}/></td>
        <td className="text-center border-neutral-200 border-solid border">{price}</td>
        <td className="border-neutral-200 border-solid border"><OrderBookTableVolumeCell direction="right" value={sellVolume?.toString()} color='bg-red-200' proportion={sellProportion}/></td>
      </tr>
    )
}


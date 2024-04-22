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
        <td><OrderBookTableVolumeCell direction="left" value={buyVolume?.toString()} color='bg-green-600' proportion={buyProportion}/></td>
        <td className="text-center">{price}</td>
        <td ><OrderBookTableVolumeCell direction="right" value={sellVolume?.toString()} color='bg-red-400' proportion={sellProportion}/></td>
      </tr>
    )
}


interface Props {
    proportion: number;
    direction: 'left' | 'right';
    color: string;
    value?: string;
}

export function OrderBookTableVolumeCell({ proportion, direction, color, value }: Props) {
    const widthPercent = `${proportion * 100}%`;

    return (
        <div className="relative ">
            <p className="w-full text-center relative z-50">{value}</p>
            <div className={`absolute ${direction === 'left' ? 'left-0' : 'right-0'} top-0 h-full w-full ${color} z-10`} style={{ width: widthPercent }} />
        </div>
    );
}

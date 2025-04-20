import { FC, ReactElement } from 'react'

type ChipProps = {
    index: number,
    children?: ReactElement | ReactElement[] | string
}

export const Chip: FC<ChipProps> = ({ index, children }) => {
    switch (index % 7) {
        case 0:
            return <span
                className="p-px inline-block rounded bg-linear-to-tl from-blue-500 to-violet-500">
                    <span className="block bg-(--bg-color) leading-none p-1.5 rounded text-center text-xs  text-white whitespace-nowrap">
                        {children}
                    </span>
                </span>
        case 1:
            return <span
                className="p-px inline-block rounded bg-linear-to-tl from-slate-600 to-slate-300">
                    <span className="block bg-(--bg-color) leading-none p-1.5 rounded text-center text-xs text-white whitespace-nowrap">
                        {children}
                    </span>
                </span>
        case 2:
            return <span
                className="p-px inline-block rounded bg-linear-to-tl from-blue-700 to-cyan-500">
                    <span className="block bg-(--bg-color) leading-none p-1.5 rounded text-center text-xs text-white whitespace-nowrap">
                        {children}
                     </span>
                </span>
        case 3:
            return <span
                className="p-px inline-block rounded bg-linear-to-tl from-red-600 to-orange-600">
                    <span className="block bg-(--bg-color) leading-none p-1.5 rounded text-center text-xs text-white whitespace-nowrap">
                        {children}
                    </span>
                </span>
        case 4:
            return <span
                className="p-px inline-block rounded bg-linear-to-tl from-green-500 to-teal-500">
                    <span className="block bg-(--bg-color) leading-none p-1.5 rounded text-center text-xs text-white whitespace-nowrap">
                        {children}
                    </span>
                </span>
        case 5:
            return <span
                className="p-px inline-block rounded bg-linear-to-tl from-gray-400 to-gray-100">
                    <span className="block bg-(--bg-color) leading-none p-1.5 rounded text-center text-xs text-white whitespace-nowrap">
                        {children}
                    </span>
                </span>
        case 6:
            return <span
                className="p-px inline-block rounded bg-linear-to-tl from-zinc-800 to-zinc-700">
                    <span className="block bg-(--bg-color) leading-none p-1.5 rounded text-center text-xs text-white whitespace-nowrap">
                        {children}
                    </span>
                </span>
        default:
            return <span
                className="p-px inline-block rounded bg-linear-to-tl from-green-500 to-teal-500">
                    <span className="block bg-(--bg-color) leading-none p-1.5 rounded text-center text-xs text-emerald-400 whitespace-nowrap">
                        {children}
                    </span>
                </span>
    }
}

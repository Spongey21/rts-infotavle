"use client"

import { unixInSeconds } from "@/app/handlers/calcTime"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function IndividualRoute({ id, delay, arrival, departure }) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        (async () => {
            await animate([
                [scope.current, { width: '500%' }, { duration: unixInSeconds(arrival) }],
                [scope.current, { backgroundColor: '#34b233' }, { delay: 1 }]
            ])

            //await scope.current.parentElement.parentElement.remove()
        })()
    }, [])

    return (
        <tr className="text-center border-2">
            <td className="h-[8vh]">
                <span className="fixed flex justify-center items-center h-1/5 w-[8%] text-4xl font-medium">{id}</span>
                <motion.div
                    className='-z-10 h-full w-0 bg-neutral-100'
                    ref={scope}
                />
            </td>
            <td className="h-[8vh] text-4xl font-medium">{delay}</td>
            <td className="h-[8vh] font-medium">
                <div className='flex flex-col'>
                    <span className='text-4xl'>{arrival}</span>
                    <span className='text-sm'>Pulsen 8, Roskilde</span>
                </div>
            </td>
            <td className="h-[8vh] text-4xl font-medium">
                <div className='flex flex-col'>
                    <span className='text-4xl'>{departure}</span>
                    <span className='text-sm'>Roskilde St</span>
                </div>
            </td>
        </tr>
    )
}
"use client"

import { unixInSeconds } from "@/app/handlers/calcTime"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function IndividualRoute({ id, arrTime, arrDest, depTime, depDest }) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        (async () => {
            await animate([
                [scope.current, { background: `linear-gradient(to right, rgb(245 245 245) 100%, white 100%)` }, { duration: unixInSeconds(arrTime) }],
                [scope.current, { background: '#34b233' }, { duration: 0.75 }],
                [scope.current, { border: 'none' }],
                [scope.current, { opacity: 0 }, { duration: 0.5 }]
            ])

            await scope.current.remove()
        })()
    }, [arrTime])

    return (
        <motion.article className="h-1/4 bg-neutral-100 text-gray-500 border-2 flex justify-around items-center" ref={scope}>
            <td className="text-4xl font-medium">{id}</td>
            <td className="font-medium">
                <div className="flex flex-col items-center justify-center">
                    <span className="text-4xl text-center">{arrTime}</span>
                    <span className="text-sm text-center">{arrDest}</span>
                </div>
            </td>
            <td className="font-medium">
                <div className="flex flex-col">
                    <span className="text-4xl text-center">{depTime}</span>
                    <span className="text-sm text-center">{depDest}</span>
                </div>
            </td>
        </motion.article>
    )
}
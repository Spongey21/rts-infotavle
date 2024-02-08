"use client"

import { unixInSeconds } from "@/app/handlers/calcTime"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function IndividualRoute({ id, delay, arrTime, arrDest, depTime, depDest }) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        (async () => {
            await animate([
                [scope.current, {background: `linear-gradient(to right, rgb(245 245 245) 100%, white 100%)`}, {duration: unixInSeconds(arrTime)}],
                [scope.current, {background: '#34b233'}, {duration: 0.75}],
                [scope.current, {border: 'none'}],
                [scope.current, {opacity: 0}, {duration: 0.5}]
            ])

            await scope.current.remove()
        })()
    }, [arrTime])

    return (
        <motion.tr className="text-center border-2 bg-neutral-100 h-[14vh]" ref={scope}>
            <td className="text-4xl font-medium">{id}</td>
            <td className="text-4xl font-medium">{delay}</td>
            <td className="font-medium">
                <div className="flex flex-col">
                    <span className="text-4xl">{arrTime}</span>
                    <span className="text-sm">{arrDest}</span>
                </div>
            </td>
            <td className="font-medium">
                <div className="flex flex-col">
                    <span className="text-4xl">{depTime}</span>
                    <span className="text-sm">{depDest}</span>
                </div>
            </td>
        </motion.tr>
    )
}
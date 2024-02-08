"use client"

import { unixInSeconds } from "@/app/handlers/calcTime"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function IndividualRoute({ id, arrTime, arrDest, depTime, depDest }) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        (async () => {
            await animate([
                [scope.current, { background: `linear-gradient(to right, #f5f5f5 100%, white 100%)` }, { duration: unixInSeconds(arrTime) }],
                [scope.current, { background: '#34b233' }, { duration: 0.75 }],
                [scope.current, { border: 'none' }],
                [scope.current, { height: 0 }, { duration: 0.5 }]
            ])

            await scope.current.remove()
        })()
    }, [arrTime])

    return (
        <motion.article className="h-1/4 bg-neutral-100 text-gray-500 border-2 flex items-center" ref={scope}>
            <h1 className="text-4xl font-medium text-center w-1/3">{id}</h1>
            <div className="flex flex-col items-center justify-center w-1/3">
                <span className="text-4xl text-center">{arrTime}</span>
                <span className="text-sm text-center">{arrDest}</span>
            </div>
            <div className="flex flex-col w-1/3">
                <span className="text-4xl text-center">{depTime}</span>
                <span className="text-sm text-center">{depDest}</span>
            </div>
        </motion.article>
    )
}
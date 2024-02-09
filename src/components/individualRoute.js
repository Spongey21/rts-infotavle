"use client"

import { unixInSeconds } from "@/app/handlers/calcTime"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function IndividualRoute({ id, arrTime, arrDest, depTime, depDest }) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        (async () => {
            await animate([
                [scope.current, { background: `linear-gradient(to right, rgb(245,245,245) 100%, white 100%)` }, { duration: unixInSeconds(arrTime) }],
                [scope.current, { background: '#34b233' }, { duration: 0.5 }],
                [scope.current.parentElement, { border: 'none' }],
                [scope.current.parentElement, { height: 0 }, { duration: 0.5 }]
            ])

            await scope.current.remove()
        })()
    }, [arrTime])

    return (
        <motion.article className="flex items-center justify-center w-full h-full" ref={scope}>
            <h1 className="text-4xl text-center w-1/3">{id}</h1>
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
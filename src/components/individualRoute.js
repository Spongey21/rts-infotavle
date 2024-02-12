"use client"

import { unixInSeconds } from "@/app/handlers/calcTime"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function IndividualRoute({ id, arrTime, arrDest, depTime, depDest }) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        (async () => {
            // progress slider from left to right
            await animate(0, 102, {
                duration: 5,
                onUpdate: length => {
                    // updates progress slider
                    scope.current.style.background = `linear-gradient(to right, rgb(51,65,85) ${length / 1.02}%, rgb(0,0,0) ${length}%, black ${length}%)`
                },
                onComplete: async () => {
                    scope.current.parentElement.style.border = 'none'

                    Array.from(scope.current.children).map(child => child.remove())

                    // collapses route with animation
                    await animate(parseInt(scope.current.parentElement.offsetHeight), 0, {
                        duration: 0.5,
                        onUpdate: height => {
                            scope.current.parentElement.style.height = height + 'px'
                        },
                        onComplete: async () => {
                            await scope.current.remove()
                        }
                    })
                }
            })
        })()
    }, [arrTime])

    return (
        <motion.article className="flex items-center justify-center w-full h-full text-gray-300 border-2" ref={scope}>
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
"use client"

import { unixInSeconds } from "@/app/handlers/calcTime"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function IndividualRoute({ id, arrTime, arrDest }) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        (async () => {
            // progress slider from left to right
            await animate(0, 100, {
                duration: unixInSeconds(arrTime),
                onUpdate: length => {
                    // updates progress slider rgb(252,163,17)
                    scope.current.style.background = `linear-gradient(to right, rgba(252,163,17,0.7) ${length}%, rgba(252,163,17,0.5) ${length}%)`
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
        <motion.article className="flex items-center justify-center w-full h-full text-black border-b-2 border-blue-950" ref={scope}>
            <h1 className="text-3xl text-center w-1/4">{id}</h1>
                <span className="text-3xl text-center w-1/3">{arrTime}</span>
                <span className="text-3xl text-center w-1/3">{arrDest.split(',')[0]}</span>
        </motion.article>
    )
}
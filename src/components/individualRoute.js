"use client"

import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function IndividualRoute({ id, delay, arrival, departure }) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        (async () => {
            await animate([
                [scope.current, { width: '27%' }, { duration: 2 }],
                [scope.current, { width: '33%' }, { duration: 2, delay: 2 }],
                [scope.current, { backgroundColor: '#34b233' }]
            ])

            await scope.current.parentElement.parentElement.remove()
        })()
    }, [])

    return (
        <tr className="text-center border-2">
            <td className="justify-center w-1/5 h-[8vh] font-medium">
                <motion.div
                    className='absolute -z-10 top-[8%] h-[21%] bg-neutral-100 resize-x'
                    ref={scope}
                />
                <span className="w-1/5 h-[8vh] text-4xl font-medium">{id}</span>
            </td>
            <td className="w-1/5 h-[8vh] text-4xl font-medium">{delay}</td>
            <td className="w-3/10 h-[8vh] font-medium">
                <div className='flex flex-col'>
                    <span className='text-4xl'>9:28</span>
                    <span className='text-sm'>Pulsen 8, Roskilde</span>
                </div>
            </td>
            <td className="w-3/10 h-[8vh] text-4xl font-medium">
                <div className='flex flex-col'>
                    <span className='text-4xl'>9:45</span>
                    <span className='text-sm'>Roskilde St</span>
                </div>
            </td>
        </tr>
    )
}
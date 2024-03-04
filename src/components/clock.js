"use client"

import { useEffect, useState } from "react"

export default function Clock() {
    const [time, setTime] = useState(null)

    useEffect(() => {
        (async () => {
            setInterval(() => {
                let hours = new Date().getHours()                
                let minutes = new Date().getMinutes()                
                let seconds = new Date().getSeconds()

                if (seconds < 10) {
                    seconds = `0${seconds}`
                }

                if (minutes < 10) {
                    minutes = `0${minutes}`
                }

                if (hours < 10) {
                    hours = `0${hours}`
                }
                
                setTime([hours, minutes, seconds])
            }, 1000);
        })()
    }, [])

    return (
        <div className="flex items-center text-white text-4xl mt-auto pb-5">
            <div className="bg-blue-950 w-[70px] h-[60px] flex items-center justify-center rounded shadow-xl">{time && time[0]}</div>
            <span className="w-[10px] text-black text-center">:</span>
            <div className="bg-blue-950 w-[70px] h-[60px] flex items-center justify-center rounded shadow-xl">{time && time[1]}</div>
            <span className="w-[10px] text-black text-center">:</span>
            <div className="bg-blue-950 w-[70px] h-[60px] flex items-center justify-center rounded shadow-xl">{time && time[2]}</div>
        </div>
    )
}
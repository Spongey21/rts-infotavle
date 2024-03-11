"use client"

import { useEffect, useState } from "react"
import IndividualRoute from "./individualRoute"
import getData from "@/app/handlers/fetch"
import { unixInSeconds } from "@/app/handlers/calcTime"

export default function Transport() {
    const [transport, setTransport] = useState([])

    useEffect(() => {
        getData(setTransport)
    }, [])

    return (
        <ul className="w-full h-1/2 overflow-hidden">
            <li className="flex flex-col gap-1 h-[40%]">
                <section className="flex items-center w-full h-1/2">
                    <img src="https://images.vexels.com/media/users/3/128933/isolated/preview/b54944f7322722034cfda55e601b4f8d-travel-bus-round-icon.png" height={80} width={80}></img>
                    <div className="flex flex-col">
                        <h2 className="text-4xl text-blue-950 font-bold">Bus Afgange</h2>
                        <h2 className="text-lg font-bold">Teknisk Skole, HTX (Maglelunden)</h2>
                    </div>
                </section>
                <section className="flex justify-center items-center h-1/2 w-full bg-blue-950 text-white border-l-2 border-r-2 border-black">
                    <h2 className="text-3xl text-center uppercase w-1/4">#</h2>
                    <h2 className="text-3xl text-center uppercase w-1/3">afgang</h2>
                    <h2 className="text-3xl text-center uppercase w-1/3">destination</h2>
                </section>
            </li>
            {transport.map((route, i) => {
                if (unixInSeconds(route.time) <= 5) return

                return <li key={i + route.id} className="h-[20%] border-l-2 border-r-2 border-black">
                    <IndividualRoute
                        id={route && route.line}
                        arrTime={route && route.time}
                        arrDest={route && route.direction}/>
                </li>
            })}
        </ul>
    )
}
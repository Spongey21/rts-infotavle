"use client"

import { useEffect, useState } from "react";
import IndividualRoute from "./individualRoute";
import { unixInSeconds } from "@/app/handlers/calcTime";

export default function Transport() {
    const [transport, setTransport] = useState([])

    useEffect(() => {
        (async () => {
            // fetches location id
            const res = await fetch(`//xmlopen.rejseplanen.dk/bin/rest.exe/location?input=Musicon (Maglelunden)&format=json`)
            const data = await res.json()

            // fetches route information
            const departureFetch = await fetch(`//xmlopen.rejseplanen.dk/bin/rest.exe/departureBoard?id=${data.LocationList.StopLocation[0].id}&format=json`);
            const departureData = await departureFetch.json()

            setTransport(departureData.DepartureBoard.Departure.filter(bus => {
                if (bus.name == 'Bus 202A') { return { bus } }
            }))
        })()
    }, [])

    return (
        <ul className="w-full h-1/2">
            <li className="h-1/4 bg-[#bfb6a7] text-black border-2`">
                <section className="flex items-center w-full h-full">
                    <span className="text-3xl text-center font-medium uppercase w-1/3">#</span>
                    <span className="text-3xl text-center font-medium uppercase w-1/3">afgang</span>
                    <span className="text-3xl text-center font-medium uppercase w-1/3">ankomst</span>
                </section>
            </li>
            {transport.map((route, i) => {
                if (i > 2 && unixInSeconds(route.time) > 0) return

                return <li key={i + route.id} className="h-1/4 border-2">
                    <IndividualRoute
                        id={route && route.line}
                        arrTime={route && route.time}
                        arrDest={route && route.direction}
                        depTime={route && route.time.replace(route.time.split(':')[1], parseInt(route.time.split(':')[1]) + 10)}
                        depDest={route && route.stop.includes('.') ? route.stop.split('.')[0] : route.stop.split('(')[0]} />
                </li>
            })}
        </ul>
    )
}

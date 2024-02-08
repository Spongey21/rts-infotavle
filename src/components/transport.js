"use client"

import { useEffect, useState } from "react";
import IndividualRoute from "./individualRoute";

export default function Transport() {
    const [transport, setTransport] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`//xmlopen.rejseplanen.dk/bin/rest.exe/location?input=Roskilde St&format=json`)
            const data = await res.json()

            const departureFetch = await fetch(`//xmlopen.rejseplanen.dk/bin/rest.exe/departureBoard?id=${data.LocationList.StopLocation[0].id}&format=json`);
            const departureData = await departureFetch.json()

            setTransport(departureData.DepartureBoard.Departure.filter(bus => {
                if (bus.name == 'Bus 202A') { return { bus } }
            }))
        })()
    }, [])

    return (
        <article className="w-full h-1/2">
            <ul className="h-1/4 bg-neutral-100 text-gray-500 border-2 flex items-center">
                <li className="text-3xl text-center font-medium uppercase w-1/3">#</li>
                <li className="text-3xl text-center font-medium uppercase w-1/3">afgang</li>
                <li className="text-3xl text-center font-medium uppercase w-1/3">ankomst</li>
            </ul>
            {transport.map((route, i) => {
                if (i > 2) return

                return <IndividualRoute
                    key={i + route.id}
                    id={route && route.line}
                    arrTime={route && route.time}
                    arrDest={route && route.direction}
                    depTime={route && route.time.replace(route.time.split(':')[1], parseInt(route.time.split(':')[1]) + 10)}
                    depDest={route && route.stop.split('.')[0]} />
            })}
        </article>
    )
}

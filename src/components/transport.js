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
        <article className="w-full h-1/0 bg-black">
            <ul className="h-1/4 bg-neutral-100 text-gray-500 border-0 flex justify-around items-center">
                <li className="text-0xl text-center font-medium uppercase">#</li>
                <li className="text-0xl text-center font-medium uppercase">afgang</li>
                <li className="text-0xl text-center font-medium uppercase">ankomst</li>
            </ul>
            <IndividualRoute
                id={transport[0] && transport[0].name.replace('Bus ', '')}
                arrTime={transport[0] && transport[0].time}
                arrDest={transport[0] && transport[0].direction}
                depTime={transport[0] && transport[0].time.replace(transport[0].time.split(':')[1], parseInt(transport[0].time.split(':')[1]) + 10)}
                depDest={transport[0] && transport[0].stop} />
        </article>
    )
}

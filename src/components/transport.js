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
            <li className="flex flex-col justify-end h-1/3 border-white">
                <section className="flex items-center w-full">
                    <img src="https://images.vexels.com/media/users/3/128933/isolated/preview/b54944f7322722034cfda55e601b4f8d-travel-bus-round-icon.png" height={80} width={80}></img>
                    <div className="flex flex-col">
                        <h2 className="text-4xl text-blue-950 font-bold">Bus Afgange</h2>
                        <h2 className="text-lg font-bold">Teknisk Skole, HTX (Maglelunden)</h2>
                    </div>s
                </section>
                <section className="flex items-center w-full h-full bg-blue-950 text-white">
                    <h2 className="text-3xl text-center font-bold uppercase w-1/3">#</h2>
                    <h2 className="text-3xl text-center font-bold uppercase w-1/3">afgang</h2>
                    <h2 className="text-3xl text-center font-bold uppercase w-1/3">destination</h2>
                </section>
            </li>
            {transport.map((route, i) => {
                if (i > 2 && unixInSeconds(route.time) > 0) return

                return <li key={i + route.id} className="h-1/4">
                    <IndividualRoute
                        id={route && route.line}
                        arrTime={route && route.time}
                        arrDest={route && route.direction}/>
                </li>
            })}
        </ul>
    )
}
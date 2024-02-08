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
        <table className="w-full">
            <thead>
                <tr className="bg-neutral-100 text-gray-500 uppercase h-[8vh] border-2">
                    <th className="text-2xl text-center font-medium">#</th>
                    <th className="text-2xl text-center font-medium">forsinkelse</th>
                    <th className="text-2xl text-center font-medium">afgang</th>
                    <th className="text-2xl text-center font-medium">ankomst</th>
                </tr>
            </thead>
            <tbody>
                <IndividualRoute
                    id={transport[0] && transport[0].name.replace('Bus ', '')}
                    delay='0'
                    arrTime={transport[2] && transport[2].time}
                    arrDest={transport[0] && transport[0].direction}
                    depTime={transport[2] && transport[2].time.replace(transport[2].time.split(':')[1], parseInt(transport[2].time.split(':')[1]) + 10)}
                    depDest={transport[0] && transport[0].stop} />
            </tbody>
        </table>
    );
}

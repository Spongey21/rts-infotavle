"use client"

import { useEffect, useState } from "react"

export default function ClassSchedule({ course }) {
    const identification = [
        {
            abbreviation: "gf1",
            name: "grundforløb 1",
            id: "0329",
            courses: [0],
            color: "#98A886"
        },
        {
            abbreviation: "wu",
            name: "web udvikling",
            id: "1465",
            courses: [0, 1],
            color: "#a0d6b4"
        },
        {
            abbreviation: "mg",
            name: "media graikker",
            id: "1525",
            courses: [0, 1],
            color: "#89cff0"
        },
        {
            abbreviation: "dm",
            name: "digital media",
            id: "1515",
            courses: [0, 1],
            color: "#B2A4D4"
        },
        {
            abbreviation: "td",
            name: "teknisk design",
            id: "1890",
            courses: [0, 1],
            color: "#89cff0"
        },
        {
            abbreviation: "soc",
            name: "skole oplærings center",
            id: "0",
            courses: ["s"],
            color: "#601A35"
        },
        {
            abbreviation: "brobyg",
            name: "brobygning",
            id: "2560",
            courses: ["c"],
            color: "#F7BEA2"
        },
        {
            abbreviation: "intro",
            name: "introduktion",
            id: "2575",
            courses: ["c"],
            color: "#FBCEB1"
        },
        {
            abbreviation: "amu",
            name: "amu",
            id: "2411",
            courses: [8],
            color: "#fc8eac"
        },
    ]

    // find key for course data
    const key = identification.filter(obj => obj.abbreviation == course)[0]

    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch('https://studieplus-api.onrender.com/schedule', {
                headers: {
                    "Authorization": "1234"
                }
            })
            const data = await res.json()

            // finds course data
            const filteredData = await data.filter(el => el.class.includes(key.id))

            setSchedule(filteredData);
        })()
    }, [])

    // guard clause
    if (schedule.length == 0) return

    return (
        <li className="basis-full h-full border-r-2 border-[#36393b]">
            <section className="flex flex-col items-center text-center h-full" style={{backgroundColor: key.color + '66'}}>
                <div className="flex flex-col justify-center text-white bg-[#36393B] w-full h-1/6">
                    <span className="text-3xl font-bold uppercase">{key.abbreviation}</span>
                    <span className="text-1xl font-bold capitalize">{key.name}</span>
                </div>
                {schedule.map((filteredSchedule, index) => <div key={index} className="flex flex-col justify-center border-[#36393B] w-full h-1/6" style={{backgroundColor: key.color}}>
                    <span className="text-3xl font-bold uppercase">{key.abbreviation}</span>
                    <span className="text-xl font-bold">{filteredSchedule.classroom}</span>
                    <span className="text-xl font-bold uppercase italic">{filteredSchedule.teacher}</span>
                </div>)}
            </section>
        </li>
    )
}
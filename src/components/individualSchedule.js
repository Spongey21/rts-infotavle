"use client"

import { useEffect, useState } from "react"

export default function IndividualSchedule({ course }) {
    function identifyCourse(year) {
        if (course == 'gf1') return course

        switch (year.toString()) {
            case '0':
                return 'gf2'
            case '1':
                return 'hf1'
            case '2':
                return 'hf2'
            case '3':
                return 'hf3'
            case '4':
                return 'hf4'
            case '5':
                return 'hf5'
            case '6':
                return 'hf6'
            default:
                return course
        }
    }

    const identification = [
        {
            abbreviation: "gf1",
            name: "grundforløb 1",
            id: "0329",
            color: "#f5edd6"
        },
        {
            abbreviation: "wu",
            name: "web udvikling",
            id: "1465",
            color: "#a0d6b4"
        },
        {
            abbreviation: "mg",
            name: "media graikker",
            id: "1525",
            color: "#89cff0"
        },
        {
            abbreviation: "dm",
            name: "digital media",
            id: "1515",
            color: "#B2A4D4"
        },
        {
            abbreviation: "td",
            name: "teknisk design",
            id: "1890",
            color: "#dbf1ff"
        },
        {
            abbreviation: "soc",
            name: "oplærings center",
            id: "s",
            color: "#dfdfdf"
        },
        {
            abbreviation: "brobyg",
            name: "brobygning",
            id: "2560",
            color: "#F7BEA2"
        },
        {
            abbreviation: "intro",
            name: "introduktion",
            id: "2575",
            color: "#c3856b"
        },
        {
            abbreviation: "amu",
            name: "amu",
            id: "2411",
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
            let filteredData = await data.filter(obj => obj.class.includes(key.id))

            if (course == 'gf1', course == 'soc' || course == 'brobyg' || course == 'intro' || course == 'amu') {
                filteredData = filteredData.filter((obj, index) => filteredData.findIndex((item) => item.classroom === obj.classroom) === index)
            }

            // puts gf2 higher in array
            filteredData.sort((a, b) => a.class.substring(0, 1) - b.class.substring(0, 1));

            setSchedule(filteredData);
        })()
    }, [])

    // guard clause
    if (schedule.length == 0) return
    return (
        <li className="basis-full h-full">
            <section className="flex flex-col items-center text-center h-full" style={{ backgroundColor: key.color + '66' }}>
                <div className="flex flex-col justify-center text-white bg-blue-950 w-full h-1/6">
                    <span className="text-3xl font-bold uppercase">{key.abbreviation}</span>
                    <span className="text-1xl font-bold capitalize">{key.name}</span>
                </div>
                {schedule.map((filteredSchedule, index) => <div key={index} className="flex flex-col justify-center border-[#36393B] w-full h-1/6" style={{ backgroundColor: key.color }}>
                    <span className="text-xl font-bold uppercase">{identifyCourse(filteredSchedule.class.substring(0, 1))}</span>
                    <span className="text-xl">{filteredSchedule.classroom}</span>
                    <span className="text-xl uppercase italic">{filteredSchedule.teacher}</span>
                </div>)}
            </section>
        </li>
    )
}
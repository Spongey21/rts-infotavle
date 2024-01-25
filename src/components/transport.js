"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'

export default function Transport() {
    return (
        <table className="w-full h-1/2 border-2 border-black bg-gray-200">
            <thead>
                <tr className="bg-[#0C0C0C] text-gray-200">
                    <th className="w-[20%] h-[8vh] text-2xl text-center font-semibold [font-size:_clamp(1em,2vw,3em)]">Type</th>
                    <th className="w-[30%] h-[8vh] text-2xl text-center font-semibold [font-size:_clamp(1em,2vw,3em)]">Ankomst</th>
                    <th className="w-[30%] h-[8vh] text-2xl text-center font-semibold [font-size:_clamp(1em,2vw,3em)]">Slut</th>
                    <th className="w-[20%] h-[8vh] text-2xl text-center font-semibold [font-size:_clamp(1em,2vw,3em)]">Forsinkelse</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-2 border-black">
                    <td className="w-[20%] h-[8vh] text-5xl text-center [font-size:_clamp(1em,3vw,4em)] font-bold"><FontAwesomeIcon icon={faBus}></FontAwesomeIcon></td>
                    <td className="w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,4em)] font-bold">9:30</td>
                    <td className="w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,4em)] font-bold">9:45</td>
                    <td className="w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,4em)] font-bold">+5</td>
                </tr>
                <tr className="border-2 border-black">
                    <td className="w-[20%] h-[8vh] text-5xl text-center [font-size:_clamp(1em,3vw,4em)] font-bold"><FontAwesomeIcon icon={faBus}></FontAwesomeIcon></td>
                    <td className="w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,4em)] font-bold">9:30</td>
                    <td className="w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,4em)] font-bold">9:45</td>
                    <td className="w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,4em)] font-bold">+5</td>
                </tr>
                <tr className="border-2 border-black">
                    <td className="w-[20%] h-[8vh] text-5xl text-center [font-size:_clamp(1em,3vw,4em)] font-bold"><FontAwesomeIcon icon={faBus}></FontAwesomeIcon></td>
                    <td className="w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,4em)] font-bold">9:30</td>
                    <td className="w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,4em)] font-bold">9:45</td>
                    <td className="w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,4em)] font-bold">+5</td>
                </tr>
            </tbody>
        </table>
    )
}
"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'

export default function Transport() {
    return (
        <table className="w-full h-1/2">
            <thead>
                <tr className="h-[50px]">
                    <th className="border-2 border-black w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,2vw,7em)]">Type</th>
                    <th className="border-2 border-black w-[30%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,2vw,7em)]">Ankomst</th>
                    <th className="border-2 border-black w-[30%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,2vw,7em)]">Slut</th>
                    <th className="border-2 border-black w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,2vw,7em)]">Forsinkelse</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border-2 border-black w-[20%] h-[8vh] text-5xl text-center [font-size:_clamp(1em,3vw,7em)]"><FontAwesomeIcon icon={faBus}></FontAwesomeIcon></td>
                    <td className="border-2 border-black w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,7em)]">9:30</td>
                    <td className="border-2 border-black w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,7em)]">9:45</td>
                    <td className="border-2 border-black w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,7em)]">+5</td>
                </tr>
                <tr>
                    <td className="border-2 border-black w-[20%] h-[8vh] text-5xl text-center [font-size:_clamp(1em,3vw,7em)]"><FontAwesomeIcon icon={faBus}></FontAwesomeIcon></td>
                    <td className="border-2 border-black w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,7em)]">9:30</td>
                    <td className="border-2 border-black w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,7em)]">9:45</td>
                    <td className="border-2 border-black w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,7em)]">+5</td>
                </tr>
                <tr>
                    <td className="border-2 border-black w-[20%] h-[8vh] text-5xl text-center [font-size:_clamp(1em,3vw,7em)]"><FontAwesomeIcon icon={faBus}></FontAwesomeIcon></td>
                    <td className="border-2 border-black w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,7em)]">9:30</td>
                    <td className="border-2 border-black w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,7em)]">9:45</td>
                    <td className="border-2 border-black w-[20%] h-[8vh] text-2xl text-center [font-size:_clamp(1em,3vw,7em)]">+5</td>
                </tr>
            </tbody>
        </table>
    )
}
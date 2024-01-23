"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'

export default function Transport() {
    return (
        <table className="w-full h-1/2">
            <thead>
                <tr className="h-[50px]">
                    <th className="h-[50px] border-2 border-black w-[20%] text-2xl text-center">Type</th>
                    <th className="border-2 border-black w-[30%] text-2xl text-center">Ankomst</th>
                    <th className="border-2 border-black w-[30%] text-2xl text-center">Slut</th>
                    <th className="border-2 border-black w-[20%] text-2xl text-center">Forsinkelse</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border-2 border-black w-[20%] text-5xl text-center"><FontAwesomeIcon icon={faBus}></FontAwesomeIcon></td>
                    <td className="border-2 border-black w-[20%] text-2xl text-center">9:30</td>
                    <td className="border-2 border-black w-[20%] text-2xl text-center">9:45</td>
                    <td className="border-2 border-black w-[20%] text-2xl text-center">+5</td>
                </tr>
                <tr>
                    <td className="border-2 border-black w-[20%] text-5xl text-center"><FontAwesomeIcon icon={faBus}></FontAwesomeIcon></td>
                    <td className="border-2 border-black w-[20%] text-2xl text-center">9:30</td>
                    <td className="border-2 border-black w-[20%] text-2xl text-center">9:45</td>
                    <td className="border-2 border-black w-[20%] text-2xl text-center">+5</td>
                </tr>
                <tr>
                    <td className="border-2 border-black w-[20%] text-5xl text-center"><FontAwesomeIcon icon={faBus}></FontAwesomeIcon></td>
                    <td className="border-2 border-black w-[20%] text-2xl text-center">9:30</td>
                    <td className="border-2 border-black w-[20%] text-2xl text-center">9:45</td>
                    <td className="border-2 border-black w-[20%] text-2xl text-center">+5</td>
                </tr>
            </tbody>
        </table>
    )
}
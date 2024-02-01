"use client"

import IndividualRoute from "./individualRoute";

export default function Transport() {
    return (
        <table className="w-full h-1/2 border-2 uppercase overflow-hidden">
            <thead>
                <tr className="bg-neutral-100 text-gray-500 rounded-lg">
                    <th className="w-1/5 h-[8vh] text-2xl text-center  font-medium">#</th>
                    <th className="w-1/5 h-[8vh] text-2xl text-center font-medium">Forsinkelse</th>
                    <th className="w-3/10 h-[8vh] text-2xl text-center font-medium">Ankomst</th>
                    <th className="w-3/10 h-[8vh] text-2xl text-center font-medium">Slut</th>
                </tr>
            </thead>
            <tbody>
                <IndividualRoute id='201A' delay='0' arrival='12:10' departure='9:50' />
                <IndividualRoute id='201A' delay='0' arrival='12:10' departure='9:50' />
            </tbody>
        </table>
    );
}

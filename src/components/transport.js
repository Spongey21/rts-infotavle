"use client"

import IndividualRoute from "./individualRoute";

export default function Transport() {
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
                <IndividualRoute id='201A' delay='0' arrival='13:59' departure='9:50' />
                <IndividualRoute id='201A' delay='0' arrival='14:01' departure='9:50' />
                <IndividualRoute id='201A' delay='0' arrival='14:22' departure='9:50' />
            </tbody>
        </table>
    );
}

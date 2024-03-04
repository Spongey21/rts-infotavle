"use client"

import IndividualSchedule from "./individualSchedule"

export default function Transport() {
    return (
        <article className="w-[58%] h-full">
            <ul className="flex w-full h-full capitalize">
                <IndividualSchedule course="gf1" />
                <IndividualSchedule course="wu" />
                <IndividualSchedule course="mg" />
                <IndividualSchedule course="dm" />
                <IndividualSchedule course="td" />
                {/* <IndividualSchedule course="soc" /> */}
                <IndividualSchedule course="brobyg" />
                <IndividualSchedule course="intro" />
                <IndividualSchedule course="amu" />
            </ul>
        </article>
    )
}
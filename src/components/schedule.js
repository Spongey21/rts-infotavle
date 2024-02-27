"use client"

import ClassSchedule from "./classSchedule"

export default function Transport() {
    return (
        <article className="w-3/5 h-full">
            <ul className="flex w-full h-full capitalize">
                <ClassSchedule course="gf1" />
                <ClassSchedule course="wu" />
                <ClassSchedule course="mg" />
                <ClassSchedule course="dm" />
                <ClassSchedule course="td" />
                {/* <ClassSchedule course="soc" /> */}
                <ClassSchedule course="brobyg" />
                <ClassSchedule course="intro" />
                <ClassSchedule course="amu" />
            </ul>
        </article>
    )
}
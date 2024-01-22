"use client"

import { useEffect, useState } from 'react'

export default function Weather(lat, lon) {
    const [location, setLocation] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const apiKey = '9c084fb2105a8455487eb0840db99b00'
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`)
            const data = await res.json()

            console.log(data);

            setLocation(data)
        });
    }, [])

    return (
        <article className="flex justify-between items-center border-2 border-black h-1/2">
            <div className="flex flex-col justify-center w-3/4 font-[Verdana] pl-[10%] z-10">
                <h1 className="text-5xl capitalize">{!location.name ? 'Loading..' : location.name}</h1>
                <span className="text-3xl mt-[2rem] mb-[2rem]">{!location.main ? '?' : Math.round(location.main.temp - 274.15)}°</span>
                <span className="text-2xl capitalize">luftfugtighed: {!location.main ? '?' : location.main.humidity}%</span>
                <span className="text-2xl capitalize">vind: {!location.wind ? '?' : location.wind.speed} m/s</span>
                <span className="text-2xl mt-[2rem] capitalize">{!location.weather ? '...' : location.weather[0].description}</span>
            </div>
            <img className="absolute right-0" width={300} height={300} src={!location.weather 
                ? 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg' 
                : `/${location.weather[0].main}.gif`} alt="weather icon" />
        </article>
    );
}

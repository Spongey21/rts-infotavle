import Image from "next/image";
import { useEffect, useState } from "react";

export default function Weather() {
    const [location, setLocation] = useState({})

    function weatherBackground(type) {
        return '/' + type.toLowerCase() + '.gif'
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const apikey = '9c084fb2105a8455487eb0840db99b00'
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&lang=da&units=metric&appid=${apikey}`);
            const data = await res.json()
            console.log(data)
            setLocation(data)
        });
    }, [])

    return (
        <article className="h-1/2 border-black bg-gradient-to-r rounded-full text-gray-50 from-gray-950 to-blue-950 -z-20">
            <div className="flex flex-col justify-center gap-5 items-center m-auto w-1/4 h-full text-center">
                <h1 className="text-3xl font-bold capitalize">{location.name}</h1>
                <h2 className="text-8xl text-center font-bold h-[50%] w-full flex justify-center items-center -z-10">{location.main && Math.round(location.main.temp)}°</h2>
                {location.weather && <Image className="fixed right-[12%] opacity-80 bottom-[27%]" src={`${weatherBackground(location.weather[0].main)}`} alt="weather background" height={220} width={220}/>}
                <div className="flex justify-center w-full text-5xl font-semibold">
                    <span>{location.main && Math.round(location.main.temp_min)}°</span>
                    <span className="px-2">/</span>
                    <span>{location.main && Math.round(location.main.temp_max)}°</span>
                </div>
            </div>
        </article>
    )
}
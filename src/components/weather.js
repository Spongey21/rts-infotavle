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

            setLocation(data)
        });
    }, [])

    return (
        <article className="h-1/2 bg-gradient-to-t text-white from-sky-300 via-blue-600 to-blue-950 -z-20 rounded-full shadow-2xl">
            <div className="flex flex-col justify-center gap-5 items-center m-auto w-1/4 h-full text-center">
                <h2 className="text-3xl font-bold capitalize">{location.name}</h2>
                <h1 className="text-8xl text-center font-bold -z-10">{location.main && Math.round(location.main.temp)}°</h1>
                {location.weather && <Image className="fixed right-[12%] bottom-[18%]" src={`${weatherBackground(location.weather[0].main)}`} alt="weather background" height={150} width={150}/>}
                <div className="flex justify-between w-full text-lg italic capitalize">
                    <span>min: {location.main && Math.round(location.main.temp_min)}°</span>
                    <span>max: {location.main && Math.round(location.main.temp_max)}°</span>
                </div>
            </div>
        </article>
    )
}
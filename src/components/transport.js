import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function Transport() {
    const [trip, setTrip] = useState({})

    useEffect(() => {
        (async () => {
            const baseUrl = 'https://www.rejseplanen.dk/webapp/index.html'

            const res = await fetch(baseUrl + '/roskilde?language=da_DA', {
                headers: {
                    'accepts': 'application/json'
                }
            })
            const data = await res.json()

            console.log(data);
        })()

    }, [])

    return (
        <table className="w-full h-1/2 border-2  uppercase  bg-white">
            <thead>
                <tr className="bg-neutral-100 text-gray-500  rounded-lg">
                    <th className="w-1/5 h-[8vh] text-2xl text-center  font-medium">#</th>
                    <th className="w-3/10 h-[8vh] text-2xl text-center font-medium">Ankomst</th>
                    <th className="w-3/10 h-[8vh] text-2xl text-center font-medium">Slut</th>
                    <th className="w-1/5 h-[8vh] text-2xl text-center font-medium">Forsinkelse</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center border-2 ">
                    <td className="justify-center w-1/5 h-[8vh] text-4xl  font-medium">201A</td>
                    <td className="w-3/10 h-[8vh] font-medium">
                        <div className='flex flex-col'>
                            <span className='text-4xl'>9:28</span>
                            <span className='text-sm'>Pulsen 8, Roskilde</span>
                        </div>
                    </td>
                    <td className="w-3/10 h-[8vh] text-4xl font-medium">
                        <div className='flex flex-col'>
                            <span className='text-4xl'>9:45</span>
                            <span className='text-sm'>Roskilde St</span>
                        </div>
                    </td>
                    <td className="w-1/5 h-[8vh] text-4xl font-medium text-green-500">0</td>
                </tr>
                <tr className="text-center border-2">
                    <td className="w-1/5 h-[8vh] text-4xl font-medium">201A</td>
                    <td className="w-3/10 h-[8vh] font-medium">
                        <div className='flex flex-col'>
                            <span className='text-4xl'>9:28</span>
                            <span className='text-sm'>Pulsen 8, Roskilde</span>
                        </div>
                    </td>
                    <td className="w-3/10 h-[8vh] text-4xl font-medium">
                        <div className='flex flex-col'>
                            <span className='text-4xl'>9:45</span>
                            <span className='text-sm'>Roskilde St</span>
                        </div>
                    </td>
                    <td className="w-1/5 h-[8vh] text-4xl font-medium text-red-500">+10</td>
                </tr>
                <tr className="text-center border-2 ">
                    <td className="w-1/5 h-[8vh] text-4xl font-medium">201A</td>
                    <td className="w-3/10 h-[8vh] font-medium">
                        <div className='flex flex-col'>
                            <span className='text-4xl'>9:28</span>
                            <span className='text-sm'>Pulsen 8, Roskilde</span>
                        </div>
                    </td>
                    <td className="w-3/10 h-[8vh] text-4xl font-medium">
                        <div className='flex flex-col'>
                            <span className='text-4xl'>9:45</span>
                            <span className='text-sm'>Roskilde St</span>
                        </div>
                    </td>
                    <td className="w-1/5 h-[8vh] text-4xl font-medium text-red-500">+5</td>
                </tr>
            </tbody>
        </table>
    );
}

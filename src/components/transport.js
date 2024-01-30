import { useAnimate, motion, animate } from "framer-motion"
import { useEffect } from "react";

export default function Transport() {
    const [scope, animation] = useAnimate()

    function sequence() {
        animation([
            [scope.current, { x: '200%' }, {duration: 2}],
            [scope.current, { x: '300%' }, {duration: 2}],
        ])
    }

    return (
        <table className="w-full h-1/2 border-2  uppercase overflow-hidden">
            <thead>
                <tr className="bg-neutral-100 text-gray-500  rounded-lg">
                    <th className="w-1/5 h-[8vh] text-2xl text-center  font-medium">#</th>
                    <th className="w-1/5 h-[8vh] text-2xl text-center font-medium">Forsinkelse</th>
                    <th className="w-3/10 h-[8vh] text-2xl text-center font-medium">Ankomst</th>
                    <th className="w-3/10 h-[8vh] text-2xl text-center font-medium">Slut</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center border-2">
                    <td className="justify-center w-1/5 h-[8vh] font-medium">
                        <motion.img
                            className='absolute -z-10 top-[5%] right-[40%]  w-[200px]'
                            src="https://i.pinimg.com/originals/ff/fa/38/fffa389e89cfa5cc0764d605fda0d254.gif"
                            alt="bus"
                            ref={scope}
                            animate={sequence}
                        />
                        <motion.div 
                            className="w-[100px] h-[100px] top-20 right-[45%] -z-10 bg-slate-600 absolute"
                            ref={scope}
                            animate={sequence}
                        />
                        <span className="w-1/5 h-[8vh] text-4xl font-medium">201A</span>
                    </td>
                    <td className="w-1/5 h-[8vh] text-4xl font-medium text-red-600">-5</td>
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
                </tr>
                <tr className="text-center border-2">
                    <td className="justify-center w-1/5 h-[8vh] font-medium">
                        <span className="w-1/5 h-[8vh] text-4xl font-medium">201A</span>
                    </td>
                    <td className="w-1/5 h-[8vh] text-4xl font-medium text-green-500">0</td>
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
                </tr>
            </tbody>
        </table>
    );
}

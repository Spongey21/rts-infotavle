import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';

export default function Transport() {
    return (
        <table className="w-full h-1/2 border-2  uppercase  bg-white">
            <thead>
                <tr className="bg-neutral-100 text-gray-500  rounded-lg">
                    <th className="w-1/5 h-[8vh] text-2xl text-center  font-medium">Type</th>
                    <th className="w-3/10 h-[8vh] text-2xl text-center font-medium">Ankomst</th>
                    <th className="w-3/10 h-[8vh] text-2xl text-center font-medium">Slut</th>
                    <th className="w-1/5 h-[8vh] text-2xl text-center font-medium">Forsinkelse</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center border-2 ">
                    <td className="w-1/5 h-[8vh] text-5xl  font-medium"><FontAwesomeIcon icon={faBus} /></td>
                    <td className="w-3/10 h-[8vh] text-4xl font-medium">9:28</td>
                    <td className="w-3/10 h-[8vh] text-4xl font-medium">9:45</td>
                    <td className="w-1/5 h-[8vh] text-4xl font-medium text-green-500">0</td>
                </tr>
                <tr className="text-center border-2">
                    <td className="w-1/5 h-[8vh] text-5xl font-medium"><FontAwesomeIcon icon={faBus} /></td>
                    <td className="w-3/10 h-[8vh] text-4xl font-medium">9:28</td>
                    <td className="w-3/10 h-[8vh] text-4xl font-medium">9:45</td>
                    <td className="w-1/5 h-[8vh] text-4xl font-medium text-red-500">+10</td>
                </tr>
                <tr className="text-center border-2 ">
                    <td className="w-1/5 h-[8vh] text-5xl font-medium"><FontAwesomeIcon icon={faBus} /></td>
                    <td className="w-3/10 h-[8vh] text-4xl font-medium">9:28</td>
                    <td className="w-3/10 h-[8vh] text-4xl font-medium">9:45</td>
                    <td className="w-1/5 h-[8vh] text-4xl font-medium text-red-500">+5</td>
                </tr>
            </tbody>
        </table>
    );
}

import { FiFile, FiTrash2 } from "react-icons/fi";

export function Ticket(){
    return(
        <>
            <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-50 hover:bg-gray-200 duration-300">
                <td className="text-left pl-1 ">David Pachinik</td>
                <td className="text-left hidden sm:table-cell">24/04/2026</td>
                <td className="text-left">
                    <span className="bg-green-600 rounded py-1 px-2 text-white">ABIERTO</span>
                </td>
                <td className="text-left">
                    <button className="mr-2">
                        <FiTrash2 size={24} color="#EF4444" />
                    </button>

                    <button>
                        <FiFile size={24} color="#3b82f6" />
                    </button>
                </td>
            </tr>
        </>

    )
}
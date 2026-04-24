
export function CustomerCard(){
    return(
        <article className="flex flex-col bg-gray-100  border-2 border-slate-200 p-2 rounded-lg gap-2 hover:scale-105 duration-300">
           <h2> <span  className="font-medium">Nombre:</span> David Pachinik</h2>
           <p><span  className="font-medium">Email:</span> pachi@gmail.com</p>
           <p><span  className="font-medium">Teléfono:</span> 0992-988397</p>
           <button className="bg-red-500 text-white px-2  rounded self-start mt-2">
                Eliminar
           </button>
        </article>
    )
}
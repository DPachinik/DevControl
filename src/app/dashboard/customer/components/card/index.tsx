'use client'
import { api } from "@/lib/api"
import { CustomersProps } from "@/utils/customer.types"
import { useRouter } from 'next/navigation'


export function CustomerCard({customer}:{customer: CustomersProps}){
    
    const router = useRouter();

    async function handleDelete(clientId:string){
        try{
            const response = await api.delete('/api/customer',{
                params:{
                    id:clientId
                }
            })
            router.refresh()      
        }catch(error){
            console.log(error)
        }
    }

    return(
        <article className="flex flex-col bg-gray-100  border-2 border-slate-200 p-2 rounded-lg gap-2 hover:scale-105 duration-300">
           <h2> <span  className="font-medium">Nombre: </span>{customer.name}</h2>
           <p><span  className="font-medium">Email: </span>{customer.email}</p>
           <p><span  className="font-medium">Teléfono: </span>{customer.phone}</p>
           <button className="bg-red-500 text-white px-2  rounded self-start mt-2" onClick={()=>handleDelete(customer.id)}>
                Eliminar
           </button>
        </article>
    )
}
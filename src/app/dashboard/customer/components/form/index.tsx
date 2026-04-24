'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm} from 'react-hook-form'
import {z} from 'zod'

const schema = z.object({
    name: z.string().trim().min(1,'El nombre es obligatorio'),
    email: z.string().trim().min(1,'El correo es obligatorio'),
    phone: z.string().refine((value)=>{
        return /^\+[1-9]\d{7,14}$/.test(value)
        },{
        message:'El número debe estar en formato internacional: +595981123456'
    }),
    adress:z.string(),
})

type FormData = z.infer<typeof schema>

export function NewCustomerForm(){

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema)
    })


    return(
        <form>
            <label> Nombre del Cliente</label>
            <input 
            type="text"
            placeholder="Luis"
            />
        </form>
    )
}
'use client'
import { Input } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm} from 'react-hook-form'
import {z} from 'zod'
import {api} from '@/lib/api'
import {useRouter} from 'next/navigation'


const schema = z.object({
    name: z.string().trim().min(1,'El nombre es obligatorio'),
    email: z.string().trim().min(1,'El correo es obligatorio'),
    phone: z.string().refine((value)=>{
        return /^\+[1-9]\d{7,14}$/.test(value)
        },{
        message:'El número debe estar en formato internacional: +595981123456'
    }),
    address:z.string(),
})

type FormData = z.infer<typeof schema>

export function NewCustomerForm({userId}:{userId:string}){

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const router = useRouter();


    async function handleRegister(data:FormData) {
        await api.post('/api/customer', {
            name:data.name,
            email:data.email,
            phone:data.phone,
            address:data.address,
            userId: userId
        })

        
        router.replace('/dashboard/customer')
    }

    return(
        <form className='flex flex-col mt-6' onSubmit={handleSubmit(handleRegister)}>

            <label className='mb-1 text-lg font-medium'> Nombre completo</label>
            <Input 
             type='text'
             name='name'
             placeholder='Juan González'
             register={register}
             error={errors.name?.message}
            />

            <section className='w-full flex flex-col sm:flex-row gap-4'>
                <div className='flex-1'>
                    <label className='mb-1 text-lg font-medium'>Email</label>
                    <Input 
                    type='emai;'
                    name='email'
                    placeholder='juan@gonzalez.com'
                    register={register}
                    error={errors.email?.message}
                    />   
                </div>

                <div className='flex-1'>
                    <label className='mb-1 text-lg font-medium'>Teléfono</label>
                    <Input 
                    type='text'
                    name='phone'
                    placeholder='+595981123456'
                    register={register}
                    error={errors.phone?.message}
                    />  
                </div>
            </section>

            <label className='mb-1 text-lg font-medium'>Ubicación</label>
            <Input 
             type='text'
             name='address'
             placeholder='Encarnación, Itapúa'
             register={register}
             error={errors.address?.message}
            />

            <button 
            type='submit' 
            className='bg-blue-500 my-4 px-2 h-11 rounded font-bold text-white'>
                Registrar
            </button>
        </form>
    )
}
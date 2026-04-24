import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Container } from '@/components/container'
import Link from 'next/link'
import { CustomerCard } from './components/card'

export default async function Customer(){

    const session = await getServerSession(authOptions)

    if(!session || !session.user){
        redirect('/')
    }

    return(
        <Container>
             <main className='mt-9 mb-2'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-bold'>Mis Clientes</h1>
                    <Link href='/dashboard/customer/new' className='bg-blue-500 rounded px-4 py-1 text-white'> Nuevo cliente</Link>
                </div>

                <section className='mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <CustomerCard />
                    <CustomerCard />
                    <CustomerCard />
                </section>
             </main>
        </Container>
       
    )
}
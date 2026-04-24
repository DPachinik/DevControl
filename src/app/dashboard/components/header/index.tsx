import { Container } from "@/components/container";
import Link from "next/link";

export function DashboardHeader(){
    return(
        <Container>
            <header className='w-full bg-gray-900 rounded p-3 my-4 flex items-center gap-4'>
                <Link href='/dashboard' className='text-white hover:font-bold duration-300'>
                    Solicitudes
                </Link>
                <Link href='/dashboard/customer'className='text-white hover:font-bold duration-300'>
                    Clientes
                </Link>
            </header>
        </Container>
    )
}
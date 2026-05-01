import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prismaClient from '@/lib/prisma'


export async function POST ( request:Request){

    const session = await getServerSession(authOptions);

    if(!session || !session?.user){
        return NextResponse.json({message:'Not authorized'}, {status: 401})
    }

    const { name, email, phone, address, userId } = await request.json();

    try{
        await prismaClient.customer.create({
            data:{ 
                name,
                email,
                phone,
                address: address?address:'',
                userId: userId
            }
        })

        return NextResponse.json({message:'Create new customer'}, {status: 200});
        
    }catch(err){
        return NextResponse.json({error:'Failed create new customer'}, {status: 400})
    }
}

export async function DELETE( request: Request){

    const session = await getServerSession(authOptions);

    if(!session || !session?.user){
        return NextResponse.json({message:'Not authorized'}, {status: 401})
    }

    const { searchParams } = await new URL (request.url);
    const clientId = searchParams.get('id')

    if(!clientId){
        return NextResponse.json({error:'Failed delete customer'}, {status:400})
    }

    const findTikects = await prismaClient.ticket.findFirst({
        where:{
            customerId:clientId
        }
    })
    
    if(findTikects){
        return NextResponse.json({error:'Este cliente posee un tikect abierto'}, {status:400})
    }

    try{
        await prismaClient.customer.delete({
            where:{
                id:clientId as string
            }
        })

        return NextResponse.json({message:'Sucess delete customer'})
    }catch(err){
        return NextResponse.json({message:'Failed delete customer'}, {status:400})
    }
}
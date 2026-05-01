import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps{
    type: string;
    name: string;
    placeholder: string;
    register: UseFormRegister<any>;
    error?:string;
    rules?: RegisterOptions;
}

export function Input({name, type, placeholder, register, error, rules }:InputProps){
    return(
        <>
        <input 
         className='w-full border-2 border-gray-400 rounded-md h-11 px-2 '
         type={type}
         placeholder={placeholder}
         {...register(name, rules)}
         />
         {error && <p className="text-red-600 my-1">{error}</p>}
        </>

    )
       
    
}
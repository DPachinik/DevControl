import Image from "next/image";
import hero from '../assets/hero.svg'


export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <h2 className="text-2xl font-medium mb-2">Administra tu empresa</h2>
      <h1 className="text-3xl font-bold text-blue-600 md:text-4xl">Atenciones, clientes</h1>
      <Image
      src={hero}
      alt="imagen de atencion al cliente "
      width={600}
      className="max-w-sm md:max-w-xl"
      />
    </main>
  );
}

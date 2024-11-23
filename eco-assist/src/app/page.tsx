import Cabecalho from "@/components/Cabecalho/Cabecalho";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import casa from "@/img/casa.jpg";
import empresa from "@/img/empresa.jpg";
import sobre from "@/img/sobre.jpg";

export default function Home() {
  return (
    <main>
      <Cabecalho />
      <section className="container mx-auto p-6 mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-[#4B3F3F] p-6 rounded-lg w-full">
            <h2 className="text-2xl font-semibold mb-4 text-center text-[#4CF214]">
              EMPRESA
            </h2>
            <Image
              src={empresa}
              alt="Imagem Empresa"
              className="w-[200px] h-[150px] mx-auto mb-4"
            />
            <p className="text-center text-[#4CF214] mb-4">
              questionário para empresas
            </p>
            <Link
              href="/Empresa"
              className="w-full py-2 bg-blue-200 flex items-center justify-center shadow-lg rounded-md text-blue-700 font-bold text-lg hover:bg-blue-300 transition duration-300"
            >
              Empresa
            </Link>
          </div>

          <div className="bg-[#4B3F3F] p-6 rounded-lg w-full">
            <h2 className="text-2xl font-semibold mb-4 text-center text-[#4CF214]">
              Pessoas
            </h2>
            <Image
              src={casa}
              alt="Imagem Casa"
              className="w-[200px] h-[150px] mx-auto mb-4"
            />
            <p className="text-center text-[#4CF214] mb-4">questionário</p>
            <Link
              href="/Cliente"
              className="w-full py-2 bg-blue-200 flex items-center justify-center shadow-lg rounded-md text-blue-700 font-bold text-lg hover:bg-blue-300 transition duration-300"
            >
              Casa
            </Link>
          </div>

          <div className="bg-[#4B3F3F] p-6 rounded-lg w-full">
            <h2 className="text-2xl font-semibold mb-4 text-center text-[#4CF214]">
              JOGO-3
            </h2>
            <Image
              src={sobre}
              alt="Imagem Sobre"
              className="w-[200px] h-[150px] mx-auto mb-4"
            />
            <p className="text-center text-[#4CF214] mb-4">
              Tipos de energia sustentável
            </p>
            <Link
              href="/Sobre"
              className="w-full py-2 bg-blue-200 flex items-center justify-center shadow-lg rounded-md text-blue-700 font-bold text-lg hover:bg-blue-300 transition duration-300"
            >
              Sobre
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

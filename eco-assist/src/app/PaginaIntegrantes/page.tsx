import React from "react";

export default function PaginaIntegrantes() {
  const pessoas = [
    { nome: "Vinicius Murtinho Vicente", rm: 551151, turma: "1TDSPY" },
    { nome: "Ryan Barreto Maciel", rm: 558678, turma: "1TDSPY" },
    { nome: "Guilherme Alves Cabal", rm: 558699, turma: "1TDSPY" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Lista de Alunos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {pessoas.map((pessoa, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Nome: {pessoa.nome}
            </h2>
            <p className="text-gray-600">Número: {pessoa.rm}</p>
            <p className="text-gray-600">Turma: {pessoa.turma}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

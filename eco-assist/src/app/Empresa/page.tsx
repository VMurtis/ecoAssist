"use client";
import { TipoEmpresa } from "@/types/types";

import React from "react";

import { useState } from "react";

import Cabecalho from "@/components/Cabecalho/Cabecalho";

export default function Empresa() {
  const [empresa, setEmpresa] = useState<TipoEmpresa>({
    nome_empresa: "",
    cnpj_empresa: "",
    computador_ou_notebook: "",
    podencia_computador_notebook: "",
    tempo_uso_computador_notebook: "",
    ar_condicionado: "",
    podencia_ar_condicionado: "",
    tempo_uso_ar_condicionado: "",
    motores_eletrico: "",
    sistema_ventilacao: "",
    sistema_refrigeracao: "",
    equipamento_embalagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmpresa({ ...empresa, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome_empresa", empresa.nome_empresa);
    formData.append("cnpj_empresa", empresa.cnpj_empresa);
    formData.append("computador_ou_notebook", empresa.computador_ou_notebook);
    formData.append("ar_condiciondo", empresa.ar_condicionado);
    formData.append("sistema_ventilacao", empresa.sistema_ventilacao);
    formData.append("sistema_refrigeracao", empresa.sistema_refrigeracao);
    formData.append("equipamento_embalagem", empresa.equipamento_embalagem);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.error("Empresa cadastrada com sucesso!");
        setEmpresa({
          nome_empresa: "",
          cnpj_empresa: "",
          computador_ou_notebook: "",
          podencia_computador_notebook: "",
          tempo_uso_computador_notebook: "",
          ar_condicionado: "",
          podencia_ar_condicionado: "",
          tempo_uso_ar_condicionado: "",
          motores_eletrico: "",
          sistema_ventilacao: "",
          sistema_refrigeracao: "",
          equipamento_embalagem: "",
        });
      } else {
        console.error("Erro ao cadastrar o produto.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <main>
      <Cabecalho />
      <section className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-600">
              Cadastro de Empresa
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Nome da Empresa */}
            <div className="mb-4">
              <label
                htmlFor="id_nome_empresa"
                className="block text-sm font-semibold text-gray-700"
              >
                Nome da Empresa
              </label>
              <input
                type="text"
                id="id_nome_empresa"
                name="nome_empresa"
                placeholder="Digite o nome da empresa"
                value={empresa.nome_empresa}
                onChange={handleChange}
                required
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* CNPJ da Empresa */}
            <div className="mb-4">
              <label
                htmlFor="id_cnpj_empresa"
                className="block text-sm font-semibold text-gray-700"
              >
                CNPJ da Empresa
              </label>
              <input
                type="text"
                id="id_cnpj_empresa"
                name="cnpj_empresa"
                placeholder="Digite o CNPJ da empresa"
                value={empresa.cnpj_empresa}
                onChange={handleChange}
                required
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  Tem computador ou notebook?
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_computador_ou_notebook_true"
                      name="computador_ou_notebook"
                      value="sim"
                      checked={empresa.computador_ou_notebook === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_computador_ou_notebook_true"
                      className="text-gray-700"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_computador_ou_notebook_false"
                      name="computador_ou_notebook"
                      value="não"
                      checked={empresa.computador_ou_notebook === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_computador_ou_notebook_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {empresa.computador_ou_notebook === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_podencia_computador_notebook"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência do Computador ou Notebook (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_computador_notebook"
                    name="podencia_computador_notebook"
                    placeholder="Digite a potência"
                    value={empresa.podencia_computador_notebook}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_computador_notebook"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso do Computador ou Notebook (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_computador_notebook"
                    name="tempo_uso_computador_notebook"
                    placeholder="Digite o tempo de uso"
                    value={empresa.tempo_uso_computador_notebook}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  A empresa tem ar-condiciondo:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_ar_condicionado_true"
                      name="ar_condicionado"
                      value="sim"
                      checked={empresa.ar_condicionado === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_ar_condicionado_true"
                      className="text-gray-700"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_ar_condicionado_false"
                      name="ar_condicionado"
                      value="não"
                      checked={empresa.ar_condicionado === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_ar_condicionado_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {empresa.ar_condicionado === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_ar_condicionado"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência do Computador ou Notebook (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_ar_condicionado"
                    name="podencia_ar_condicionado"
                    placeholder="Digite a potência"
                    value={empresa.podencia_ar_condicionado}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_ar_condicionado"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso do Ar-condicionado (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_ar_condicionado"
                    name="tempo_uso_ar_condicionado"
                    placeholder="Digite o tempo de uso"
                    value={empresa.tempo_uso_ar_condicionado}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  A empresa tem motores elétrico:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_motores_eletrico_true"
                      name="motores_eletrico"
                      value="sim"
                      checked={empresa.motores_eletrico === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_motores_eletrico_true"
                      className="text-gray-700"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_motores_eletrico_false"
                      name="motores_eletrico"
                      value="não"
                      checked={empresa.motores_eletrico === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_motores_eletrico_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {empresa.motores_eletrico === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_motores_eletrico"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência do motores elétrico (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_motores_eletrico"
                    name="podencia_motores_eletrico"
                    placeholder="Digite a potência"
                    value={empresa.podencia_motores_eletrico}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_motores_eletrico"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso do motores elétrico (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_motores_eletrico"
                    name="tempo_uso_motores_eletrico"
                    placeholder="Digite o tempo de uso"
                    value={empresa.tempo_uso_motores_eletrico}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  A empresa tem sistema de ventilação:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_sistema_ventilacao_true"
                      name="sistema_ventilacao"
                      value="sim"
                      checked={empresa.sistema_ventilacao === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_sistema_ventilacao_true"
                      className="text-gray-700"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_sistema_ventilacao_false"
                      name="sistema_ventilacao"
                      value="não"
                      checked={empresa.sistema_ventilacao === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_sistema_ventilacao_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {empresa.sistema_ventilacao === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_sistema_ventilacao"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência do motores elétrico (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_sistema_ventilacao"
                    name="podencia_sistema_ventilacao"
                    placeholder="Digite a potência"
                    value={empresa.podencia_sistema_ventilacao}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_sistema_ventilacao"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso do motores elétrico (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_sistema_ventilacao"
                    name="tempo_uso_sistema_ventilacao"
                    placeholder="Digite o tempo de uso"
                    value={empresa.tempo_uso_sistema_ventilacao}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  A empresa tem sistema de refrigeração:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_sistema_refrigeracao_true"
                      name="sistema_refrigeracao"
                      value="sim"
                      checked={empresa.sistema_refrigeracao === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_sistema_refrigeracao_true"
                      className="text-gray-700"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_sistema_refrigeracao_false"
                      name="sistema_refrigeracao"
                      value="não"
                      checked={empresa.sistema_refrigeracao === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_sistema_refrigeracao_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {empresa.sistema_refrigeracao === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_sistema_refrigeracao"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência do motores elétrico (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_sistema_refrigeracao"
                    name="podencia_sistema_refrigeracao"
                    placeholder="Digite a potência"
                    value={empresa.podencia_sistema_refrigeracao}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_sistema_refrigeracao"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso do motores elétrico (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_sistema_refrigeracao"
                    name="tempo_uso_sistema_refrigeracao"
                    placeholder="Digite o tempo de uso"
                    value={empresa.tempo_uso_sistema_refrigeracao}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  A empresa tem equipamento de embalagens:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_equipamento_embalagem_true"
                      name="equipamento_embalagem"
                      value="sim"
                      checked={empresa.equipamento_embalagem === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_equipamento_embalagem_true"
                      className="text-gray-700"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_equipamento_embalagem_false"
                      name="equipamento_embalagem"
                      value="não"
                      checked={empresa.equipamento_embalagem === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_sistema_refrigeracao_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {empresa.equipamento_embalagem === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_equipamento_embalagem"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência do motores elétrico (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_equipamento_embalagem"
                    name="podencia_equipamento_embalagem"
                    placeholder="Digite a potência"
                    value={empresa.podencia_equipamento_embalagem}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_equipamento_embalagem"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso do motores elétrico (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_equipamento_embalagem"
                    name="tempo_uso_equipamento_embalagem"
                    placeholder="Digite o tempo de uso"
                    value={empresa.tempo_uso_equipamento_embalagem}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}

            {/* Botão de Enviar */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Enviar Informações
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

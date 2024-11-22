"use client";

import React, { useState } from "react";
import Cabecalho from "@/components/Cabecalho/Cabecalho";

interface TipoCliente {
  nome_cliente: string;
  cpf_cliente: string;
  geladeira: string;
}

export default function Cliente() {
  const [cliente, setCliente] = useState<TipoCliente>({
    nome_cliente: "",
    cpf_cliente: "",
  });

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    try {
      const response = await fetch("/api/cliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });

      if (response.ok) {
        alert("Cliente cadastrado com sucesso!");
        setCliente({ nome_cliente: "", cpf_cliente: "" }); // Limpar o formulário
      } else {
        alert("Erro ao cadastrar cliente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <main>
      <Cabecalho />
      <section className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            Cadastro de Cliente
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Nome do Cliente */}
            <div className="mb-4">
              <label
                htmlFor="id_nome_cliente"
                className="block text-sm font-semibold text-gray-700"
              >
                Nome do Cliente
              </label>
              <input
                type="text"
                name="nome_cliente"
                id="id_nome_cliente"
                value={cliente.nome_cliente}
                onChange={handleChange}
                placeholder="Digite seu nome"
                required
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* CPF do Cliente */}
            <div className="mb-4">
              <label
                htmlFor="id_cpf_cliente"
                className="block text-sm font-semibold text-gray-700"
              >
                CPF do Cliente
              </label>
              <input
                type="text"
                name="cpf_cliente"
                id="id_cpf_cliente"
                value={cliente.cpf_cliente}
                onChange={handleChange}
                placeholder="Digite seu CPF"
                required
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  Você possui geladeira:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_geladeira_true"
                      name="geladeira"
                      value="sim"
                      checked={cliente.geladeira === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_geladeira_true"
                      className="text-gray-700"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_geladeira_false"
                      name="geladeira"
                      value="não"
                      checked={cliente.geladeira === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_geladeira_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {cliente.geladeira === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_geladeira"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência da geladeira (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_geladeira"
                    name="podencia_geladeira"
                    placeholder="Digite a potência"
                    value={cliente.podencia_geladeira}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_geladeira"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso da geladeira (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_geladeira"
                    name="tempo_uso_geladeira"
                    placeholder="Digite o tempo de uso"
                    value={cliente.tempo_uso_geladeira}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            <div>-----------</div>

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  Você possui máquina de lavar roupa:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_maquina_lavar_true"
                      name="maquina_lavar"
                      value="sim"
                      checked={cliente.maquina_lavar === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_maquina_lavar_true"
                      className="text-gray-700"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_maquina_lavar_false"
                      name="maquina_lavar"
                      value="não"
                      checked={cliente.maquina_lavar === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_maquina_lavar_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {cliente.maquina_lavar === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_maquina_lavar"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência da geladeira (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_maquina_lavar"
                    name="podencia_maquina_lavar"
                    placeholder="Digite a potência"
                    value={cliente.podencia_maquina_lavar}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_maquina_lavar"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso da máquina de lavar (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_maquina_lavar"
                    name="tempo_uso_maquina_lavar"
                    placeholder="Digite o tempo de uso"
                    value={cliente.tempo_uso_maquina_lavar}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            <div>-----------</div>

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  Você possui máquina de lavar roupa:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_maquina_lavar_true"
                      name="maquina_lavar"
                      value="sim"
                      checked={cliente.maquina_lavar === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_maquina_lavar_true"
                      className="text-gray-700"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_maquina_lavar_false"
                      name="maquina_lavar"
                      value="não"
                      checked={cliente.maquina_lavar === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_maquina_lavar_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {cliente.maquina_lavar === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_maquina_lavar"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência da geladeira (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_maquina_lavar"
                    name="podencia_maquina_lavar"
                    placeholder="Digite a potência"
                    value={cliente.podencia_maquina_lavar}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_maquina_lavar"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso da máquina de lavar (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_maquina_lavar"
                    name="tempo_uso_maquina_lavar"
                    placeholder="Digite o tempo de uso"
                    value={cliente.tempo_uso_maquina_lavar}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            <div>************</div>

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  Você possui chuveiro:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_chuveiro_true"
                      name="chuveiro"
                      value="sim"
                      checked={cliente.chuveiro === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="id_chuveiro_true" className="text-gray-700">
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_chuveiro_false"
                      name="chuveiro"
                      value="não"
                      checked={cliente.chuveiro === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_chuveiro_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {cliente.chuveiro === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_chuveiro"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência da geladeira (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_chuveiro"
                    name="podencia_chuveiro"
                    placeholder="Digite a potência"
                    value={cliente.podencia_chuveiro}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_maquina_lavar"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso do chuveiro (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_chuveiro"
                    name="tempo_uso_chuveiro"
                    placeholder="Digite o tempo de uso"
                    value={cliente.tempo_uso_chuveiro}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            <div>************</div>

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  Você possui aspirador de pó:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_aspira_po_true"
                      name="aspira_po"
                      value="sim"
                      checked={cliente.aspira_po === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_aspira_po_true"
                      className="text-gray-700"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_aspira_po_false"
                      name="aspira_po"
                      value="não"
                      checked={cliente.aspira_po === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_aspira_po_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {cliente.aspira_po === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_aspira_po"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência da geladeira (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_aspira_po"
                    name="podencia_aspira_po"
                    placeholder="Digite a potência do carregador"
                    value={cliente.podencia_aspira_po}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_maquina_lavar"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso do aspirador de pó (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_aspira_poo"
                    name="tempo_uso_chuveiro"
                    placeholder="Digite o tempo de uso"
                    value={cliente.tempo_uso_aspira_po}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            <div>************</div>

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  Você possui ar-condicionado:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_ar_condicionado_true"
                      name="ar_condicionado"
                      value="sim"
                      checked={cliente.ar_condicionado === "sim"}
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
                      checked={cliente.ar_condicionado === "não"}
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
            {cliente.ar_condicionado === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_ar_condicionado"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência da geladeira (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_ar_condicionado"
                    name="podencia_ar_condicionado"
                    placeholder="Digite a potência do carregador"
                    value={cliente.podencia_ar_condicionado}
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
                    Tempo de uso do aspirador de pó (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_ar_condicionado"
                    name="tempo_uso_ar_condicionado"
                    placeholder="Digite o tempo de uso"
                    value={cliente.tempo_uso_ar_condicionado}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            <div>************</div>

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  Você possui ar-condicionado:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_ar_condicionado_true"
                      name="ar_condicionado"
                      value="sim"
                      checked={cliente.ar_condicionado === "sim"}
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
                      checked={cliente.ar_condicionado === "não"}
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
            {cliente.ar_condicionado === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_ar_condicionado"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência da geladeira (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_ar_condicionado"
                    name="podencia_ar_condicionado"
                    placeholder="Digite a potência do carregador"
                    value={cliente.podencia_ar_condicionado}
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
                    Tempo de uso do aspirador de pó (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_ar_condicionado"
                    name="tempo_uso_ar_condicionado"
                    placeholder="Digite o tempo de uso"
                    value={cliente.tempo_uso_ar_condicionado}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            <div>************</div>

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  Você possui ferro de passar roupa:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_ferro_passa_true"
                      name="ferro_passa"
                      value="sim"
                      checked={cliente.ferro_passa === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_ferro_passa_true"
                      className="text-gray-700"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_ferro_passa_false"
                      name="ferro_passa"
                      value="não"
                      checked={cliente.ferro_passa === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_ferro_passa_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {cliente.ferro_passa === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_ferro_passa"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência da geladeira (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_ferro_passa"
                    name="podencia_ferro_passa"
                    placeholder="Digite a potência do carregador"
                    value={cliente.podencia_ferro_passa}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_ferro_passa"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso do aspirador de pó (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_ferro_passa"
                    name="tempo_uso_ferro_passa"
                    placeholder="Digite o tempo de uso"
                    value={cliente.tempo_uso_ferro_passa}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            <div>************</div>

            {/* Computador ou Notebook */}
            <div className="mb-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-700">
                  Você possui panela elétrica:
                </legend>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_panela_eletrica_true"
                      name="panela_eletrica"
                      value="sim"
                      checked={cliente.panela_eletrica === "sim"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_panela_eletrica_true"
                      className="text-gray-700"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="id_panela_eletrica_false"
                      name="panela_eletrica"
                      value="não"
                      checked={cliente.panela_eletrica === "não"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="id_panela_eletrica_false"
                      className="text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Potência e Tempo de Uso - Computador */}
            {cliente.panela_eletrica === "sim" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="id_panela_eletrica"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Potência da geladeira (kW)
                  </label>
                  <input
                    type="text"
                    id="id_podencia_panela_eletrica"
                    name="podencia_panela_eletrica"
                    placeholder="Digite a potência do carregador"
                    value={cliente.podencia_panela_eletrica}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="id_tempo_uso_panela_eletrica"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tempo de uso do aspirador de pó (h/dia)
                  </label>
                  <input
                    type="text"
                    id="id_tempo_uso_panela_eletrica"
                    name="tempo_uso_panela_eletrica"
                    placeholder="Digite o tempo de uso"
                    value={cliente.tempo_uso_panela_eletrica}
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
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

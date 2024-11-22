"use client";
import { TipoEmpresa } from "@/types/types";

import React from "react";

import { useState } from "react";

export default function Sobre() {
  return (
    <>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <h1>Tipos de Energias Renováveis</h1>
        <p>
          As energias renováveis são fontes de energia que se renovam
          naturalmente e são praticamente inesgotáveis, ao contrário das fontes
          tradicionais de energia, como os combustíveis fósseis. Elas são
          consideradas mais sustentáveis, pois têm um impacto ambiental menor e
          ajudam a reduzir as emissões de gases de efeito estufa. Abaixo estão
          alguns dos principais tipos de energias renováveis:
        </p>

        <h2>1. Energia Solar</h2>
        <p>
          A energia solar é gerada a partir da radiação do sol, captada por
          painéis solares fotovoltaicos ou por sistemas de energia solar
          térmica. Ela pode ser usada para gerar eletricidade ou aquecer água e
          ambientes. O sol é uma fonte abundante e limpa, e a tecnologia está se
          tornando cada vez mais acessível.
        </p>

        <h2>2. Energia Eólica</h2>
        <p>
          A energia eólica é gerada pela força dos ventos. As turbinas eólicas
          convertem o movimento do ar em eletricidade. Essa energia é limpa,
          sustentável e amplamente utilizada em áreas com ventos constantes,
          como regiões costeiras e planícies.
        </p>

        <h2>3. Energia Hidrelétrica</h2>
        <p>
          A energia hidrelétrica é gerada pelo movimento das águas em represas e
          rios. A água em movimento faz girar turbinas conectadas a geradores,
          produzindo eletricidade. Embora seja uma fonte de energia renovável, a
          construção de grandes barragens pode causar impactos ambientais.
        </p>

        <h2>4. Biomassa</h2>
        <p>
          A biomassa é a energia gerada a partir da queima de materiais
          orgânicos, como madeira, resíduos agrícolas e lixo orgânico. Esses
          materiais liberam energia quando queimados e podem ser convertidos em
          eletricidade ou aquecedores. A biomassa é considerada renovável, desde
          que seja gerida de forma sustentável.
        </p>

        <h2>5. Energia Geotérmica</h2>
        <p>
          A energia geotérmica vem do calor proveniente do interior da Terra.
          Esse calor pode ser aproveitado para gerar eletricidade ou para
          aquecer ambientes. As usinas geotérmicas geralmente estão localizadas
          em áreas com alta atividade tectônica, como regiões vulcânicas.
        </p>

        <h2>6. Energia das Ondas e das Marés</h2>
        <p>
          A energia das ondas e das marés é gerada a partir do movimento da água
          do mar. O movimento das ondas e a maré alta e baixa podem ser
          convertidos em energia elétrica por meio de turbinas e sistemas de
          captação específicos. Embora essa tecnologia ainda esteja em
          desenvolvimento, ela possui grande potencial de geração de energia
          renovável.
        </p>

        <h2>Como Elas Funcionam?</h2>
        <p>
          Cada tipo de energia renovável possui um método diferente de
          funcionamento, mas o princípio comum é aproveitar fontes naturais para
          gerar eletricidade ou calor. Por exemplo:
        </p>
        <ul>
          <li>
            <strong>Energia Solar:</strong> Os painéis solares fotovoltaicos
            convertem a luz do sol diretamente em eletricidade.
          </li>
          <li>
            <strong>Energia Eólica:</strong> As turbinas eólicas aproveitam o
            movimento do vento para gerar eletricidade.
          </li>
          <li>
            <strong>Energia Hidrelétrica:</strong> O movimento da água das
            represas faz girar turbinas que geram eletricidade.
          </li>
          <li>
            <strong>Biomassa:</strong> A queima de materiais orgânicos libera
            calor que é convertido em eletricidade.
          </li>
          <li>
            <strong>Energia Geotérmica:</strong> O calor da Terra é utilizado
            para gerar eletricidade ou aquecer ambientes.
          </li>
          <li>
            <strong>Energia das Ondas:</strong> O movimento das ondas é captado
            e convertido em eletricidade.
          </li>
        </ul>
        <p>
          Estas fontes renováveis são essenciais para a transição para uma
          matriz energética mais limpa e sustentável, ajudando a combater as
          mudanças climáticas e a promover um futuro mais verde para o planeta.
        </p>
      </div>
    </>
  );
}

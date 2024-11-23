"use client";
import { TipoProduto } from "@/types/types";
import Image from "next/image";
import { useState } from "react"

export default function Questionario() {
    <main>
        <div className="my-3 flex items-center justify-between">
            <fieldset className="text-[#4CF214]">
                <legend>a empresa possue computador ou notebook: </legend>
            <label htmlFor="idMultiTrue"> SIM </label>
            <input type="radio" id="idMultiTrue" name="multi" value="sim" checked={produto.multi == "sim"} onChange={(e)=> handleChange(e)} />
            <label htmlFor="idMultiFalse"> NÃO </label>
            <input type="radio" id="idMultiFalse" name="multi" value="não" checked={produto.multi == "não"} onChange={(e)=> handleChange(e)} />
            </fieldset>
        </div>
    </main>
}
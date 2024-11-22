import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <nav className="bg-gray-900 py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <span className="text-lime-400 text-lg font-bold">EcoAssist</span>

        {/* Menu */}
        <ul className="flex space-x-6 text-sm uppercase">
          <li>
            <Link href="/" className="text-lime-400 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Sobre" className="text-lime-400 hover:underline">
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/PaginaIntegrantes"
              className="bg-lime-400 text-black font-semibold py-1 px-3 rounded hover:bg-lime-500"
            >
              Página integrantes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import headerData from "@/datos/header.json";

export default function Header() {
  const { LogoJac, LogoMunicipio, Titulo } = headerData;

  return (
    <header className="bg-gray-900 py-6 border-b border-gray-700">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6">
        {/* Logo izquierdo */}
        <div className="w-24 h-24 flex-shrink-0 relative">
          <Link href="/">
            <Image
              src={LogoJac}
              alt="Logo Izquierdo"
              fill
              className="object-contain"
            />
          </Link>
        </div>
        <div className="text-center text-white flex-grow">
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide">
            {Titulo}
          </h1>
          <p className="text-sm sm:text-base font-light">NIT: {headerData.Datos.NIT}</p>
          <p className="text-sm sm:text-base font-light">PERSONERIA JURIDICA: {headerData.Datos.PersoneriaJuridica}</p>
          <p className="text-sm sm:text-base font-light">EXPEDIDO POR: {headerData.Datos.ExpedidoPor}</p>
          <p className="text-sm sm:text-base font-light">RUC: {headerData.Datos.RUC}</p>
          <p className="text-sm sm:text-base font-light">UBICACIÓN: {headerData.Datos.Ciudad}, {headerData.Datos.Departamento}</p>
        </div>
        <div className="w-24 h-24 flex-shrink-0 relative">
          <Image
            src={LogoMunicipio}
            alt="Logo Derecho"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}

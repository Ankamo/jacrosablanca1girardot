"use client";
import { useState } from "react";
import Header from "@/components/header/Header";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/footer/Footer";

export default function ContactoPage() {
	const [dark, setDark] = useState(true);

	return (
		<div
			className={`${
				dark
					? "bg-[#141a2e] text-white"
					: "bg-gradient-to-br from-white via-blue-100 to-lime-100 text-[#1B2A5B]"
			} min-h-screen flex flex-col transition-colors duration-500`}
		>
			<Header dark={dark} />
			<NavBar dark={dark} setDark={setDark} />
			<main className="flex flex-col items-center justify-center flex-1 min-h-[60vh]">
				<h1 className="text-3xl font-bold mb-6">Contacto</h1>
				{/* ...puedes agregar contenido de contacto aquí... */}
			</main>
			<Footer />
		</div>
	);
}

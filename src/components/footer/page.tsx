import footerData from "@/datos/footer.json";

export default function Footer() {
    const {
        enlacesRapidos,
        contacto,
        redes,
        creditos
    } = footerData;

    return (
        <footer className="bg-blue-950 text-white">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center text-sm text-center gap-10 md:flex-row md:justify-center md:text-center">
                {/* Enlaces Rápidos */}
                <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-lg mb-3">Enlaces Rápidos</h3>
                    <ul className="space-y-2 text-blue-400">
                        {enlacesRapidos.map((enlace, i) => (
                            <li key={i}>
                                <a href={enlace.href}>{enlace.texto}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Información de Contacto */}
                <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-lg mb-3">Contacto</h3>
                    <ul className="space-y-2">
                        <li>{contacto.email}</li>
                        <li>{contacto.telefono}</li>
                        <li>{contacto.direccion1}</li>
                        <li>{contacto.direccion2}</li>
                        <li>{contacto.ciudad}</li>
                    </ul>
                </div>

                {/* Redes Sociales */}
                <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-lg mb-3">Redes Sociales</h3>
                    <ul className="space-y-2 text-blue-400">
                        {redes.map((red, i) => (
                            <li key={i}>{red.nombre}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Créditos abajo */}
            <div className="text-center text-xs text-gray-400 mt-10 space-y-1">
                <p>
                    Desarrollado por{" "}
                    <span className="text-blue-400">{creditos.desarrollador}</span>
                </p>
                <p>
                    Administrado por{" "}
                    <span className="text-blue-400">{creditos.administrador}</span>
                </p>
                <p>© {new Date().getFullYear()} {creditos.copyright}</p>
            </div>
        </footer>
    );
}

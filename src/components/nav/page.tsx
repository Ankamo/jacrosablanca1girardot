import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const toggleSubmenu = (item: string) => {
        setHoveredItem(hoveredItem === item ? null : item);
    };

    return (
      <nav className="bg-blue-950 py-2 px-6 md:px-10 border-t border-b border-blue-900">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <button 
              className="text-gray-300 md:hidden" 
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
          <ul className={`text-center text-gray-300 space-y-2 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <li>Cartelera</li>
            <li 
              onClick={() => toggleSubmenu('Eventos y Actividades')} 
              className="cursor-pointer"
            >
              Eventos y Actividades {hoveredItem === 'Eventos y Actividades' ? '▲' : '▼'}
              {hoveredItem === 'Eventos y Actividades' && (
                <ul className="pl-4 space-y-1">
                  <li>Eventos</li>
                  <li>Actividades</li>
                  <hr className="my-2 border-gray-500" />
                </ul>
              )}
            </li>
            <li 
              onClick={() => toggleSubmenu('Reuniones y Asambleas')} 
              className="cursor-pointer"
            >
              Reuniones y Asambleas {hoveredItem === 'Reuniones y Asambleas' ? '▲' : '▼'}
              {hoveredItem === 'Reuniones y Asambleas' && (
                <ul className="pl-4 space-y-1">
                  <li>Asamblea General de Afiliados</li>
                  <li>Reunion de Mesa Directiva</li>
                  <li>Reunion de Comision de Convivencia y Conciliacion</li>
                  <li>Reunion de Comisiones de Trabajo</li>
                  <li>Asamblea General de Delegados en Asojuntas</li>
                </ul>
              )}
            </li>
            <li 
              onClick={() => toggleSubmenu('Miembros Afiliados')} 
              className="cursor-pointer"
            >
              Miembros Afiliados {hoveredItem === 'Miembros Afiliados' ? '▲' : '▼'}
              {hoveredItem === 'Miembros Afiliados' && (
                <ul className="pl-4 space-y-1">
                  <li>Junta Directiva</li>
                  <li>Fiscalia</li>
                  <li>Delegados</li>
                  <li>Comision de convivencia y conciliacion</li>
                  <li>Comisiones de trabajo</li>
                  <li>Afiliados</li>
                </ul>
              )}
            </li>
            <li 
              onClick={() => toggleSubmenu('Proyectos')} 
              className="cursor-pointer"
            >
              Proyectos {hoveredItem === 'Proyectos' ? '▲' : '▼'}
              {hoveredItem === 'Proyectos' && (
                <ul className="pl-4 space-y-1">
                  <li>Salon Comunal</li>
                  <li>Pavimentacion Calle 32 y Carrera 10</li>
                  <li>Dotaciones Tecnologicas</li>
                  <li>Mercado Comunal Girardot MERCOMGIR</li>
                </ul>
              )}
            </li>
            <li 
              onClick={() => toggleSubmenu('Servicios Comunales')} 
              className="cursor-pointer"
            >
              Servicios Comunales {hoveredItem === 'Servicios Comunales' ? '▲' : '▼'}
              {hoveredItem === 'Servicios Comunales' && (
                <ul className="pl-4 space-y-1">
                  <li>Certificados de afiliacion</li>
                </ul>
              )}
            </li>
            <li>Nuestra Historia</li>
          </ul>
        </div>
      </nav>
    );
}

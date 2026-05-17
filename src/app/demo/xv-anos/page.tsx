// src/app/demo/xv-anos/page.tsx
import Image from 'next/image';

export default function XvAnosDemo() {
  return (
    // Contenedor principal oscuro para resaltar el celular
    <div className="min-h-screen bg-neutral-900 flex justify-center font-sans py-0 sm:py-8">
      
      {/* Lienzo de la invitación (Tamaño móvil) con fondo rosa pálido */}
      <div className="w-full max-w-[400px] bg-rose-50 sm:rounded-3xl shadow-2xl overflow-hidden relative flex flex-col">
        
        {/* FOTO DE PORTADA (Vestido/Festiva) */}
        <div className="relative h-[450px] w-full">
          <Image 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop" 
            alt="Mis XV Años" 
            fill
            className="object-cover"
            priority
          />
          {/* Gradiente especial que se funde con el color de fondo de la página */}
          <div className="absolute inset-0 bg-gradient-to-t from-rose-50 via-rose-50/20 to-transparent"></div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="flex-1 px-8 pb-12 flex flex-col items-center text-center relative z-10 -mt-24">
          
          {/* Insignia Flotante de XV */}
          <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center border-4 border-rose-50 mb-4 shadow-lg">
            <span className="text-2xl font-serif text-rose-900">XV</span>
          </div>

          <span className="text-xs tracking-[0.3em] text-rose-500 uppercase mb-2">
            Estás invitado a mis
          </span>
          
          <h1 className="text-6xl font-serif text-rose-900 leading-none mb-6 drop-shadow-sm">
            Valeria
          </h1>
          
          <p className="text-rose-700 font-light text-sm leading-relaxed mb-8">
            Con la bendición de Dios y el amor de mis padres, me llena de alegría invitarte a celebrar este día tan mágico para mí.
          </p>

          {/* CAJA DE FECHA (Estilo Ticket Elegante) */}
          <div className="border-y-2 border-rose-200 py-4 w-full mb-10 flex justify-between items-center px-4">
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-rose-500 font-medium">Sábado</p>
            </div>
            <div className="text-center border-x-2 border-rose-200 px-6">
              <p className="text-5xl font-serif text-rose-900">15</p>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-rose-500 font-medium">Nov 2026</p>
            </div>
          </div>

          {/* ITINERARIO (Misa y Recepción) */}
          <div className="w-full space-y-8 mb-12 text-rose-800">
            {/* Ceremonia */}
            <div className="bg-white/60 p-5 rounded-2xl shadow-sm border border-rose-100">
              <h3 className="font-serif text-xl mb-1 text-rose-900">Ceremonia Religiosa</h3>
              <p className="text-sm font-light mb-1">17:00 hrs</p>
              <p className="text-xs font-medium text-rose-600 mb-3">Parroquia de San Miguel Arcángel</p>
              <button className="text-[10px] tracking-widest uppercase bg-rose-200 text-rose-800 px-5 py-2 rounded-full hover:bg-rose-300 transition-colors">
                Ver Ubicación
              </button>
            </div>

            {/* Recepción */}
            <div className="bg-white/60 p-5 rounded-2xl shadow-sm border border-rose-100">
              <h3 className="font-serif text-xl mb-1 text-rose-900">Recepción y Fiesta</h3>
              <p className="text-sm font-light mb-1">19:30 hrs</p>
              <p className="text-xs font-medium text-rose-600 mb-3">Salón Diamante, Grand Hotel</p>
              <button className="text-[10px] tracking-widest uppercase bg-rose-200 text-rose-800 px-5 py-2 rounded-full hover:bg-rose-300 transition-colors">
                Ver Ubicación
              </button>
            </div>
          </div>

          {/* CÓDIGO DE VESTIMENTA */}
          <div className="w-full mb-10">
             <h4 className="text-sm font-bold tracking-widest text-rose-900 uppercase mb-1">Código de Vestimenta</h4>
             <p className="text-rose-600 font-light text-sm italic">Formal / Etiqueta</p>
             <p className="text-rose-400 text-xs mt-1">(Se reserva el color rosa)</p>
          </div>

          {/* BOTÓN DE RSVP */}
          <div className="mt-auto w-full">
            <button className="w-full bg-rose-800 text-rose-50 py-4 rounded-full font-medium tracking-wide shadow-xl hover:bg-rose-900 transition-colors transform hover:-translate-y-1">
              Confirmar Asistencia
            </button>
            <p className="text-[10px] text-rose-400 mt-6 uppercase tracking-widest">
              Powered by Momentos Sociales
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
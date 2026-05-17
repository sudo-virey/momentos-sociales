// src/app/demo/boda/page.tsx
import Image from 'next/image';

export default function BodaDemo() {
  return (
    // Contenedor principal oscuro para que resalte la invitación en medio
    <div className="min-h-screen bg-stone-900 flex justify-center font-sans py-0 sm:py-8">
      
      {/* El "lienzo" de la invitación (Tamaño móvil centrado) */}
      <div className="w-full max-w-[400px] bg-stone-50 sm:rounded-3xl shadow-2xl overflow-hidden relative flex flex-col">
        
        {/* FOTO DE PORTADA */}
        <div className="relative h-96 w-full">
          <Image 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" 
            alt="Pareja de boda" 
            fill
            className="object-cover"
            priority
          />
          {/* Gradiente para que el texto sea legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-stone-50"></div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="flex-1 px-8 py-10 flex flex-col items-center text-center -mt-20 relative z-10">
          
          <span className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-4">
            Nos casamos
          </span>
          
          <h1 className="text-5xl font-serif text-stone-800 leading-tight mb-2">
            Alejandro <br/> <span className="text-3xl italic text-stone-500">&</span> <br/> Guadalupe
          </h1>
          
          <div className="w-12 h-[1px] bg-stone-300 my-8"></div>
          
          <p className="text-stone-600 font-light leading-relaxed mb-8">
            Tenemos el honor de invitarte a celebrar nuestra unión. Tu presencia es el regalo más hermoso.
          </p>

          {/* FECHA Y HORA */}
          <div className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-stone-100 w-full mb-8">
            <h3 className="font-serif text-2xl text-stone-800 mb-1">Sábado</h3>
            <p className="text-4xl font-light text-stone-900 mb-1">26</p>
            <p className="text-sm tracking-widest text-stone-500 uppercase mb-4">Octubre 2026</p>
            <p className="text-stone-600 text-sm">18:00 hrs</p>
          </div>

          {/* UBICACIÓN */}
          <div className="w-full mb-10">
            <h3 className="font-serif text-xl text-stone-800 mb-2">Hacienda Los Arcángeles</h3>
            <p className="text-stone-500 text-sm font-light mb-4">
              Carretera Principal Km 45,<br/>
              Valle de Guadalupe, B.C.
            </p>
            <button className="text-xs tracking-widest uppercase text-stone-800 border-b border-stone-800 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors">
              Ver Mapa
            </button>
          </div>

          {/* CÓDIGO DE VESTIMENTA */}
          <div className="w-full bg-stone-100 rounded-2xl p-6 mb-10">
            <h4 className="text-sm font-bold tracking-widest text-stone-800 uppercase mb-2">Dress Code</h4>
            <p className="text-stone-600 font-light text-sm">Etiqueta Rigurosa</p>
          </div>

          {/* BOTÓN DE RSVP FIJO AL FONDO */}
          <div className="mt-auto w-full pt-4">
            <button className="w-full bg-stone-900 text-white py-4 rounded-full font-medium tracking-wide shadow-lg hover:bg-stone-800 transition-colors animate-pulse" style={{ animationDuration: '3s' }}>
              Confirmar Asistencia
            </button>
            <p className="text-[10px] text-stone-400 mt-4 uppercase tracking-widest">
              Powered by Momentos Sociales
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
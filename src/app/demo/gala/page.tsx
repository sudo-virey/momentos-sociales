// src/app/demo/gala/page.tsx
import Image from 'next/image';

export default function GalaDemo() {
  return (
    // Contenedor principal ultra oscuro
    <div className="min-h-screen bg-black flex justify-center font-sans py-0 sm:py-8">
      
      {/* Lienzo de la invitación: Tema Oscuro (Gala) */}
      <div className="w-full max-w-[400px] bg-zinc-950 sm:rounded-3xl shadow-[0_0_50px_rgba(217,119,6,0.15)] overflow-hidden relative flex flex-col border border-zinc-900">
        
        {/* FOTO DE PORTADA */}
        <div className="relative h-80 w-full">
          <Image 
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop" 
            alt="Cena de Gala" 
            fill
            sizes="(max-width: 640px) 100vw, 400px"
            className="object-cover opacity-80"
            priority
          />
          {/* Gradiente oscuro para fundir la imagen con el fondo de la invitación */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-zinc-950/60 to-zinc-950"></div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="flex-1 px-8 pb-10 flex flex-col items-center text-center relative z-10 -mt-16">
          
          <p className="text-xs tracking-[0.4em] text-amber-500 uppercase mb-4 font-semibold">
            Grupo Horizonte
          </p>
          
          <h1 className="text-4xl font-serif text-zinc-100 leading-tight mb-4">
            Cena de Gala <br /> <span className="text-2xl italic text-zinc-400 font-light">& Premiación 2026</span>
          </h1>
          
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent my-6"></div>
          
          <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">
            Tenemos el honor de invitarle a nuestra velada anual para celebrar los logros del año y brindar por el futuro.
          </p>

          {/* GRID DE FECHA Y HORA (Estilo Minimalista) */}
          <div className="grid grid-cols-2 gap-4 w-full mb-10">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-4 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Fecha</span>
              <span className="text-2xl font-serif text-amber-500">12 Dic</span>
              <span className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider">Jueves</span>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-4 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Recepción</span>
              <span className="text-2xl font-serif text-amber-500">20:00</span>
              <span className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider">Horas</span>
            </div>
          </div>

          {/* UBICACIÓN */}
          <div className="w-full mb-8 bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl">
            <h3 className="font-serif text-lg text-zinc-100 mb-1">Salón Onyx, Grand Hyatt</h3>
            <p className="text-zinc-500 text-xs font-light mb-4">
              Av. Paseo de la Reforma 123,<br/>
              Ciudad de México.
            </p>
            <button className="text-[10px] tracking-widest uppercase text-amber-500 border border-amber-500/30 px-4 py-2 rounded-full hover:bg-amber-500/10 transition-colors">
              Abrir en Maps
            </button>
          </div>

          {/* CÓDIGO DE VESTIMENTA Y ACCESO */}
          <div className="w-full mb-10 space-y-4 text-left">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                 <span className="text-amber-500 text-lg">👔</span>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-zinc-300 uppercase">Dress Code</h4>
                <p className="text-zinc-500 font-light text-xs">Black Tie / Etiqueta Rigurosa</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                 <span className="text-amber-500 text-lg">🎟️</span>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-zinc-300 uppercase">Acceso</h4>
                <p className="text-zinc-500 font-light text-xs">Pase personal e intransferible</p>
              </div>
            </div>
          </div>

          {/* BOTÓN DE RSVP */}
          <div className="mt-auto w-full pt-2">
            <button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-black py-4 rounded-full font-bold tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1">
              Confirmar Asistencia
            </button>
            <p className="text-[10px] text-zinc-600 mt-6 uppercase tracking-widest">
              Powered by Momentos Sociales
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
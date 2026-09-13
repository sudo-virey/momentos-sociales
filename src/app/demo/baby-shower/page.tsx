import Image from 'next/image'

export default function BabyShowerDemo() {
  return (
    <div className="min-h-screen bg-[#f5efe8] px-4 py-8 text-[#4a3a31] sm:px-6">
      <main className="mx-auto max-w-[430px] overflow-hidden rounded-[2rem] border border-[#ead8c9] bg-white shadow-2xl">
        <section className="relative h-[520px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1546015720-b8b30df5aa27?q=80&w=900&auto=format&fit=crop"
            alt="Baby shower en tonos suaves"
            fill
            sizes="430px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#fff8f1] via-white/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a87859]">Baby shower</p>
            <h1 className="mt-4 font-serif text-5xl leading-none text-[#4a3a31]">Dulce espera</h1>
            <p className="mt-4 text-sm leading-6 text-[#7b6658]">
              Acompáñanos a celebrar la llegada de nuestra bebé con una tarde llena de amor, juegos y abrazos.
            </p>
          </div>
        </section>

        <section className="space-y-5 px-8 pb-10 text-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[#f8eee6] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#a87859]">Fecha</p>
              <p className="mt-2 font-serif text-3xl">18 Jul</p>
              <p className="text-xs text-[#8a7568]">Sábado</p>
            </div>
            <div className="rounded-2xl bg-[#f8eee6] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#a87859]">Hora</p>
              <p className="mt-2 font-serif text-3xl">4:00</p>
              <p className="text-xs text-[#8a7568]">PM</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#ead8c9] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#a87859]">Lugar</p>
            <h2 className="mt-3 font-serif text-2xl">Jardín Las Nubes</h2>
            <p className="mt-2 text-sm leading-6 text-[#7b6658]">Av. Primavera 245, Guadalajara, Jalisco.</p>
            <button className="mt-5 rounded-full bg-[#4a3a31] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Ver ubicación
            </button>
          </div>

          <div className="rounded-2xl bg-[#fbf7f2] p-6 text-left">
            <h3 className="font-serif text-2xl">Detalles para invitados</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#7b6658]">
              <li>• Mesa de regalos disponible en Liverpool y Amazon.</li>
              <li>• Dress code sugerido: tonos pastel.</li>
              <li>• Confirma tu asistencia antes del 5 de julio.</li>
            </ul>
          </div>

          <button className="w-full rounded-full bg-[#c28f6a] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#c28f6a]/20">
            Confirmar asistencia
          </button>
        </section>
      </main>
    </div>
  )
}

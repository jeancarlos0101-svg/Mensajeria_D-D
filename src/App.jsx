import React, { useState } from "react";
import {
  ShieldCheck,
  Clock,
  Zap,
  MapPin,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  PackageCheck,
  Truck,
  Building2,
  Calculator,
  ChevronRight,
  PhoneCall,
} from "lucide-react";

export default function App() {
  const [distancia, setDistancia] = useState(5);
  const [tipoServicio, setTipoServicio] = useState("express");
  const phoneNumber = "50661717456"; // Reemplazar con tu número de WhatsApp

  // Cálculo estimado
  const tarifaBase =
    tipoServicio === "express"
      ? 2500
      : tipoServicio === "mismo_dia"
        ? 1800
        : 4000;
  const precioEstimado = tarifaBase + distancia * 350;

  const handleWhatsApp = (mensaje) => {
    const text = encodeURIComponent(
      mensaje ||
        `Hola, me gustaría solicitar un servicio de mensajería para aproximadamente ${distancia} km (${tipoServicio.toUpperCase()}).`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div class="min-h-screen bg-[#090A0F] text-slate-100 overflow-x-hidden selection:bg-amber-500 selection:text-black">
      {/* GLOW DE FONDO AMBIENTAL */}
      <div class="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* NAVBAR */}
      <header class="sticky top-0 z-50 backdrop-blur-xl bg-[#090A0F]/80 border-b border-white/5">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Zap class="w-5 h-5 text-black stroke-[2.5]" />
            </div>
            <span class="text-xl font-bold tracking-wider text-white">
              MENSAJERÍA <span class="text-amber-500">D&D</span>
            </span>
          </div>

          <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#servicios" class="hover:text-amber-400 transition-colors">
              Servicios
            </a>
            <a
              href="#calculadora"
              class="hover:text-amber-400 transition-colors"
            >
              Cotizador
            </a>
            <a
              href="#beneficios"
              class="hover:text-amber-400 transition-colors"
            >
              Cobertura
            </a>
          </nav>

          <button
            onClick={() =>
              handleWhatsApp(
                'Hola Mensajería D&D, deseo coordinar un envío de mensajería urgente.'
              )
            }
            class="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer text-sm"
          >
            <MessageCircle class="w-4 h-4 fill-black" />
            <span>Pedir Mensajero</span>
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section class="relative z-10 pt-20 pb-16 px-6 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7 space-y-8">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Mensajería Privada VIP para Emprendedores
            </div>

            <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Logística rápida, <br />
              <span class="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                segura y sin sorpresas.
              </span>
            </h1>

            <p class="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Entrega de trámites, paquetes, documentos y productos para tu
              negocio. Garantizamos tiempos récord, rastreo en directo y
              atención personalizada.
            </p>

            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => handleWhatsApp()}
                class="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-amber-500/20 text-base"
              >
                <span>Solicitar Envío Inmediato</span>
                <ArrowRight class="w-5 h-5" />
              </button>

              <a
                href="#calculadora"
                class="flex items-center justify-center gap-2 glass-card hover:bg-white/5 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-all border border-white/10 text-base"
              >
                <Calculator class="w-5 h-5 text-amber-400" />
                <span>Calcular Tarifa</span>
              </a>
            </div>

            <div class="pt-6 grid grid-cols-3 gap-6 border-t border-white/10">
              <div>
                <p class="text-2xl font-bold text-white">99.8%</p>
                <p class="text-xs text-slate-400">Puntualidad de entrega</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-white">&lt; 45 min</p>
                <p class="text-xs text-slate-400">Promedio express</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-white">100%</p>
                <p class="text-xs text-slate-400">Paquetes asegurados</p>
              </div>
            </div>
          </div>

          {/* TARJETA INTERACTIVA DE DEMOSTRACIÓN / ESTADO */}
          <div class="lg:col-span-5 relative">
            <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 to-amber-700 opacity-20 blur-xl pointer-events-none" />

            <div class="relative glass-card p-6 sm:p-8 rounded-3xl space-y-6">
              <div class="flex items-center justify-between pb-4 border-b border-white/10">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span class="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                    Servicio Activo
                  </span>
                </div>
                <span class="text-xs text-slate-400 font-mono">
                  ID: #VX-8921
                </span>
              </div>

              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                    <MapPin class="w-4 h-4" />
                  </div>
                  <div>
                    <p class="text-xs text-slate-400 uppercase font-medium">
                      Origen
                    </p>
                    <p class="text-sm font-semibold text-slate-200">
                      Oficina Central / San José
                    </p>
                  </div>
                </div>

                <div class="ml-4 border-l-2 border-dashed border-amber-500/30 h-6" />

                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                    <PackageCheck class="w-4 h-4" />
                  </div>
                  <div>
                    <p class="text-xs text-slate-400 uppercase font-medium">
                      Destino Cliente
                    </p>
                    <p class="text-sm font-semibold text-slate-200">
                      Escazú Corporate Center
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-[#12151E] p-4 rounded-2xl border border-white/5 space-y-2">
                <div class="flex justify-between text-xs">
                  <span class="text-slate-400">Tiempo Estimado de Llegada</span>
                  <span class="text-amber-400 font-bold">18 min</span>
                </div>
                <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div class="w-3/4 h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full" />
                </div>
              </div>

              <div class="pt-2 flex items-center gap-3 text-xs text-slate-400 bg-amber-500/5 p-3 rounded-xl border border-amber-500/10">
                <ShieldCheck class="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Cadena de custodia verificada mediante firma digital y foto de
                  comprobante.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COTIZADOR INTERACTIVO */}
      <section
        id="calculadora"
        class="py-20 px-6 max-w-5xl mx-auto relative z-10"
      >
        <div class="text-center space-y-3 mb-12">
          <h2 class="text-3xl font-bold text-white">
            Calculadora Inteligente de Envíos
          </h2>
          <p class="text-slate-400 max-w-xl mx-auto">
            Calcula un estimado de tu tarifa al instante y coordina por WhatsApp
            sin formularios largos.
          </p>
        </div>

        <div class="glass-card p-8 sm:p-10 rounded-3xl space-y-8">
          <div class="grid md:grid-cols-3 gap-4">
            {[
              {
                id: "express",
                label: "Express Directo",
                time: "< 60 min",
                desc: "Prioridad máxima sin paradas intermedias.",
              },
              {
                id: "mismo_dia",
                label: "Mismo Día",
                time: "2 - 4 Horas",
                desc: "Ideal para e-commerce y entregas de tienda.",
              },
              {
                id: "tramite",
                label: "Trámite Legal/Bancario",
                time: "Dedicado",
                desc: "Gestión con firma y entrega de documentos.",
              },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setTipoServicio(s.id)}
                class={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  tipoServicio === s.id
                    ? "border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/10"
                    : "border-white/5 bg-[#12151E]/50 hover:border-white/20"
                }`}
              >
                <div class="flex justify-between items-center mb-2">
                  <span class="font-bold text-white text-sm">{s.label}</span>
                  <span class="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-semibold">
                    {s.time}
                  </span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </button>
            ))}
          </div>

          <div class="space-y-4">
            <div class="flex justify-between items-center text-sm">
              <span class="text-slate-300 font-medium">
                Distancia aproximada:
              </span>
              <span class="text-amber-400 font-bold text-lg">
                {distancia} KM
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="35"
              value={distancia}
              onChange={(e) => setDistancia(Number(e.target.value))}
              class="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <div class="flex justify-between text-xs text-slate-500">
              <span>1 km (Local)</span>
              <span>18 km</span>
              <span>35 km (GAM / Regional)</span>
            </div>
          </div>

          <div class="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p class="text-xs text-slate-400 uppercase tracking-wider">
                Inversión Estimada
              </p>
              <p class="text-3xl font-extrabold text-white">
                ₡{precioEstimado.toLocaleString("es-CR")}
                <span class="text-xs font-normal text-slate-400 ml-1">
                  CRC aprox.
                </span>
              </p>
            </div>

            <button
              onClick={() =>
                handleWhatsApp(
                  `Hola, coticé un envío ${tipoServicio.toUpperCase()} de aproximadamente ${distancia} km con costo estimado de ₡${precioEstimado.toLocaleString("es-CR")}. ¿Podemos agendarlo?`,
                )
              }
              class="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <MessageCircle class="w-5 h-5 fill-black" />
              <span>Confirmar por WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* SERVICIOS / PILARES */}
      <section
        id="servicios"
        class="py-20 px-6 max-w-7xl mx-auto relative z-10"
      >
        <div class="text-center space-y-3 mb-16">
          <h2 class="text-3xl font-bold text-white">
            Soluciones Diseñadas para Negocios
          </h2>
          <p class="text-slate-400 max-w-xl mx-auto">
            Adaptamos la mensajería a la dinámica operativa de tu emprendimiento
            o empresa.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Truck class="w-6 h-6 text-amber-400" />,
              title: "Entregas E-commerce",
              desc: "Despacho continuo de tus ventas en redes sociales y sitios web. Garantizamos cobro contra entrega si lo requieres.",
            },
            {
              icon: <Building2 class="w-6 h-6 text-amber-400" />,
              title: "Trámites Empresariales",
              desc: "Firma de contratos, recolección de facturas en físico y depósito de cheques con absoluta confidencialidad.",
            },
            {
              icon: <Clock class="w-6 h-6 text-amber-400" />,
              title: "Mensajero Dedicado",
              desc: "Contrata bloques de horas o días completos para cubrir picos de demanda operativa en tu emprendimiento.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              class="glass-card glass-card-hover p-8 rounded-3xl space-y-4"
            >
              <div class="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                {item.icon}
              </div>
              <h3 class="text-xl font-bold text-white">{item.title}</h3>
              <p class="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <footer class="py-16 border-t border-white/10 relative z-10 bg-[#06070A]">
        <div class="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h3 class="text-2xl font-bold text-white">
            ¿Listo para elevar la calidad de tus entregas?
          </h3>
          <p class="text-slate-400 max-w-md mx-auto text-sm">
            Escríbenos directamente y agenda tu primer envío en menos de 2
            minutos.
          </p>

          <button
            onClick={() =>
              handleWhatsApp('Hola Mensajería D&D, deseo coordinar mi primer envío.')
            }
            class="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-amber-500/20"
          >
            <PhoneCall class="w-5 h-5" />
            <span>Contactar Mensajero Ahora</span>
          </button>

          <p class="text-xs text-slate-600 pt-8">
            © {new Date().getFullYear()} Mensajería D&D. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

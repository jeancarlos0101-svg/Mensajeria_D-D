import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Zap, 
  MapPin, 
  ArrowRight, 
  MessageCircle, 
  PackageCheck, 
  Truck, 
  Building2, 
  Calculator,
  PhoneCall
} from 'lucide-react';

export default function App() {
  const [distancia, setDistancia] = useState(5);
  const [tipoServicio, setTipoServicio] = useState('express');
  
  // Reemplaza con tu número de WhatsApp real de Costa Rica (ejemplo: 50688888888)
  const phoneNumber = "50600000000"; 

  // Cálculo estimado de tarifas (CRC)
  const tarifaBase = tipoServicio === 'express' ? 2500 : tipoServicio === 'mismo_dia' ? 1800 : 4000;
  const precioEstimado = tarifaBase + (distancia * 350);

  const handleWhatsApp = (mensaje) => {
    const defaultMsg = `Hola Mensajería D&D, me gustaría solicitar un servicio de mensajería para aproximadamente ${distancia} km (${tipoServicio.toUpperCase()}).`;
    const text = encodeURIComponent(mensaje || defaultMsg);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 overflow-x-hidden selection:bg-amber-500 selection:text-black font-sans">
      
      {/* GLOW DE FONDO AMBIENTAL */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* NAVBAR REVISADO Y COMPLETO */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#090A0F]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* ISOTIPO & LOGO DE MARCA */}
          <a href="#" className="flex items-center gap-3.5 group cursor-pointer select-none">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#12151E] via-[#1E2330] to-[#090A0F] border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-500/10 group-hover:border-amber-400 group-hover:shadow-amber-500/20 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-amber-500/10 blur-sm pointer-events-none" />
              <Zap className="w-5 h-5 text-amber-400 relative z-10 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-wider text-white leading-tight">
                MENSAJERÍA <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">D&D</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
                Logística Ejecutiva
              </span>
            </div>
          </a>

          {/* NAVEGACIÓN PRINCIPAL */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#servicios" className="hover:text-amber-400 transition-colors">Servicios</a>
            <a href="#calculadora" className="hover:text-amber-400 transition-colors">Cotizador</a>
            <a href="#horarios" className="hover:text-amber-400 transition-colors">Horarios</a>
            <a href="#beneficios" className="hover:text-amber-400 transition-colors">Garantía</a>
          </nav>

          {/* BOTÓN DE CONTACTO DIRECTO */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleWhatsApp('Hola Mensajería D&D, deseo coordinar un envío urgente.')}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span className="hidden sm:inline">Pedir Mensajero</span>
              <span className="sm:hidden">Pedir</span>
            </button>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-16 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: MENSAJE PRINCIPAL */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Mensajería Privada VIP & Logística Ejecutiva
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Logística rápida, <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                segura y sin sorpresas.
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Entrega de trámites, paquetes, documentos y productos para tu negocio. Garantizamos tiempos récord, rastreo en directo y atención personalizada.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button 
                onClick={() => handleWhatsApp()}
                className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-amber-500/20 text-base cursor-pointer"
              >
                <span>Solicitar Envío Inmediato</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a 
                href="#calculadora"
                className="flex items-center justify-center gap-2 glass-card hover:bg-white/5 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-all border border-white/10 text-base"
              >
                <Calculator className="w-5 h-5 text-amber-400" />
                <span>Calcular Tarifa</span>
              </a>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold text-white">99.8%</p>
                <p className="text-xs text-slate-400">Puntualidad de entrega</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">&lt; 45 min</p>
                <p className="text-xs text-slate-400">Promedio express</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-slate-400">Paquetes asegurados</p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: IMAGEN DE BRANDING */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-amber-500/40 via-amber-600/20 to-transparent blur-2xl pointer-events-none" />
            
            <div className="relative glass-card p-3 rounded-3xl overflow-hidden border border-amber-500/30 group">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/brand-hero.jpg.jfif" 
                  alt="Mensajería D&D Branding" 
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-[#090A0F]/80 p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide">PRECISION IN MOTION</span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                    Servicio Premium
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COTIZADOR INTERACTIVO */}
      <section id="calculadora" className="py-20 px-6 max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold text-white">Calculadora Inteligente de Envíos</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Calcula un estimado de tu tarifa al instante y coordina por WhatsApp sin formularios largos.</p>
        </div>

        <div className="glass-card p-8 sm:p-10 rounded-3xl space-y-8">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { id: 'express', label: 'Express Directo', time: '< 60 min', desc: 'Prioridad máxima sin paradas intermedias.' },
              { id: 'mismo_dia', label: 'Mismo Día', time: '2 - 4 Horas', desc: 'Ideal para e-commerce y entregas de tienda.' },
              { id: 'tramite', label: 'Trámite Legal/Bancario', time: 'Dedicado', desc: 'Gestión con firma y entrega de documentos.' }
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setTipoServicio(s.id)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  tipoServicio === s.id 
                    ? 'border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/10' 
                    : 'border-white/5 bg-[#12151E]/50 hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white text-sm">{s.label}</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-semibold">{s.time}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-300 font-medium">Distancia aproximada:</span>
              <span className="text-amber-400 font-bold text-lg">{distancia} KM</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="35" 
              value={distancia}
              onChange={(e) => setDistancia(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>1 km (Local)</span>
              <span>18 km</span>
              <span>35 km (GAM / Regional)</span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Inversión Estimada</p>
              <p className="text-3xl font-extrabold text-white">
                ₡{precioEstimado.toLocaleString('es-CR')}
                <span className="text-xs font-normal text-slate-400 ml-1">CRC aprox.</span>
              </p>
            </div>

            <button 
              onClick={() => handleWhatsApp(`Hola Mensajería D&D, coticé un envío ${tipoServicio.toUpperCase()} de aproximadamente ${distancia} km con costo estimado de ₡${precioEstimado.toLocaleString('es-CR')}. ¿Podemos agendarlo?`)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>Confirmar por WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl font-bold text-white">Soluciones Diseñadas para Negocios</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Adaptamos la mensajería a la dinámica operativa de tu emprendimiento o empresa.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Truck className="w-6 h-6 text-amber-400" />,
              title: "Entregas E-commerce",
              desc: "Despacho continuo de tus ventas en redes sociales y sitios web. Garantizamos cobro contra entrega si lo requieres."
            },
            {
              icon: <Building2 className="w-6 h-6 text-amber-400" />,
              title: "Trámites Empresariales",
              desc: "Firma de contratos, recolección de facturas en físico y depósito de cheques con absoluta confidencialidad."
            },
            {
              icon: <Clock className="w-6 h-6 text-amber-400" />,
              title: "Mensajero Dedicado",
              desc: "Contrata bloques de horas o días completos para cubrir picos de demanda operativa en tu emprendimiento."
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-card glass-card-hover p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HORARIOS Y DISPONIBILIDAD */}
      <section id="horarios" className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 blur-[90px] pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                Servicio Activo & Monitoreado
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Horario de Atención <br />
                <span className="text-amber-400">& Operación Logística</span>
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                Recibimos solicitudes por WhatsApp 24/7. Las entregas presenciales y mensajería en ruta se ejecutan en las siguientes franjas horarias:
              </p>
            </div>

            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              
              <div className="bg-[#12151E]/80 p-5 rounded-2xl border border-amber-500/20 space-y-2">
                <div className="flex items-center justify-between text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  <span>Lunes a Viernes</span>
                  <span className="bg-amber-500/10 px-2 py-0.5 rounded text-[10px]">Jornada Completa</span>
                </div>
                <p className="text-xl font-bold text-white">7:00 AM – 7:00 PM</p>
                <p className="text-xs text-slate-400">Envíos express, programados y trámites bancarios.</p>
              </div>

              <div className="bg-[#12151E]/80 p-5 rounded-2xl border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  <span>Sábados</span>
                  <span className="bg-white/5 px-2 py-0.5 rounded text-[10px] text-slate-300">Medio Día</span>
                </div>
                <p className="text-xl font-bold text-white">8:00 AM – 2:00 PM</p>
                <p className="text-xs text-slate-400">Entregas de e-commerce y paquetes prioritarios.</p>
              </div>

              <div className="sm:col-span-2 bg-[#12151E]/40 p-4 rounded-2xl border border-white/5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0">
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Domingos y Feriados</p>
                    <p className="text-xs text-slate-400">Servicios especiales o emergencias VIP bajo reserva previa.</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleWhatsApp('Hola Mensajería D&D, deseo consultar la disponibilidad para una entrega programada un domingo/feriado.')}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 whitespace-nowrap px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 transition-all cursor-pointer"
                >
                  Consultar
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="beneficios" className="py-16 border-t border-white/10 relative z-10 bg-[#06070A]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">¿Listo para elevar la calidad de tus entregas?</h3>
          <p className="text-slate-400 max-w-md mx-auto text-sm">Escríbenos directamente y agenda tu primer envío en menos de 2 minutos.</p>
          
          <button 
            onClick={() => handleWhatsApp('Hola Mensajería D&D, deseo coordinar mi primer envío.')}
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-amber-500/20 cursor-pointer"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Contactar Mensajero Ahora</span>
          </button>

          <p className="text-xs text-slate-600 pt-8">
            © {new Date().getFullYear()} Mensajería D&D. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
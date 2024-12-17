'use client';
import '../globals.css';
import Link from 'next/link';
import './estiloServicios.css';
import './contenedor.css';
import Navbar from './navbar';

export default function About() {
    return (
        <>
            <div className="logo">
                <Link href="/">Colombian Dreams</Link>
            </div>
            <div className="hero-container">
                <div className="container2">
                    <Navbar />
                    <div className="text-main">
                        <h1 className="heading-primary-quienes-somos3">Transformamos tus ideas en proyectos exitosos</h1>
                        <h3 className="vision3">En Colombian dreams ayudamos a personas y empresas a planificar, estructurar y ejecutar proyectos de cualquier tipo, desde metas personales hasta grandes retos corporativos. Combinamos herramientas técnicas de gestión con un enfoque cercano y humano, para acompañarte en cada paso y asegurarnos de que logres tus objetivos con claridad, eficiencia y propósito.</h3>
                        <div className="pricing-container">
                         <div className="hero-container3">
                            <div className="pricing-cards">
                                <div className="card popular">

                                    <h3><b>🌱 Plan Personal: Alcanzando tus Metas</b></h3>
                                    <ul>
                                    <li>Perfecto para: Personas que quieren claridad, estructura y motivación para cumplir objetivos personales o retos específicos.</li>
                                        <li><b>Lo que obtienes:</b></li>
                                        <li> 🎯 Sesión inicial para definir tus metas (1 hora).  </li>
                                        <li>✍️ Plan de acción personalizado paso a paso.  </li>
                                        <li>📆 Seguimiento quincenal (2 sesiones de 45 minutos al mes).   </li>
                                        <li>🌟 Coaching para superar bloqueos y mantener el enfoque.   </li>
                                        <li>💡 Sugerencias de herramientas o recursos que optimicen tu proceso.</li>
                                        <li>‎ </li>
                                        <li>‎ </li>
                                        <button className='boton' onClick={() => {
    window.open(
      "https://api.whatsapp.com/send/?phone=573229567177&text=Hola,%20quiero%20mas%20información%20sobre%20el%20plan%20personal.&type=phone_number&app_absent=0",
      "_blank"
    );
  }}>¡Consulta ahora!</button>
                                    </ul>
                                </div>
                                <div className="card">
                                    <h3><b>🌟 Plan Starter: Activa tu Proyecto</b></h3>
                                    <ul>
                                    <li>Perfecto para: Quienes tienen una idea o proyecto en mente y necesitan una base sólida para comenzar.</li>
                                        <li><b>Lo que obtienes:</b></li>
                                        <li> 🛠️ Sesión de diagnóstico inicial para aclarar objetivos y prioridades. </li>
                                        <li>📋 Hoja de ruta con los pasos iniciales (con plantillas incluidas).    </li>
                                        <li>🚀 Herramientas digitales recomendadas para organizarte.     </li>
                                        <li>‎ </li>
                                        <button className='boton'onClick={() => {
    window.open(
      "https://api.whatsapp.com/send/?phone=573229567177&text=Hola,%20quiero%20mas%20información%20sobre%20el%20plan%20starter.&type=phone_number&app_absent=0",
      "_blank"
    );
  }}>¡Consulta ahora!</button>
                                    </ul>
                                 
                                </div>
                                <div className="card">
                                    <h3><b> 🔥 Plan Builder: Avanza con Estrategia</b></h3>
                                    
                                    <ul>
                                    <li>Perfecto para: Proyectos o metas en marcha que necesitan estructura y seguimiento.</li>
                                        <li><b>Lo que obtienes:</b></li>
                                        <li> ✔️ Todo lo del Plan Starter.   </li>
                                        <li>📆 Consultoría estratégica (2 sesiones al mes).   </li>
                                        <li>🔍 Evaluación de avances y ajustes al plan.   </li>
                                        <li>⚡ Análisis de riesgos y guía para mantener el enfoque.     </li>
                                        <li>‎ </li>
                                        <button className='boton' onClick={() => {
    window.open(
      "https://api.whatsapp.com/send/?phone=573229567177&text=Hola,%20quiero%20mas%20información%20sobre%20el%20plan%20builder.&type=phone_number&app_absent=0",
      "_blank"
    );
  }}>¡Consulta ahora!</button>
                                    </ul>
                                </div>
                                <div className="card">
                                    <h3><b> 💎 Plan Visionary: Gestión Total de tu Proyecto</b></h3>
                                   
                                    <ul>
                                    <li>Perfecto para: Proyectos  Robustos y empresariales / corporativos.</li>
                                        <li><b>Lo que obtienes:</b></li>
                                        <li> 🌟 Todo lo del Plan Builder.    </li>
                                        <li>🗂️ Planificación integral (cronograma, recursos, presupuesto).   </li>
                                        <li>📈 Liderazgo de reuniones, asignacion de tareas y supervisión de avances     </li>
                                        <li>📝 Reportes periódicos para medir resultados.    </li>
                                        <li>🎯 Sesión final para evaluar logros y aprendizajes.    </li>
                                        <li>‎ </li>
                                        <button className='boton' onClick={() => {
    window.open(
      "https://api.whatsapp.com/send/?phone=573229567177&text=Hola,%20quiero%20mas%20información%20sobre%20el%20plan%20visionary.&type=phone_number&app_absent=0",
      "_blank"
    );
  }}>¡Consulta ahora!</button>
                                    </ul>
                                    
                                </div>
                                
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

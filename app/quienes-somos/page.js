'use client';
import '../globals.css';
import Link from 'next/link';
import './estilos.css';
import Navbar from './navbar'; 
import { useState } from 'react';

export default function About() {
    return (
        <>
            <div className="logo">
                <Link href="/">Colombian Dreams</Link>
            </div>
            <div className="hero-container4">
                <div className="container4">
                    <Navbar /> 
                    <div className="text-main">
                        <h1 className="heading-primary-quienes-somos">Nuestro equipo</h1>
                        <h3 className='vision'>Somos tu impulso para hacer realidad tus ideas y proyectos.</h3>
                      
                                <p className="heading-secondary-quienes-somos">
                                    Óscar Benjumea, un profesional apasionado por materializar sueños y transformar ideas en realidades;
                                    Especialista en Gerencia de Proyectos y profesional en Mercadeo, Óscar cuenta con una sólida trayectoria en la dirección e implementación de proyectos en el sector financiero.
                                </p>
                                <p className="heading-secondary-quienes-somos">
                                    Su experiencia abarca áreas clave como sostenibilidad, planeación estratégica, comercial, gestión de riesgos, operaciones, capacitación y mejora de procesos.
                                    Pero su verdadero diferencial no solo radica en su experiencia técnica, sino en su habilidad para conectar contigo de manera auténtica y cercana. Entendemos que detrás de cada proyecto hay personas con historias, aspiraciones y retos únicos. Por eso, nuestro enfoque va más allá de los números y las estrategias: se trata de acompañarte, de escucharte y de trabajar contigo como un verdadero equipo.
                                </p>

                                <p className="heading-secondary-quienes-somos">
                                    En este camino, no estarás solo. Con un seguimiento personalizado y una guía constante, cada paso que demos juntos estará alineado con tus metas, transformándolas en logros significativos y duraderos.
                                    Porque en la gestión de proyectos no solo importa el destino; importa cómo llegamos allí y quién está a tu lado en el proceso.
                                    Si buscas no solo alcanzar tus metas, sino convertirlas en éxitos que impacten tu vida, has llegado al lugar indicado.
                                </p>
   
                                <h4 className="linkedin">
                                    Para más información sobre su trayectoria profesional, consulta su
                                    <a className='hipervinculo' href="https://www.linkedin.com/in/oscar-benjumea" target="_blank"> LinkedIn aquí</a>
                                </h4>
                          
                    </div>
                    <div className="image-container2">
                        <img src="/foto.jpeg" alt="Oscar Benjumea" className="profile-image" />
                    </div>
                    <img className='boton-inicio3'
  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
  alt="Agendar sesión por WhatsApp"
  style={{ cursor: "pointer"}}
  onClick={() => {
    window.open(
      "https://api.whatsapp.com/send/?phone=573229567177&text=Hola,%20quiero%20agendar%20una%20sesión.&type=phone_number&app_absent=0",
      "_blank"
    );
  }}
/>
<p className='contacto'>Contactanos</p>

                </div>

                <footer className="footerQuienes">
        <p>&copy; 2024 Colombian Dreams. Todos los derechos reservados.</p>
        <p>
          Contáctanos: <a href="mailto:info@colombiandreams.co">info@colombiandreams.co</a>
        </p>
      </footer>

            </div>
        </>
    );
}
